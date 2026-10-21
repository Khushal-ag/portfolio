import type { Metadata, Viewport } from "next";

import "../styles/globals.css";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import JsonLd from "@/components/JsonLd";
import Providers from "@/components/Providers";
import { seo, site } from "@/content";
import { fontVariables } from "@/lib/fonts";
import { buildRootJsonLd } from "@/lib/json-ld";

const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

const layoutDescription = seo.metaDescription;

export const viewport: Viewport = {
  viewportFit: "cover",
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f7f8" },
    { media: "(prefers-color-scheme: dark)", color: "#0f0f10" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.name, template: `%s · ${site.name}` },
  description: layoutDescription,
  keywords: [...site.keywords],
  authors: [{ name: site.author.name, url: site.url }],
  creator: site.author.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  ...(googleVerification && {
    verification: { google: googleVerification },
  }),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    title: site.name,
    description: layoutDescription,
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: layoutDescription,
    creator: `@${site.twitterHandle}`,
    site: `@${site.twitterHandle}`,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/images/profile/github-profile.png",
    apple: "/images/profile/github-profile.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fontVariables} suppressHydrationWarning>
      <body className="antialiased">
        <Providers>{children}</Providers>
        <Analytics />
        <SpeedInsights />
        <JsonLd data={buildRootJsonLd()} />
      </body>
    </html>
  );
}
