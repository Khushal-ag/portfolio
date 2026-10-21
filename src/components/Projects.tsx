"use client";

import { useRef, useState } from "react";
import Image from "next/image";

import { AnimatePresence, motion } from "motion/react";
import {
  FaArrowRight,
  FaArrowUpRightFromSquare,
  FaGithub,
} from "react-icons/fa6";

import type { PortfolioProject } from "@/content";

import ExternalLink from "@/components/ExternalLink";
import GitHubCTA from "@/components/GitHubCTA";
import ProjectCarousel from "@/components/ProjectCarousel";
import { Section, SectionHeading } from "@/components/Section";
import Spotlight from "@/components/Spotlight";
import { projects } from "@/content";
import { EASE, fadeUp } from "@/lib/motion";
import { isRepoLink, techStack } from "@/lib/tech";

function ProjectImage({
  project,
  priority = false,
}: {
  project: PortfolioProject;
  priority?: boolean;
}) {
  return (
    <Image
      src={project.img}
      alt={`Screenshot of ${project.title}`}
      fill
      priority={priority}
      className="object-contain"
      sizes="(max-width: 1024px) 100vw, 640px"
    />
  );
}

function ProjectDetails({ project }: { project: PortfolioProject }) {
  return (
    <div>
      <p className="font-editor text-xs text-accent">{project.kind}</p>
      <h3 className="mt-2 text-2xl font-semibold tracking-tight text-text sm:text-3xl">
        {project.title}
      </h3>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-text-muted sm:text-base">
        {project.des}
      </p>

      <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tech stack">
        {project.tech.map((key) => {
          const { label, Icon } = techStack[key];
          return (
            <li
              key={key}
              className="font-editor inline-flex items-center gap-1.5 rounded-md border border-border bg-surface px-2 py-1 text-xs text-text-muted"
            >
              <Icon className="size-3.5 shrink-0" aria-hidden />
              {label}
            </li>
          );
        })}
      </ul>

      {(project.siteLink || isRepoLink(project.githubLink)) && (
        <div className="mt-6 flex flex-wrap items-center gap-3">
          {project.siteLink && (
            <ExternalLink
              href={project.siteLink}
              className="btn-primary px-5 py-2.5"
            >
              <FaArrowUpRightFromSquare className="size-3.5" aria-hidden />
              Live site
            </ExternalLink>
          )}
          {isRepoLink(project.githubLink) && (
            <ExternalLink
              href={project.githubLink}
              className="btn-ghost px-5 py-2.5"
            >
              <FaGithub className="size-4" aria-hidden />
              Source
            </ExternalLink>
          )}
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  const [active, setActive] = useState(0);
  const rowRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const project = projects[active] ?? projects[0];

  function select(index: number, focus = false) {
    const next = (index + projects.length) % projects.length;
    setActive(next);
    if (focus) rowRefs.current[next]?.focus();
  }

  function onKeyDown(e: React.KeyboardEvent, index: number) {
    const keys: Record<string, number | undefined> = {
      ArrowDown: index + 1,
      ArrowUp: index - 1,
      Home: 0,
      End: projects.length - 1,
    };
    const target = keys[e.key];
    if (target === undefined) return;
    e.preventDefault();
    select(target, true);
  }

  function onPointerEnter(e: React.PointerEvent, index: number) {
    if (e.pointerType !== "mouse") return;
    setActive(index);
  }

  if (!project) return null;

  return (
    <Section id="projects">
      <SectionHeading eyebrow="projects">Projects</SectionHeading>

      <motion.div variants={fadeUp}>
        <ProjectCarousel />
      </motion.div>

      <motion.div
        variants={fadeUp}
        className="hidden items-start gap-10 lg:grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]"
      >
        <ul className="flex flex-col gap-1.5" aria-label="Projects">
          {projects.map((p, i) => {
            const selected = i === active;
            return (
              <li key={p.id}>
                <button
                  ref={(el) => {
                    rowRefs.current[i] = el;
                  }}
                  type="button"
                  aria-current={selected ? "true" : undefined}
                  onClick={() => setActive(i)}
                  onKeyDown={(e) => onKeyDown(e, i)}
                  onPointerEnter={(e) => onPointerEnter(e, i)}
                  className="group relative flex w-full cursor-pointer items-center gap-4 rounded-xl border border-transparent px-3 py-3 text-left transition-colors hover:bg-surface-hover"
                >
                  {selected && (
                    <motion.span
                      layoutId="project-row"
                      aria-hidden
                      className="absolute inset-0 rounded-xl border border-accent/40 bg-surface-active"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 34,
                      }}
                    />
                  )}
                  <span className="relative aspect-16/10 w-20 shrink-0 overflow-hidden rounded-md border border-border bg-bg-elevated sm:w-24">
                    <Image
                      src={p.img}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="96px"
                    />
                  </span>
                  <span className="relative min-w-0 flex-1">
                    <span
                      className={`block truncate text-base font-medium transition-colors ${selected ? "text-text" : "text-text-muted group-hover:text-text"}`}
                    >
                      {p.title}
                    </span>
                    <span className="mt-0.5 block text-xs leading-snug text-text-subtle sm:text-[0.8125rem]">
                      {p.summary}
                    </span>
                  </span>
                  <FaArrowRight
                    aria-hidden
                    className={`relative size-3.5 shrink-0 transition-all duration-300 ${
                      selected ?
                        "translate-x-0 text-accent opacity-100"
                      : "-translate-x-1 text-text-dim opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                    }`}
                  />
                </button>
              </li>
            );
          })}
        </ul>

        {/* Desktop: sticky live preview of the selected project. */}
        <div className="hidden lg:sticky lg:top-28 lg:block" aria-live="polite">
          <Spotlight className="rounded-2xl border border-border bg-bg-panel">
            <div className="p-4 sm:p-5">
              <div className="relative aspect-16/10 overflow-hidden rounded-xl border border-border bg-bg-elevated">
                <AnimatePresence initial={false} mode="popLayout">
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, scale: 1.05, filter: "blur(8px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, filter: "blur(4px)" }}
                    transition={{ duration: 0.5, ease: EASE }}
                    className="absolute inset-0"
                  >
                    <ProjectImage project={project} priority={active === 0} />
                  </motion.div>
                </AnimatePresence>
              </div>
              {/* Every project stays in the DOM (hidden when inactive) so the
                  full text and links remain crawlable. */}
              {projects.map((p, i) => (
                <div
                  key={p.id}
                  hidden={i !== active}
                  className="fade-up mt-6 px-1 pb-1"
                  style={{ "--d": "60ms" } as React.CSSProperties}
                >
                  <ProjectDetails project={p} />
                </div>
              ))}
            </div>
          </Spotlight>
        </div>
      </motion.div>

      <GitHubCTA />
    </Section>
  );
}
