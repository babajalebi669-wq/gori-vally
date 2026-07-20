import type { Metadata } from "next";
import { ComingSoon } from "@/components/coming-soon";

export const metadata: Metadata = {
  title: "Explore",
  description:
    "An explorer's guide to the trails, valleys and villages of Kumaon — coming soon. Join the waitlist to be notified first.",
};

export default function ExplorePage() {
  return (
    <ComingSoon
      image="/images/gori-river.jpg"
      imageAlt="The Gori Ganga river running through the Kumaon Himalaya"
      headline="An Explorer's Guide to Kumaon"
      description="We're mapping the trails, viewpoints and hidden corners of the Gori Valley. Join the waitlist to be the first to explore."
      source="page-explore"
    />
  );
}
