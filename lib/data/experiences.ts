import type { Experience } from "@/types";

// Replace each `image` path with a real photograph in /public/images/
// (same filename = automatic swap, no component changes needed).
export const experiences: Experience[] = [
  {
    slug: "wildlife-sanctuary-walks",
    title: "Wildlife Sanctuary Walks",
    story:
      "Guided walks through the Askot Wildlife Sanctuary, home to musk deer, Himalayan monal and dense rhododendron forest.",
    image: "/images/sanctuary.jpg",
  },
  {
    slug: "village-homestays",
    title: "Village Homestays",
    story:
      "Stay with local families in stone-and-timber homes, sharing meals and mountain life much as it has been lived here for generations.",
    image: "/images/homestay.jpg",
  },
  {
    slug: "mountain-trails",
    title: "Mountain Trails",
    story:
      "Trails that climb through oak and rhododendron forest into high pasture, opening onto views of the Panchachuli massif.",
    image: "/images/trails.jpg",
  },
  {
    slug: "traditional-food-experiences",
    title: "Traditional Food Experiences",
    story:
      "Seasonal Kumaoni dishes cooked over a wood fire, from mandua rotis to wild greens gathered that same morning.",
    image: "/images/food.jpg",
  },
];
