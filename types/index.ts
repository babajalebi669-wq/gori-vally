export interface Destination {
  slug: string;
  name: string;
  region: string;
  /** Real surveyed elevation, formatted for display, e.g. "2,200M" or a range "6,334–6,904M". */
  elevation: string;
  description: string;
  image: string;
}

export interface Experience {
  slug: string;
  title: string;
  story: string;
  image: string;
}

export interface Product {
  slug: string;
  name: string;
  story: string;
  image: string;
  comingSoon: boolean;
}

export interface JournalArticle {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface WaitlistApiResponse {
  message?: string;
  error?: string;
  alreadyExists?: boolean;
}

/**
 * Mirrors the `waitlist` table (see db/migrations/001_create_waitlist.sql).
 * Not read from the client anywhere in V1, but kept here so a future admin
 * dashboard has a typed shape to build against.
 */
export interface WaitlistEntry {
  id: string;
  email: string;
  source: string;
  status: "pending" | "confirmed" | "invited" | "unsubscribed";
  created_at: string;
  notes: string | null;
  metadata: Record<string, unknown>;
}
