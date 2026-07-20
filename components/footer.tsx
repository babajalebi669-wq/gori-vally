import Link from "next/link";
import { navLinks } from "@/lib/data/nav";

// TODO: replace href="#" with real social URLs before launch.
const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "YouTube", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-forest-dark px-6 py-16 text-cream lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <div className="max-w-xs">
            <span className="font-serif text-2xl">Gori Valley</span>
            <p className="mt-4 text-sm leading-relaxed text-cream/60">
              Discover the Himalayas. Carry the mountains home.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div>
              <p className="mb-4 font-mono text-xs uppercase tracking-widest text-cream/50">
                Explore
              </p>
              <ul className="space-y-3">
                {navLinks.slice(1).map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-cream/80 transition-colors hover:text-cream"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-4 font-mono text-xs uppercase tracking-widest text-cream/50">
                Legal
              </p>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/privacy"
                    className="text-sm text-cream/80 transition-colors hover:text-cream"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-sm text-cream/80 transition-colors hover:text-cream"
                  >
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="mb-4 font-mono text-xs uppercase tracking-widest text-cream/50">
                Follow
              </p>
              <ul className="space-y-3">
                {socialLinks.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      className="text-sm text-cream/80 transition-colors hover:text-cream"
                    >
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-cream/10 pt-8">
          <p className="text-xs text-cream/50">
            © {new Date().getFullYear()} Gori Valley. Made in the Himalayas.
          </p>
        </div>
      </div>
    </footer>
  );
}
