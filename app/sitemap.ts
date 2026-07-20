import type { MetadataRoute } from "next";

// TODO: replace with the production domain before launch.
const SITE_URL = "https://gorivalley.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/explore", "/experiences", "/shop", "/journal", "/about", "/privacy", "/terms"];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.7,
  }));
}
