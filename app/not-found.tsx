import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-cream px-6 text-center">
      <p className="mb-4 font-mono text-xs uppercase tracking-widest text-gold-dark">404</p>
      <h1 className="mb-4 font-serif text-4xl text-forest-dark md:text-5xl">Off The Trail</h1>
      <p className="mb-8 max-w-md text-slate">
        This page doesn&apos;t exist yet — much like most of Gori Valley, it&apos;s still being
        built.
      </p>
      <Button asChild variant="gold">
        <Link href="/">Back to Home</Link>
      </Button>
    </div>
  );
}
