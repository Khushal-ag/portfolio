"use client";

import { useRef, useState } from "react";

import { motion, useInView, useScroll, useSpring } from "motion/react";
import { FaChevronDown } from "react-icons/fa6";

import type { WorkExperience } from "@/content";

import { Section, SectionHeading } from "@/components/Section";
import Spotlight from "@/components/Spotlight";
import { workExperience } from "@/content";
import { fadeUp, stagger } from "@/lib/motion";
import { techStack } from "@/lib/tech";

function TimelineDot({ reached }: { reached: boolean }) {
  return (
    <span
      aria-hidden
      className={`relative z-10 mt-7 size-3.5 rounded-full border-2 transition-all duration-500 ${
        reached ?
          "scale-110 border-accent bg-accent shadow-[0_0_0_6px_var(--color-accent-dim)]"
        : "border-border-strong bg-bg"
      }`}
    />
  );
}

function Job({
  job,
  defaultOpen,
}: {
  job: WorkExperience;
  defaultOpen: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const ref = useRef<HTMLElement>(null);
  const reached = useInView(ref, { margin: "-35% 0px -35% 0px", once: true });

  return (
    <motion.article
      ref={ref}
      variants={fadeUp}
      className="grid grid-cols-[1.75rem_1fr] gap-x-3 sm:grid-cols-[2.5rem_1fr] sm:gap-x-5"
    >
      <div className="flex justify-center">
        <TimelineDot reached={reached} />
      </div>

      <Spotlight className="rounded-2xl border border-border bg-bg-panel">
        <div className="p-5 sm:p-7">
          <header className="flex flex-wrap items-start justify-between gap-x-6 gap-y-3">
            <div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <h3 className="text-xl font-semibold tracking-tight text-text sm:text-2xl">
                  {job.company}
                </h3>
                <span
                  className={`font-editor rounded-full border px-2.5 py-0.5 text-[0.6875rem] ${
                    job.type === "Full-time" ?
                      "border-accent/40 bg-accent-dim text-accent"
                    : "border-border-strong text-text-muted"
                  }`}
                >
                  {job.type}
                </span>
              </div>
              <p className="mt-1 text-sm text-text-muted">{job.role}</p>
            </div>
            <p className="font-editor text-xs leading-relaxed text-text-subtle sm:text-right">
              {job.period && (
                <>
                  <span className="text-accent">{job.period}</span>
                  <br />
                </>
              )}
              {job.location}
            </p>
          </header>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-text">
            {job.summary}
          </p>

          <button
            type="button"
            aria-expanded={open}
            aria-controls={`job-${job.id}-details`}
            onClick={() => setOpen((o) => !o)}
            className="font-editor mt-5 flex min-h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-border bg-surface text-xs text-text-muted transition-colors active:bg-surface-hover sm:hidden"
          >
            {open ? "Hide details" : "Show details"}
            <FaChevronDown
              aria-hidden
              className={`size-3 transition-transform ${open ? "rotate-180" : ""}`}
            />
          </button>

          {/* Collapsed on phones, always open from `sm` up; stays in the DOM. */}
          <div
            id={`job-${job.id}-details`}
            className={open ? "block" : "hidden sm:block"}
          >
            <ul className="mt-6 space-y-4">
              {job.bullets.map((bullet) => (
                <li
                  key={bullet.lead}
                  className="grid gap-1 sm:grid-cols-[9.5rem_1fr] sm:gap-5"
                >
                  <span className="font-editor pt-0.5 text-xs text-accent">
                    {bullet.lead}
                  </span>
                  <span className="text-sm leading-relaxed text-text-muted sm:text-[0.9375rem]">
                    {bullet.text}
                  </span>
                </li>
              ))}
            </ul>

            <ul
              className="mt-7 flex flex-wrap gap-2 border-t border-border pt-5"
              aria-label={`${job.company} tech stack`}
            >
              {job.stack.map((key) => {
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
          </div>
        </div>
      </Spotlight>
    </motion.article>
  );
}

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 60%"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <Section id="experience">
      <SectionHeading>Work experience</SectionHeading>
      <div ref={ref} className="relative">
        <div
          aria-hidden
          className="absolute top-3 bottom-3 left-[0.875rem] w-px bg-border-strong sm:left-[1.25rem]"
        >
          <motion.div
            style={{ scaleY: progress }}
            className="h-full w-full origin-top bg-accent"
          />
        </div>
        <motion.div variants={stagger(0.12)} className="space-y-6 sm:space-y-8">
          {workExperience.map((job, i) => (
            <Job key={job.id} job={job} defaultOpen={i === 0} />
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
