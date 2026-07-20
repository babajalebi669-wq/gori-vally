import type { Metadata } from "next";
import { ComingSoon } from "@/components/coming-soon";

export const metadata: Metadata = {
  title: "Experiences",
  description:
    "Guided walks, village homestays and mountain trails in Kumaon — booking opens soon. Join the waitlist to be notified first.",
};

export default function ExperiencesPage() {
  return (
    <ComingSoon
      image="/images/trails.jpg"
      imageAlt="A mountain trail through rhododendron forest in Kumaon"
      headline="Experiences, Ready To Book Soon"
      description="Sanctuary walks, homestays, trails and food — the experiences you've seen on this site are being built into bookable itineraries. Join the waitlist to hear first."
      source="page-experiences"
    />
  );
}
