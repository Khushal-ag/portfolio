import type { MetadataRoute } from "next";

import { getSite } from "@/lib/cms/content";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const site = await getSite();

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/studio", "/studio/", "/api/", "/api"],
    },
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
