import { NextResponse } from "next/server";
import { z } from "zod";
import { createClient } from "@/lib/supabase/server";

const waitlistSchema = z.object({
  email: z.email("Enter a valid email address."),
  source: z.string().trim().min(1).max(64).optional().default("unknown"),
});

// --- Minimal in-memory rate limiter -----------------------------------
// This only limits requests within a single warm serverless instance and
// resets on cold start, so it is NOT sufficient on its own for production
// traffic on Vercel's multi-instance runtime.
// TODO (before launch): replace with a distributed limiter, e.g.
//   - Upstash Redis (@upstash/ratelimit)
//   - Vercel KV
//   - Vercel Firewall / rate limiting rules
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const requestLog = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (requestLog.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  timestamps.push(now);
  requestLog.set(ip, timestamps);
  return timestamps.length > RATE_LIMIT_MAX_REQUESTS;
}
// ------------------------------------------------------------------------

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many attempts — wait a minute and try again." },
        { status: 429 }
      );
    }

    const body = await request.json().catch(() => null);
    const email = typeof body?.email === "string" ? body.email.trim().toLowerCase() : body?.email;
    const parsed = waitlistSchema.safeParse({ ...body, email });

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message ?? "That email didn't look right." },
        { status: 400 }
      );
    }

    const { email: validEmail, source } = parsed.data;

    // Uses the anon-key client, so this insert is scoped by the
    // "public can insert" RLS policy — see db/migrations/001_create_waitlist.sql.
    const supabase = await createClient();
    const { error } = await supabase.from("waitlist").insert({
      email: validEmail,
      source,
      metadata: {
        userAgent: request.headers.get("user-agent") ?? undefined,
      },
    });

    if (error) {
      // Postgres unique_violation on the email column — they're already in.
      // Treat this as a soft success rather than an error.
      if (error.code === "23505") {
        return NextResponse.json(
          { message: "You're already on the waitlist.", alreadyExists: true },
          { status: 200 }
        );
      }

      console.error("Supabase waitlist insert error:", error);
      return NextResponse.json(
        { error: "We couldn't save that — try again in a moment." },
        { status: 500 }
      );
    }

    return NextResponse.json({ message: "You're on the list." }, { status: 201 });
  } catch (err) {
    console.error("Waitlist route error:", err);
    return NextResponse.json(
      { error: "We couldn't save that — try again in a moment." },
      { status: 500 }
    );
  }
}

// TODO (future): once ready to actually email subscribers, wire up an ESP
// here (Resend, Loops, Mailchimp, ConvertKit, etc.) — either via a Supabase
// database webhook / Edge Function triggered on insert, or directly in this
// route after a successful insert. The `source` and `metadata` columns
// already support segmentation without a schema change.
