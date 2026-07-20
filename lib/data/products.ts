import type { Product } from "@/types";

// Replace each `image` path with a real photograph in /public/images/
// (same filename = automatic swap, no component changes needed).
// No pricing or cart logic by design — V1 only validates interest via the
// "Notify Me" waitlist form, tagged with this product's slug as its source.
export const products: Product[] = [
  {
    slug: "thulma-blanket",
    name: "Handwoven Thulma Blanket",
    story:
      "A traditional woollen blanket, hand-spun and woven by artisans in the villages of Kumaon.",
    image: "/images/thulma.jpg",
    comingSoon: true,
  },
  {
    slug: "wild-himalayan-honey",
    name: "Wild Himalayan Honey",
    story:
      "Raw honey gathered from high-altitude forest hives, unprocessed and true to its mountain source.",
    image: "/images/honey.jpg",
    comingSoon: true,
  },
  {
    slug: "ringal-bamboo-craft",
    name: "Ringal Bamboo Craft",
    story:
      "Hand-woven baskets and homeware made from ringal, the hill bamboo native to these forests.",
    image: "/images/ringal.jpg",
    comingSoon: true,
  },
  {
    slug: "mountain-herbs",
    name: "Mountain Herbs",
    story:
      "Wild-gathered herbs used in Kumaoni kitchens and home remedies for generations.",
    image: "/images/herbs.jpg",
    comingSoon: true,
  },
];
