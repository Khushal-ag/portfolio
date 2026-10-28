import type { Metadata } from "next";

import type { SiteContent } from "@/lib/cms/types";

type PageSeoInput = {
  title: string;
  description: string;
  path: string;
  keywords?: readonly string[];
  profile?: boolean;
  site: SiteContent;
};

/**
 * Child-route `openGraph`/`twitter` objects replace the root layout's instead
 * of merging, so every page builds the full set (site name, locale, handles).
 */
export function pageMetadata({
  title,
  description,
  path,
  keywords,
  profile = false,
  site,
}: PageSeoInput): Metadata {
  return {
    title: { absolute: title },
    description,
    ...(keywords && { keywords: [...keywords] }),
    alternates: { canonical: path },
    robots: { index: true, follow: true },
    openGraph: {
      ...(profile ?
        {
          type: "profile" as const,
          firstName: site.author.name.split(" ")[0] ?? site.author.name,
          lastName: site.author.name.split(" ").slice(1).join(" ") || undefined,
          username: site.twitterHandle,
        }
      : { type: "website" as const }),
      locale: "en_US",
      siteName: site.author.name,
      url: path,
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: `@${site.twitterHandle}`,
      site: `@${site.twitterHandle}`,
    },
  };
}
