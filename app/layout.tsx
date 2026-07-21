import type { Metadata } from "next";
import { Fraunces, Work_Sans, IBM_Plex_Mono } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

// TODO: replace with the production domain before launch — Open Graph
// image URLs and the sitemap/robots routes resolve against this.
const SITE_URL = "https://gorivalley.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Gori Valley — Discover the Himalayas. Carry the Mountains Home.",
    template: "%s | Gori Valley",
  },
  description:
    "Gori Valley is a premium Himalayan travel and local products brand from the heart of Kumaon. Join the waitlist to be among the first explorers.",
  keywords: [
    "Himalayas",
    "Kumaon travel",
    "Gori Valley",
    "Munsiyari",
    "Askot",
    "Panchachuli",
    "Himalayan local products",
  ],
  openGraph: {
    title: "Gori Valley — Discover the Himalayas. Carry the Mountains Home.",
    description:
      "Explore hidden villages, mountain trails, local traditions and thoughtfully curated products from the heart of Kumaon.",
    url: "/",
    siteName: "Gori Valley",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Gori Valley — Himalayan travel and local products",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gori Valley — Discover the Himalayas.",
    description: "Join the waitlist for authentic Himalayan travel and local products from Kumaon.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // suppressHydrationWarning on <html>/<body> only ignores attribute
    // mismatches on these two nodes specifically — it does NOT disable
    // hydration checks anywhere else. It's here because browser extensions
    // (ad/analytics blockers, Grammarly, Dark Reader, etc.) commonly inject
    // attributes like `data-google-analytics-opt-out` onto <html> before
    // React hydrates, which otherwise logs a harmless but alarming-looking
    // console warning. See https://react.dev/link/hydration-mismatch
    <html
      lang="en"
      className={`${fraunces.variable} ${workSans.variable} ${plexMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Gori Valley",
              description:
                "Premium Himalayan travel and local products brand from Kumaon, India.",
              url: SITE_URL,
            }),
          }}
        />
      </head>
      <body className="font-sans" suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
        <Footer />

        {/*
          TODO: Analytics — wire these up once the site is ready to launch,
          not before a cookie/consent strategy is decided:
          - Google Analytics (GA4): https://nextjs.org/docs/app/guides/third-party-libraries#google-analytics
          - Meta Pixel
          - Microsoft Clarity
          - PostHog: https://posthog.com/docs/libraries/next-js
        */}
      </body>
    </html>
  );
}
