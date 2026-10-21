import type { MetadataRoute } from "next";

import { site } from "@/content";

const routes = [
  { path: "", priority: 1 },
  { path: "/khushal-agarwal", priority: 0.9 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority }) => ({
    url: `${site.url}${path || "/"}`,
    lastModified: site.lastUpdated,
    changeFrequency: "monthly",
    priority,
  }));
}
