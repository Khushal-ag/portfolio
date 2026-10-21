"use client";

import { useRef, useState } from "react";
import Image from "next/image";

import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";

import type { PortfolioProject } from "@/content";

import ExternalLink from "@/components/ExternalLink";
import { projects } from "@/content";
import { isRepoLink, techStack } from "@/lib/tech";

const GAP_PX = 16;

function ProjectCard({ project }: { project: PortfolioProject }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-bg-panel">
      <div className="relative aspect-16/10 border-b border-border bg-bg-elevated">
        <Image
          src={project.img}
          alt={`Screenshot of ${project.title}`}
          fill
          className="object-contain"
          sizes="(max-width: 640px) 84vw, 60vw"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="font-editor text-xs text-accent">{project.kind}</p>
        <h3 className="mt-1.5 text-xl font-semibold tracking-tight text-text">
          {project.title}
        </h3>
        <p
          className={`mt-3 text-sm leading-relaxed text-text-muted ${expanded ? "" : "line-clamp-3"}`}
        >
          {project.des}
        </p>
        <button
          type="button"
          aria-expanded={expanded}
          onClick={() => setExpanded((e) => !e)}
          className="font-editor mt-1 -ml-1 min-h-11 cursor-pointer self-start px-1 text-xs text-accent"
        >
          {expanded ? "Show less" : "Read more"}
        </button>

        <ul className="mt-2 flex flex-wrap gap-1.5" aria-label="Tech stack">
          {project.tech.slice(0, expanded ? undefined : 5).map((key) => {
            const { label, Icon } = techStack[key];
            return (
              <li
                key={key}
                className="font-editor inline-flex items-center gap-1.5 rounded-md border border-border bg-surface px-2 py-1 text-[0.6875rem] text-text-muted"
              >
                <Icon className="size-3 shrink-0" aria-hidden />
                {label}
              </li>
            );
          })}
        </ul>

        {(project.siteLink || isRepoLink(project.githubLink)) && (
          <div className="mt-auto flex gap-2 pt-5">
            {project.siteLink && (
              <ExternalLink
                href={project.siteLink}
                className="btn-primary min-h-12 flex-1 px-4 py-3"
              >
                <FaArrowUpRightFromSquare className="size-3.5" aria-hidden />
                Live site
              </ExternalLink>
            )}
            {isRepoLink(project.githubLink) && (
              <ExternalLink
                href={project.githubLink}
                className="btn-ghost min-h-12 flex-1 px-4 py-3"
              >
                <FaGithub className="size-4" aria-hidden />
                Source
              </ExternalLink>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

/** Phone and tablet projects: a swipeable, snap-scrolling row of full cards. */
export default function ProjectCarousel() {
  const trackRef = useRef<HTMLUListElement>(null);
  const [current, setCurrent] = useState(0);

  function onScroll() {
    const track = trackRef.current;
    const first = track?.firstElementChild as HTMLElement | null;
    if (!track || !first) return;
    const index = Math.round(track.scrollLeft / (first.offsetWidth + GAP_PX));
    setCurrent(Math.min(Math.max(index, 0), projects.length - 1));
  }

  function goTo(index: number) {
    const card = trackRef.current?.children[index] as HTMLElement | undefined;
    card?.scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "nearest",
    });
  }

  return (
    <div className="lg:hidden">
      <ul
        ref={trackRef}
        onScroll={onScroll}
        aria-label="Projects, swipe sideways"
        className="-mx-5 flex snap-x snap-mandatory scroll-px-5 [scrollbar-width:none] items-stretch gap-4 overflow-x-auto px-5 pb-2 [&::-webkit-scrollbar]:hidden"
      >
        {projects.map((project) => (
          <li
            key={project.id}
            className="w-[84%] max-w-sm shrink-0 snap-start sm:w-[58%]"
          >
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>

      <div
        role="group"
        aria-label="Jump to project"
        className="mt-3 flex justify-center"
      >
        {projects.map((project, i) => (
          <button
            key={project.id}
            type="button"
            aria-label={`Show ${project.title}`}
            aria-current={i === current ? "true" : undefined}
            onClick={() => goTo(i)}
            className="flex size-8 cursor-pointer items-center justify-center"
          >
            <span
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current ? "w-5 bg-accent" : "w-1.5 bg-border-strong"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
