import type { MetadataRoute } from "next";

import { getProjects, getSite } from "@/lib/cms/content";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [site, projects] = await Promise.all([getSite(), getProjects()]);

  const routes = [
    { path: "", priority: 1, lastModified: site.lastUpdated },
    {
      path: "/khushal-agarwal",
      priority: 0.9,
      lastModified: site.lastUpdated,
    },
  ];

  const pages = [
    ...routes,
    ...projects.map(({ slug, updatedAt }) => ({
      path: `/projects/${slug}`,
      priority: 0.7,
      lastModified: updatedAt || site.lastUpdated,
    })),
  ];

  return pages.map(({ path, priority, lastModified }) => ({
    url: `${site.url}${path || "/"}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority,
  }));
}
