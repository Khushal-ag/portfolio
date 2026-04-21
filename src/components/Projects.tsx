"use client";

import { useRef, useState } from "react";
import Image from "next/image";

import { motion, useInView } from "framer-motion";
import { FaExpandAlt, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

import type { PortfolioProject } from "@/content";

import GitHubCTA from "@/components/GitHubCTA";
import ProjectDetailModal from "@/components/ProjectDetailModal";
import {
  Section,
  SectionFileLabel,
  SectionHeading,
} from "@/components/Section";
import { projects } from "@/content";
import { projectTitleToFileSlug } from "@/lib/slug";

const card = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [selectedProject, setSelectedProject] =
    useState<PortfolioProject | null>(null);

  return (
    <Section id="projects" reveal={false}>
      <div ref={ref}>
        <SectionFileLabel file="~/portfolio/projects.ts" />
        <SectionHeading>Projects</SectionHeading>
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            visible: {
              transition: { staggerChildren: 0.08, delayChildren: 0.05 },
            },
          }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((proj) => (
            <motion.article
              key={proj.id}
              variants={card}
              transition={{ duration: 0.35, ease: [0.25, 0.4, 0.25, 1] }}
              role="button"
              tabIndex={0}
              onClick={() => setSelectedProject(proj)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedProject(proj);
                }
              }}
              className="group flex cursor-pointer flex-col overflow-hidden rounded-lg border border-border bg-bg-panel transition-colors hover:border-border-strong"
            >
              <div className="flex items-center justify-between border-b border-border bg-bg-elevated px-3 py-2">
                <p className="font-editor text-xs text-text-subtle">
                  {projectTitleToFileSlug(proj.title)}.tsx
                </p>
                <span
                  className="text-text-dim opacity-0 transition-opacity group-hover:opacity-100"
                  aria-hidden
                >
                  <FaExpandAlt className="size-3" />
                </span>
              </div>
              <div className="flex flex-1 flex-col">
                <div className="relative aspect-video w-full overflow-hidden bg-bg-elevated">
                  <Image
                    src={proj.img}
                    alt={proj.title}
                    fill
                    className="object-contain transition duration-300 group-hover:scale-[1.02]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-bg-panel/80 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <span className="font-editor absolute right-2 bottom-2 rounded bg-bg-panel/90 px-2 py-1 text-[10px] text-text-muted opacity-0 transition-opacity group-hover:opacity-100">
                    View details
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <h3 className="text-base font-semibold text-text">
                    {proj.title}
                  </h3>
                  <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-text-muted">
                    {proj.des}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {proj.iconLists.slice(0, 6).map((icon) => (
                      <div
                        key={icon}
                        className="relative size-6 overflow-hidden rounded-sm bg-surface md:size-7"
                        aria-hidden
                      >
                        <Image
                          src={icon}
                          alt=""
                          fill
                          className="object-contain p-0.5"
                          sizes="28px"
                        />
                      </div>
                    ))}
                  </div>
                  <div
                    className="mt-4 flex gap-4 border-t border-border pt-3"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <a
                      href={proj.siteLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-accent font-editor inline-flex items-center gap-1.5 text-xs font-medium"
                    >
                      <FaExternalLinkAlt className="size-3" />
                      Live
                    </a>
                    <a
                      href={proj.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-accent font-editor inline-flex items-center gap-1.5 text-xs font-medium"
                    >
                      <FaGithub className="size-3" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
        <GitHubCTA />
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </Section>
  );
}
