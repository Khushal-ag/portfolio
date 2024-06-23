import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/styles/globals.css";

import { SpeedInsights } from "@vercel/speed-insights/next";

import { siteConfig } from "@/config/site";
import { TailwindIndicator } from "@/components/TailwindIndicator";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [],
  authors: [
    {
      name: "Khushal Agarwal",
      url: "https://khushalagarwal.me",
    },
  ],
  creator: "Khushal Agarwal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: siteConfig.links.twitter.href.split("/").pop(),
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/github-profile.png",
    apple: "/github-profile.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <TailwindIndicator />
        <SpeedInsights />
      </body>
    </html>
  );
}
