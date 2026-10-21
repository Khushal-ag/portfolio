import type { MetadataRoute } from "next";

import { projects, site } from "@/content";

const routes = [
  { path: "", priority: 1 },
  { path: "/khushal-agarwal", priority: 0.9 },
];

const pages = [
  ...routes,
  ...projects.map(({ slug }) => ({ path: `/projects/${slug}`, priority: 0.7 })),
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map(({ path, priority }) => ({
    url: `${site.url}${path || "/"}`,
    lastModified: site.lastUpdated,
    changeFrequency: "monthly",
    priority,
  }));
}
