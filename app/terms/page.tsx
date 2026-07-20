import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms of Service for Gori Valley.",
};

export default function TermsPage() {
  return (
    <>
      <div className="flex min-h-[38vh] items-end bg-forest-dark px-6 pb-16 pt-32 text-cream lg:px-10">
        <div className="mx-auto w-full max-w-3xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-gold">Legal</p>
          <h1 className="font-serif text-4xl md:text-5xl">Terms</h1>
        </div>
      </div>
      <div className="bg-cream px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-3xl space-y-6 text-slate">
          <p className="rounded-md border border-gold/30 bg-gold/10 px-4 py-3 text-sm text-forest-dark">
            This is placeholder content for Version 1. Replace this page with official Terms of
            Service, reviewed by counsel, before taking real signups in production.
          </p>
          <p>
            Gori Valley is currently in a pre-launch, demand-validation stage. This website does
            not sell products, process payments or take bookings. Joining the waitlist only adds
            your email address to a list we&apos;ll use to share future updates.
          </p>
        </div>
      </div>
    </>
  );
}
