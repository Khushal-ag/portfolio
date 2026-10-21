import Image from "next/image";
import Link from "next/link";

import type { Metadata } from "next";

import ExternalLink from "@/components/ExternalLink";
import JsonLd from "@/components/JsonLd";
import SiteShell from "@/components/SiteShell";
import { education, seo, site, skillGroups, workExperience } from "@/content";
import { buildProfilePageJsonLd } from "@/lib/json-ld";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: `${site.author.name} | Full-Stack Developer & Software Engineer`,
  description: seo.profileMetaDescription,
  path: "/khushal-agarwal",
  keywords: [...site.keywords, "software engineer", "India", "Pune"],
  profile: true,
});

const navLinkClass =
  "hover:text-accent font-medium underline underline-offset-2";

export default function KhushalAgarwalPage() {
  return (
    <SiteShell>
      <main
        id="main-content"
        className="section-padding section-container mx-auto max-w-3xl pt-24 pb-20"
      >
        <p className="font-editor mb-6 text-xs text-comment" aria-hidden>
          ~/khushal-agarwal
        </p>

        <header className="mb-12">
          <div className="mb-6 flex justify-center">
            <div className="relative size-24 overflow-hidden rounded-xl border border-border-strong bg-bg-panel shadow-lg md:size-28">
              <Image
                src={site.author.avatar}
                alt={site.author.name}
                fill
                className="object-cover"
                sizes="112px"
                priority
              />
            </div>
          </div>
          <h1 className="mb-2 text-center text-3xl font-bold tracking-tight text-text md:text-4xl">
            {site.author.name}
          </h1>
          <h2 className="text-center text-xl font-semibold text-text-muted md:text-2xl">
            {site.author.title} · {site.author.subtitle}
          </h2>
        </header>

        <section className="mb-12">
          <h2 className="section-heading mb-6 text-left text-xl text-text md:text-2xl">
            About
          </h2>
          <div className="space-y-4 text-lg leading-relaxed text-text-muted">
            <p>
              <strong className="text-text">Khushal Agarwal</strong> is a
              full-stack developer with 3+ years of experience building web and
              mobile products across AI, Web3, and SaaS. This is his official
              developer portfolio and engineer profile.
            </p>
            <p>
              The portfolio highlights full-time work at Kreedalabs (AI search,
              generative-AI tools, Syncora) and freelance work for MixR, Hench
              Solutions (BillBook, IAMS, Mera Coach, Abvela) and Vyloo, spanning
              AI platforms, social commerce and agents, billing and insurance
              tools, and pharmacy operations.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="section-heading mb-6 text-left text-xl text-text md:text-2xl">
            Experience
          </h2>
          <ul className="space-y-4">
            {workExperience.map((job) => (
              <li key={job.id} className="editor-panel p-5 md:p-6">
                <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                  <h3 className="text-lg font-semibold text-text">
                    {job.role} · {job.company}
                  </h3>
                  <span className="text-sm text-accent/90">{job.period}</span>
                </div>
                <p className="mt-1 text-sm text-text-dim">
                  {job.type} · {job.location}
                </p>
                <p className="mt-3 text-text-muted">{job.summary}</p>
              </li>
            ))}
          </ul>
        </section>

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

        <section className="mb-12">
          <h2 className="section-heading mb-4 text-left text-xl text-text md:text-2xl">
            Education
          </h2>
          <p className="text-text-muted">
            {education.degree}, {education.school} - {education.cpi},{" "}
            {education.years}
          </p>
        </section>

        <nav className="flex flex-wrap items-center gap-4 border-t border-border pt-8 text-text-muted">
          <Link href="/" className={navLinkClass}>
            ← Back to portfolio
          </Link>
          <span className="text-text-dim" aria-hidden>
            ·
          </span>
          <ExternalLink href={site.links.linkedin} className={navLinkClass}>
            LinkedIn
          </ExternalLink>
          <ExternalLink href={site.links.github} className={navLinkClass}>
            GitHub
          </ExternalLink>
          <ExternalLink href={site.resumeUrl} className={navLinkClass}>
            Resume
          </ExternalLink>
        </nav>
      </main>
      <JsonLd data={buildProfilePageJsonLd()} />
    </SiteShell>
  );
}
