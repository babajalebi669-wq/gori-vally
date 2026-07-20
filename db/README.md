# Database

## Current (V1)

Only one table exists right now: `waitlist` (see `migrations/001_create_waitlist.sql`).
That's all V1 needs — this version of Gori Valley exists purely to validate
demand, not to sell anything yet.

## Running the migration

1. Open your Supabase project -> **SQL Editor** -> **New query**.
2. Paste the contents of `migrations/001_create_waitlist.sql`.
3. Run it.

(Or, using the Supabase CLI: copy the file into `supabase/migrations/` with a
timestamp prefix and run `supabase db push`.)

## Planned future tables (not built yet)

The static content in `lib/data/*.ts` (destinations, experiences, products,
journal articles) is intentionally typed to match what these future tables
would return, so swapping `lib/data/products.ts` for a real Supabase query
later shouldn't require changing any component props:

- `products`
- `experiences`
- `destinations`
- `journal`
- `categories`
- `users`
- `orders`
- `newsletter_campaigns`

None of these are needed for V1 and should stay out of scope until the
waitlist has actually validated demand.
