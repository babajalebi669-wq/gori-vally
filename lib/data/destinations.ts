import type { Destination } from "@/types";

// Elevations are real, sourced figures (Askot and Panchachuli from
// geographic references; Munsiyari and the valley span from commonly
// cited trekking/tourism sources) — they're the site's one small nod to
// being written by people who've actually measured these places, so keep
// them accurate if you edit this file.
//
// Replace each `image` path with a real photograph in /public/images/
// (same filename = automatic swap, no component changes needed).
export const destinations: Destination[] = [
  {
    slug: "askot",
    name: "Askot",
    region: "Pithoragarh District",
    elevation: "1,106M",
    description:
      "A quiet gateway town where the road narrows and the trail into the high Himalaya begins, once ringed by eighty forts.",
    image: "/images/askot.jpg",
  },
  {
    slug: "munsiyari",
    name: "Munsiyari",
    region: "Pithoragarh District",
    elevation: "2,200M",
    description:
      "Known as \u2018Little Kashmir,\u2019 facing the five snow peaks of the Panchachuli range across the Gori Ganga.",
    image: "/images/munsiyari.jpg",
  },
  {
    slug: "gori-ganga-valley",
    name: "Gori Ganga Valley",
    region: "Kumaon Himalaya",
    elevation: "1,100\u20133,450M",
    description:
      "The river valley the brand is named for — pine forest and terraced villages tracing the water up toward Milam Glacier.",
    image: "/images/gori-valley.jpg",
  },
  {
    slug: "panchachuli",
    name: "Panchachuli",
    region: "Kumaon Himalaya",
    elevation: "6,334\u20136,904M",
    description:
      "Five peaks local legend holds were the Pandavas\u2019 hearths, where they cooked a last meal before ascending to heaven.",
    image: "/images/panchachuli.jpg",
  },
];
