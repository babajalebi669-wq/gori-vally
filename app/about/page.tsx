import type { Metadata } from "next";
import { ComingSoon } from "@/components/coming-soon";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story behind Gori Valley — a premium Himalayan travel and local products brand from Kumaon, India.",
};

export default function AboutPage() {
  return (
    <ComingSoon
      image="/images/about.jpg"
      imageAlt="A view across the Kumaon Himalaya at dusk"
      headline="The Story Behind Gori Valley"
      description="We're early — this page will grow into the full story of why Gori Valley exists. For now, join the waitlist and we'll bring you along as it's written."
      source="page-about"
    />
  );
}
