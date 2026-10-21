import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";

import type { Metadata } from "next";

import ExternalLink from "@/components/ExternalLink";
import JsonLd from "@/components/JsonLd";
import SiteShell from "@/components/SiteShell";
import { projects, site } from "@/content";
import { buildProjectJsonLd } from "@/lib/json-ld";
import { pageMetadata } from "@/lib/seo";
import { isRepoLink, techStack } from "@/lib/tech";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  return pageMetadata({
    title: `${project.title}: ${project.kind} | ${site.author.name}`,
    description: `${project.summary} Built by ${site.author.name}, full-stack developer in ${site.author.location}, India.`,
    path: `/projects/${project.slug}`,
    keywords: [
      project.title,
      project.kind,
      ...project.tech.map((key) => techStack[key].label),
      ...site.keywords,
    ],
  });
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const others = projects.filter((p) => p.slug !== project.slug);

  return (
    <SiteShell>
      <main
        id="main-content"
        className="section-padding section-container mx-auto max-w-3xl pt-24 pb-20 max-lg:pb-36"
      >
        <nav
          aria-label="Breadcrumb"
          className="font-editor mb-6 text-xs text-text-subtle"
        >
          <Link href="/" className="hover:text-accent">
            Home
          </Link>
          {" / "}
          <Link href="/#projects" className="hover:text-accent">
            Projects
          </Link>
          {" / "}
          <span className="text-text-muted">{project.title}</span>
        </nav>

        <header className="mb-8">
          <p className="font-editor text-xs text-accent">{project.kind}</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-text md:text-5xl">
            {project.title}
          </h1>
          <p className="mt-3 text-text-muted">{project.role}</p>
        </header>

        <div className="relative mb-8 aspect-16/10 overflow-hidden rounded-2xl border border-border-strong bg-bg-elevated">
          <Image
            src={project.img}
            alt={`Screenshot of ${project.title}`}
            fill
            priority
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>

        <p className="text-lg leading-relaxed text-text-muted">{project.des}</p>

        <section className="mt-10" aria-labelledby="highlights">
          <h2
            id="highlights"
            className="section-heading mb-5 text-left text-xl text-text md:text-2xl"
          >
            What it does
          </h2>
          <ul className="space-y-3 text-text-muted">
            {project.highlights.map((item) => (
              <li key={item} className="flex gap-3">
                <span
                  aria-hidden
                  className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent"
                />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10" aria-labelledby="stack">
          <h2
            id="stack"
            className="section-heading mb-5 text-left text-xl text-text md:text-2xl"
          >
            Tech stack
          </h2>
          <ul className="flex flex-wrap gap-2">
            {project.tech.map((key) => {
              const { label, Icon } = techStack[key];
              return (
                <li
                  key={key}
                  className="font-editor inline-flex items-center gap-1.5 rounded-md border border-border bg-surface px-2.5 py-1.5 text-xs text-text-muted"
                >
                  <Icon className="size-3.5 shrink-0" aria-hidden />
                  {label}
                </li>
              );
            })}
          </ul>
        </section>

        {(project.siteLink || isRepoLink(project.githubLink)) && (
          <div className="mt-10 flex flex-wrap gap-3">
            {project.siteLink && (
              <ExternalLink href={project.siteLink} className="btn-primary">
                <FaArrowUpRightFromSquare className="size-3.5" aria-hidden />
                Live site
              </ExternalLink>
            )}
            {isRepoLink(project.githubLink) && (
              <ExternalLink href={project.githubLink} className="btn-ghost">
                <FaGithub className="size-4" aria-hidden />
                Source
              </ExternalLink>
            )}
          </div>
        )}

        <section
          className="mt-14 border-t border-border pt-8"
          aria-labelledby="more"
        >
          <h2
            id="more"
            className="section-heading mb-4 text-left text-xl text-text md:text-2xl"
          >
            More projects
          </h2>
          <ul className="flex flex-wrap gap-x-5 gap-y-1 text-text-muted">
            {others.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/projects/${p.slug}`}
                  className="inline-flex min-h-11 items-center underline underline-offset-2 hover:text-accent"
                >
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/khushal-agarwal"
            className="link-accent font-editor mt-4 inline-flex min-h-11 items-center text-sm underline underline-offset-4"
          >
            More about {site.author.name}
          </Link>
        </section>
      </main>
      <JsonLd data={buildProjectJsonLd(project)} />
    </SiteShell>
  );
}
