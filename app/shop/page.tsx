import type { Metadata } from "next";
import { ComingSoon } from "@/components/coming-soon";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Handwoven thulma blankets, wild Himalayan honey and other Kumaoni goods — the Gori Valley shop is coming soon.",
};

export default function ShopPage() {
  return (
    <ComingSoon
      image="/images/thulma.jpg"
      imageAlt="A handwoven thulma blanket from Kumaon"
      headline="A Shop Worth Waiting For"
      description="Thulma blankets, wild honey, ringal bamboo craft and mountain herbs — sourced directly from Kumaoni artisans. No pricing or checkout yet, just the waitlist."
      source="page-shop"
    />
  );
}
