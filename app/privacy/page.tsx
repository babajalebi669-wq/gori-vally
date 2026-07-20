import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Gori Valley.",
};

export default function PrivacyPage() {
  return (
    <>
      <div className="flex min-h-[38vh] items-end bg-forest-dark px-6 pb-16 pt-32 text-cream lg:px-10">
        <div className="mx-auto w-full max-w-3xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-gold">Legal</p>
          <h1 className="font-serif text-4xl md:text-5xl">Privacy Policy</h1>
        </div>
      </div>
      <div className="bg-cream px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-3xl space-y-6 text-slate">
          <p className="rounded-md border border-gold/30 bg-gold/10 px-4 py-3 text-sm text-forest-dark">
            This is placeholder content for Version 1. Replace this page with an official
            Privacy Policy, reviewed by counsel, before taking real signups in production.
          </p>
          <p>
            Gori Valley (&quot;we,&quot; &quot;us&quot;) collects the email address you provide
            when joining our waitlist, along with basic technical metadata such as your browser&apos;s
            user agent. We use this information solely to send you updates about our launch, new
            experiences and future collections.
          </p>
          <p>
            We do not sell your personal information. You may request removal from the waitlist
            at any time by contacting us.
          </p>
        </div>
      </div>
    </>
  );
}
