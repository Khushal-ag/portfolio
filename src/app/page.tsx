import type { Metadata } from "next";

import Achievements from "@/components/Achievements";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MarqueeStrip from "@/components/MarqueeStrip";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import ScrollProgress from "@/components/ScrollProgress";
import Skills from "@/components/Skills";
import StickyBreak from "@/components/StickyBreak";
import Summary from "@/components/Summary";
import Testimonials from "@/components/Testimonials";
import { seo, site } from "@/content";

const homeTitle = `${site.author.name} – Full-Stack Developer | Portfolio`;
const homeDescription = seo.homeMetaDescription;

export const metadata: Metadata = {
  title: homeTitle,
  description: homeDescription,
  keywords: [...site.keywords],
  openGraph: {
    title: homeTitle,
    description: homeDescription,
    url: "/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: homeDescription,
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-bg">
      <a
        href="#main-content"
        className="fixed top-4 left-4 z-[calc(var(--z-nav)+2)] rounded-md bg-accent px-3 py-2 text-sm font-medium text-bg opacity-0 focus:opacity-100 focus:ring-2 focus:ring-white focus:outline-none"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <Nav />
      <main className="relative md:pr-1.5" id="main-content">
        <Hero />
        <MarqueeStrip />
        <Summary />
        <Skills />
        <Experience />
        <StickyBreak />
        <Projects />
        <Testimonials />
        <Achievements />
        <Footer />
      </main>
    </div>
  );
}
