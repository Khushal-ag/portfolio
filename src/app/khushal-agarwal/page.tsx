import Image from "next/image";
import Link from "next/link";

import type { Metadata } from "next";

import Nav from "@/components/Nav";
import ScrollProgress from "@/components/ScrollProgress";
import { education, hero, site, skills, workExperience } from "@/content";

const canonical = "https://khushalagarwal.tech/khushal-agarwal";
const title = "Khushal Agarwal – Full Stack Developer & Software Engineer";
const description =
  "Khushal Agarwal (Kushal Agarwal, Khusal Agarwal, Khushal Agrawal). Full Stack Developer and software engineer. Official portfolio: experience, tech stack, projects. India.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "Khushal Agarwal",
    "Kushal Agarwal",
    "Khusal Agarwal",
    "Khushal Agrawal",
    "Khushaal Agarwal",
    "Full Stack Developer",
    "software engineer",
    "portfolio",
  ],
  openGraph: { title, description, url: canonical },
  alternates: { canonical },
};

const navLinkClass =
  "hover:text-accent font-medium underline underline-offset-2";

const skillGroups = [
  { label: "Languages", items: skills.languages },
  { label: "Backend & cloud", items: skills.backendCloud },
  { label: "Frontend & mobile", items: skills.frontendMobile },
  { label: "Databases & DevOps", items: skills.databasesDevOps },
  { label: "Other", items: skills.other },
] as const;

export default function KhushalAgarwalPage() {
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
      <main
        id="main-content"
        className="section-padding section-container mx-auto max-w-3xl pt-24 pb-20"
      >
        <p className="font-editor mb-6 text-xs text-comment" aria-hidden>
          ~/khushal-agarwal
        </p>

        {/* Name + role */}
        <header className="mb-12">
          <div className="mb-6 flex justify-center">
            <div className="relative size-24 overflow-hidden rounded-xl border border-border-strong bg-bg-panel shadow-lg md:size-28">
              <Image
                src={hero.avatar}
                alt=""
                fill
                className="object-cover"
                sizes="112px"
                priority
              />
            </div>
          </div>
          <h1 className="mb-2 text-center text-3xl font-bold tracking-tight text-text md:text-4xl">
            Khushal Agarwal
          </h1>
          <h2 className="text-center text-xl font-semibold text-text-muted md:text-2xl">
            Full Stack Developer · Software Engineer
          </h2>
        </header>

        {/* Name spellings – screen reader only, for SEO and accessibility */}
        <section className="sr-only" aria-label="Name spellings">
          <h2>Name spellings</h2>
          <p>
            This is the official site for Khushal Agarwal. If you searched for
            Kushal Agarwal, Khusal Agarwal, Khushal Agrawal, or Khushaal Agarwal
            — you&apos;re in the right place; those are common spellings of the
            same name.
          </p>
        </section>

        {/* Bio */}
        <section className="mb-12">
          <h2 className="section-heading mb-6 text-left text-xl text-text md:text-2xl">
            About
          </h2>
          <div className="space-y-4 text-lg leading-relaxed text-text-muted">
            <p>
              <strong className="text-text">Khushal Agarwal</strong> (also
              spelled Kushal Agarwal) is a Full Stack Developer and software
              engineer with experience building scalable microservices,
              high-performance UIs, and crypto-enabled payment solutions. This
              is the official Khushal Agarwal developer portfolio and Khushal
              Agarwal engineer profile.
            </p>
            <p>
              The Khushal Agarwal portfolio showcases work across Golang, React,
              Node.js, TypeScript, and cloud-native systems. He has shipped
              production applications at Kreedalabs, MixR, and Vyloo—spanning
              edtech, e-commerce, pharmacy ERP, and AI/Web3 products.
            </p>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-12">
          <h2 className="section-heading mb-6 text-left text-xl text-text md:text-2xl">
            Experience
          </h2>
          <ul className="space-y-4">
            {workExperience.map((job) => (
              <li
                key={job.id}
                className="experience-card editor-panel p-5 transition-colors md:p-6"
              >
                <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                  <h3 className="text-lg font-semibold text-text">
                    {job.role} · {job.company}
                  </h3>
                  {job.period && (
                    <span className="text-sm text-accent/90">{job.period}</span>
                  )}
                </div>
                {job.location && (
                  <p className="mt-1 text-sm text-text-dim">{job.location}</p>
                )}
              </li>
            ))}
          </ul>
        </section>

        {/* Tech stack */}
        <section className="mb-12">
          <h2 className="section-heading mb-6 text-left text-xl text-text md:text-2xl">
            Tech stack
          </h2>
          <div className="space-y-6">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <h3 className="mb-2 text-sm font-medium tracking-wider text-text-muted uppercase">
                  {group.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((s) => (
                    <span
                      key={s}
                      className="rounded-md border border-border bg-bg-panel px-2.5 py-1 text-sm"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-12">
          <h2 className="section-heading mb-4 text-left text-xl text-text md:text-2xl">
            Education
          </h2>
          <p className="text-text-muted">
            {education.degree}, {education.school} — {education.cpi},{" "}
            {education.year}
          </p>
        </section>

        <p className="sr-only mb-12">
          Kushal Agarwal, Khusal Agarwal, Khushal Agrawal, Khushaal Agarwal —
          same person, this portfolio.
        </p>

        {/* CTAs */}
        <nav className="flex flex-wrap items-center gap-4 border-t border-border pt-8 text-text-muted">
          <Link href="/" className={navLinkClass}>
            ← Back to portfolio
          </Link>
          <span className="text-text-dim" aria-hidden>
            ·
          </span>
          <a
            href={site.author.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={navLinkClass}
          >
            LinkedIn
          </a>
          <a
            href={site.links.github.href}
            target="_blank"
            rel="noopener noreferrer"
            className={navLinkClass}
          >
            GitHub
          </a>
          <a
            href={site.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={navLinkClass}
          >
            Resume
          </a>
        </nav>
      </main>
    </div>
  );
}
