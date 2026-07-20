import { createClient as createSupabaseClient } from "@supabase/supabase-js";

/**
 * Service-role Supabase client. This BYPASSES Row Level Security entirely.
 *
 * Server-only. Never import this file into a Client Component, and never
 * expose SUPABASE_SERVICE_ROLE_KEY to the browser.
 *
 * Not called anywhere in V1 — the waitlist insert intentionally goes
 * through the anon-key client in lib/supabase/server.ts so it's provably
 * scoped by the "public can insert" RLS policy. This client is here for
 * future privileged server-side work: an admin dashboard reading the
 * waitlist, exports, etc.
 */
export function createAdminClient() {
  if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
    throw new Error("SUPABASE_SERVICE_ROLE_KEY is not set");
  }

  return createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY,
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    }
  );
}
