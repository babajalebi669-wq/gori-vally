-- ============================================================================
-- Gori Valley — Waitlist table migration
-- ============================================================================
-- Run this in the Supabase SQL Editor (Dashboard -> SQL Editor -> New query)
-- or via the Supabase CLI (copy into supabase/migrations/ with a timestamp
-- prefix and run `supabase db push`).
-- ============================================================================

-- Required for gen_random_uuid()
create extension if not exists "pgcrypto";

create table if not exists public.waitlist (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  source text not null default 'unknown',
  status text not null default 'pending',
  created_at timestamptz not null default now(),
  notes text,
  metadata jsonb not null default '{}'::jsonb,

  constraint waitlist_email_format check (
    email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
  ),
  constraint waitlist_status_check check (
    status in ('pending', 'confirmed', 'invited', 'unsubscribed')
  )
);

comment on table public.waitlist is 'Email waitlist signups for Gori Valley V1 demand validation.';
comment on column public.waitlist.source is 'Where the signup came from, e.g. "hero", "waitlist-section", "product-thulma-blanket", "page-explore".';
comment on column public.waitlist.metadata is 'Freeform JSON for extra context (user agent, UTM params, etc.) without needing a schema change.';

-- Fast "newest first" lookups for a future admin dashboard
create index if not exists waitlist_created_at_idx on public.waitlist (created_at desc);

-- ----------------------------------------------------------------------------
-- Grants
-- ----------------------------------------------------------------------------
-- GRANT and RLS are two different layers: GRANT controls whether a role can
-- reach the table via the Data API at all; RLS then controls which rows/
-- operations are allowed within that. As of May 30 2026, new Supabase
-- projects no longer auto-grant table access to anon/authenticated/
-- service_role the way older projects did — without these, Postgres
-- rejects the request with a 42501 permission error before RLS policies
-- are even evaluated. Safe to run on older projects too (granting an
-- already-granted privilege is a harmless no-op).
grant insert on public.waitlist to anon;
grant select, insert, update, delete on public.waitlist to service_role;

-- ----------------------------------------------------------------------------
-- Row Level Security
-- ----------------------------------------------------------------------------
alter table public.waitlist enable row level security;

-- Anyone using the public anon/publishable key can insert a new signup —
-- this is what powers the public waitlist form (see app/api/waitlist/route.ts).
create policy "Public can insert into waitlist"
  on public.waitlist
  for insert
  to anon
  with check (true);

-- No SELECT / UPDATE / DELETE policy is defined for `anon` or `authenticated`,
-- so those operations are denied by default under RLS. All reads happen
-- server-side with the service_role/secret key (see lib/supabase/admin.ts),
-- which bypasses RLS's row-level checks (it still needed the GRANT above to
-- reach the table at all) — this is how "public can insert, only admin can
-- read" is enforced today, with no auth system required yet.
--
-- TODO (future): once Supabase Auth is added for an admin dashboard, add a
-- SELECT policy scoped to an `is_admin` claim instead of relying solely on
-- the service role key, e.g.:
--
--   create policy "Admins can read waitlist"
--     on public.waitlist for select
--     to authenticated
--     using (coalesce((auth.jwt() -> 'app_metadata' ->> 'is_admin')::boolean, false));
