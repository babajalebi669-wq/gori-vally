import type { JournalArticle } from "@/types";

// Replace each `image` path with a real photograph in /public/images/
// (same filename = automatic swap, no component changes needed).
export const journalArticles: JournalArticle[] = [
  {
    slug: "hidden-villages-of-kumaon",
    title: "Hidden Villages of Kumaon",
    excerpt:
      "Beyond the popular hill stations lie villages where mountain life continues largely as it always has.",
    image: "/images/journal-1.jpg",
  },
  {
    slug: "guide-to-askot-wildlife-sanctuary",
    title: "A Guide to Askot Wildlife Sanctuary",
    excerpt:
      "What to know before you go: terrain, wildlife and the best months to visit this remote sanctuary.",
    image: "/images/journal-2.jpg",
  },
  {
    slug: "story-behind-thulma-blankets",
    title: "The Story Behind Thulma Blankets",
    excerpt:
      "How a generations-old weaving tradition still keeps Himalayan households warm through winter.",
    image: "/images/journal-3.jpg",
  },
  {
    slug: "rivers-of-gori-valley",
    title: "The Rivers of Gori Valley",
    excerpt:
      "Tracing the Gori Ganga from its glacial source down through pine forest and terraced villages.",
    image: "/images/journal-4.jpg",
  },
];
