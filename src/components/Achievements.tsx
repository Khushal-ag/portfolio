"use client";

import { useRef } from "react";
import { achievements, education } from "@/data";
import { motion, useInView } from "framer-motion";

import { Section, SectionFileLabel, SectionHeading } from "@/components/Section";

const item = {
  hidden: { opacity: 0, x: -12 },
  visible: { opacity: 1, x: 0 },
};

export default function Achievements() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <Section id="achievements" reveal={false}>
      <div ref={ref}>
        <SectionFileLabel file="~/portfolio/achievements.ts" />
        <SectionHeading>Education & achievements</SectionHeading>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            visible: {
              transition: { staggerChildren: 0.06, delayChildren: 0.05 },
            },
          }}
          className="space-y-8"
        >
          <motion.div
            variants={item}
            transition={{ duration: 0.35 }}
            className="editor-panel p-6 md:p-8"
          >
            <h3 className="text-xs font-semibold tracking-wider text-accent uppercase">
              Education
            </h3>
            <p className="mt-2 font-[var(--font-heading)] font-semibold text-text">
              {education.degree} · {education.school}
            </p>
            <p className="text-sm text-text-muted">
              {education.cpi} · {education.year}
            </p>
          </motion.div>

          <div>
            <h3 className="mb-4 text-xs font-semibold tracking-wider text-accent uppercase">
              Achievements
            </h3>
            <ul className="space-y-3">
              {achievements.map((text, i) => (
                <motion.li
                  key={i}
                  variants={item}
                  transition={{ duration: 0.35 }}
                  className="flex items-start gap-3 rounded-md border border-border bg-bg-panel px-4 py-3 text-sm text-text-muted md:text-base"
                >
                  <span className="mt-1.5 size-2 shrink-0 rounded-full bg-accent" />
                  {text}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
