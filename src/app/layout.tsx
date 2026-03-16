import type { Metadata } from "next";

import "../styles/globals.css";

import { SpeedInsights } from "@vercel/speed-insights/next";

import { siteConfig } from "@/config/site";
import { fontVariables } from "@/lib/fonts";

import { ThemeProvider } from "./provider";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Khushal Agarwal",
  alternateName: [
    "Kushal Agarwal",
    "Khusal Agarwal",
    "Khushal Agrawal",
    "Khushaal Agarwal",
  ],
  url: "https://www.khushalagarwal.dev",
  jobTitle: "Full Stack Developer",
  sameAs: [
    siteConfig.author.linkedin,
    siteConfig.links?.github?.href ??
      siteConfig.github?.href ??
      "https://github.com/Khushal-ag",
  ].filter(Boolean),
  image: siteConfig.url + siteConfig.author.avatar,
  email: siteConfig.author.mail,
};

export const metadata: Metadata = {
  title: { default: siteConfig.name, template: `%s · ${siteConfig.name}` },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.author.name, url: siteConfig.author.url }],
  creator: siteConfig.author.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}${siteConfig.author.avatar}`,
        width: 512,
        height: 512,
        alt: siteConfig.author.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}${siteConfig.author.avatar}`],
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
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${fontVariables} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <SpeedInsights />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />
      </body>
    </html>
  );
}
