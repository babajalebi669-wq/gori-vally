import { createBrowserClient } from "@supabase/ssr";

/**
 * Supabase client for use inside Client Components ("use client").
 * Uses the public anon key, so it is always subject to Row Level Security —
 * see db/migrations/001_create_waitlist.sql for the policies in effect.
 *
 * Not used by the waitlist form today (that goes through the API route so
 * we have one place to validate, rate-limit and log), but this is here for
 * future client-side reads, e.g. realtime features.
 */
export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}
