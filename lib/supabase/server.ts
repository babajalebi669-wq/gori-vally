import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

/**
 * Supabase client for use inside Server Components and Route Handlers.
 * Uses the public anon key + the request's cookies, so it respects Row
 * Level Security and (once Supabase Auth is introduced) an authenticated
 * user's session.
 *
 * Next.js 15 made `cookies()` async, so this factory is async too — call it
 * as `const supabase = await createClient()`.
 */
export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {
            // `setAll` was called from a context that can't set cookies
            // (e.g. a Server Component render). Safe to ignore as long as
            // middleware is refreshing the session when auth is added.
          }
        },
      },
    }
  );
}
