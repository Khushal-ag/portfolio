import { siteConfig } from "@/config/site";

export default function sitemap() {
  const base = siteConfig.url;
  return [
    {
      url: `${base}${siteConfig.routes.home}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1,
    },
    {
      url: `${base}${siteConfig.routes.resume}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
  ];
}
