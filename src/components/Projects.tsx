"use client";

import { useRef } from "react";
import Image from "next/image";
import { projects } from "@/content";
import { motion, useInView } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

import GitHubCTA from "@/components/GitHubCTA";
import {
  Section,
  SectionFileLabel,
  SectionHeading,
} from "@/components/Section";

const card = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function slug(name: string) {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

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
              className="group border-border bg-bg-panel hover:border-border-strong flex flex-col overflow-hidden rounded-lg border transition-colors"
            >
              {/* Filename bar (editor tab style) */}
              <div className="border-border bg-bg-elevated border-b px-3 py-2">
                <p className="font-editor text-text-subtle text-xs">
                  {slug(proj.title)}.tsx
                </p>
              </div>
              <div className="flex flex-1 flex-col">
                <div className="bg-bg-elevated relative aspect-video w-full overflow-hidden">
                  <Image
                    src={proj.img}
                    alt={proj.title}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-[1.02]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="from-bg-panel/80 absolute inset-0 bg-linear-to-t to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <h3 className="text-text text-base font-semibold">
                    {proj.title}
                  </h3>
                  <p className="text-text-muted mt-1.5 line-clamp-2 text-sm leading-relaxed">
                    {proj.des}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {proj.iconLists.slice(0, 5).map((icon) => (
                      <div
                        key={icon}
                        className="bg-surface relative size-6 overflow-hidden rounded-sm md:size-7"
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
                  <div className="border-border mt-4 flex gap-4 border-t pt-3">
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
      </div>
    </Section>
  );
}
