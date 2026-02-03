"use client";

import { useRef } from "react";
import Image from "next/image";
import { projects } from "@/data";
import { motion, useInView } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

import { Section, SectionHeading } from "@/components/Section";

const card = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <Section id="projects" reveal={false}>
      <div ref={ref}>
        <SectionHeading>Projects</SectionHeading>
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            visible: {
              transition: { staggerChildren: 0.12, delayChildren: 0.05 },
            },
          }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((proj) => (
            <motion.article
              key={proj.id}
              variants={card}
              transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
              whileHover={{ y: -4 }}
              className="group card-surface overflow-hidden"
            >
              <div className="bg-bg-elevated relative aspect-video w-full overflow-hidden">
                <Image
                  src={proj.img}
                  alt={proj.title}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="opacity from-bg/80 absolute inset-0 bg-gradient-to-t to-transparent opacity-0 transition group-hover:opacity-100" />
              </div>
              <div className="p-5">
                <h3 className="font-heading text-text font-semibold">
                  {proj.title}
                </h3>
                <p className="text-text-muted mt-2 line-clamp-2 text-sm">
                  {proj.des}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {proj.iconLists.slice(0, 5).map((icon) => (
                    <div
                      key={icon}
                      className="bg-surface relative size-7 overflow-hidden rounded"
                    >
                      <Image
                        src={icon}
                        alt=""
                        fill
                        className="object-contain p-1"
                        sizes="28px"
                      />
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex gap-3">
                  <a
                    href={proj.siteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-accent inline-flex items-center gap-1.5 text-sm font-medium"
                  >
                    <FaExternalLinkAlt className="size-3.5" />
                    Live
                  </a>
                  <a
                    href={proj.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-accent inline-flex items-center gap-1.5 text-sm font-medium"
                  >
                    <FaGithub className="size-3.5" />
                    Code
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
