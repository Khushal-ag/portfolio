import type { Metadata } from "next";

import Achievements from "@/components/Achievements";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import JsonLd from "@/components/JsonLd";
import MarqueeStrip from "@/components/MarqueeStrip";
import Projects from "@/components/Projects";
import SiteShell from "@/components/SiteShell";
import Skills from "@/components/Skills";
import Summary from "@/components/Summary";
import Testimonials from "@/components/Testimonials";
import { seo, site } from "@/content";
import { buildProjectsJsonLd } from "@/lib/json-ld";
import { pageMetadata } from "@/lib/seo";
import { getCurrentYear } from "@/lib/year";

export const metadata: Metadata = pageMetadata({
  title: `${site.author.name} | Full-Stack Developer in Pune, India`,
  description: seo.homeMetaDescription,
  path: "/",
  keywords: site.keywords,
});

export default async function Home() {
  const year = await getCurrentYear();

  return (
    <SiteShell>
      <main className="relative" id="main-content">
        <Hero />
        <MarqueeStrip />
        <Summary />
        <Skills />
        <Experience />
        <Projects />
        <Testimonials />
        <Achievements />
        <Footer year={year} />
      </main>
      <JsonLd data={buildProjectsJsonLd()} />
    </SiteShell>
  );
}
