import type { Metadata } from "next";
import { ComingSoon } from "@/components/coming-soon";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Field notes on hidden villages, wildlife and craft traditions of Kumaon — the Gori Valley journal is coming soon.",
};

export default function JournalPage() {
  return (
    <ComingSoon
      image="/images/munsiyari.jpg"
      imageAlt="View of the Panchachuli peaks from Munsiyari"
      headline="Field Notes From The Valley"
      description="Long-form stories on hidden villages, wildlife and the craft traditions of Kumaon are in progress. Join the waitlist to read the first ones."
      source="page-journal"
    />
  );
}
