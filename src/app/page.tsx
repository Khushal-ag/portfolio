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
import {
  getEducation,
  getExperience,
  getHome,
  getProjects,
  getSite,
  getSkills,
  getTestimonials,
} from "@/lib/cms/content";
import { buildProjectsJsonLd } from "@/lib/json-ld";
import { pageMetadata } from "@/lib/seo";
import { getCurrentYear } from "@/lib/year";

export async function generateMetadata(): Promise<Metadata> {
  const site = await getSite();
  return pageMetadata({
    title: `${site.author.name} | Full-Stack Developer in Pune, India`,
    description: site.homeMetaDescription,
    path: "/",
    keywords: site.keywords,
    site,
  });
}

export default async function Home() {
  const [site, home, skills, education, jobs, projects, testimonials, year] =
    await Promise.all([
      getSite(),
      getHome(),
      getSkills(),
      getEducation(),
      getExperience(),
      getProjects(),
      getTestimonials(),
      getCurrentYear(),
    ]);

  const allSkills = skills.flatMap((group) => group.items);

  return (
    <SiteShell site={site}>
      <main className="relative" id="main-content">
        <Hero site={site} hero={home.hero} />
        <MarqueeStrip skills={allSkills} />
        <Summary summary={home.summary} />
        <Skills skillGroups={skills} />
        <Experience jobs={jobs} />
        <Projects
          projects={projects}
          githubCta={home.githubCta}
          githubUrl={site.links.github}
        />
        <Testimonials testimonials={testimonials} />
        <Achievements achievements={home.achievements} education={education} />
        <Footer year={year} site={site} footer={home.footer} />
      </main>
      <JsonLd data={buildProjectsJsonLd(projects, site)} />
    </SiteShell>
  );
}
