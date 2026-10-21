"use client";

import { motion } from "motion/react";
import { FaCertificate, FaCode, FaFileLines, FaTrophy } from "react-icons/fa6";

import { Section, SectionHeading } from "@/components/Section";
import Spotlight from "@/components/Spotlight";
import { achievements, education } from "@/content";
import { fadeUp, stagger } from "@/lib/motion";

/** Icon per achievement, in `achievements` order. */
const icons = [FaFileLines, FaTrophy, FaCode, FaCertificate] as const;

export default function Achievements() {
  return (
    <Section id="achievements">
      <SectionHeading>Education & achievements</SectionHeading>
      <motion.div
        variants={stagger(0.06)}
        className="grid gap-8 md:grid-cols-[1fr_1.7fr] md:gap-12"
      >
        <motion.div variants={fadeUp} className="self-start">
          <Spotlight className="editor-panel p-6 md:p-8">
            <h3 className="text-xs font-semibold tracking-wider text-accent uppercase">
              Education
            </h3>
            <p className="mt-3 font-semibold text-text">{education.degree}</p>
            <p className="text-text-muted">{education.school}</p>
            <p className="font-editor mt-3 text-xs text-text-subtle">
              {education.cpi} · {education.years}
            </p>
          </Spotlight>
        </motion.div>

        <ul className="divide-y divide-border border-y border-border">
          {achievements.map((text, i) => {
            const Icon = icons[i % icons.length] ?? FaTrophy;
            return (
              <motion.li
                key={text}
                variants={fadeUp}
                className="flex items-start gap-4 py-4 text-text-muted md:text-lg"
              >
                <Icon
                  className="mt-1.5 size-4 shrink-0 text-accent"
                  aria-hidden
                />
                {text}
              </motion.li>
            );
          })}
        </ul>
      </motion.div>
    </Section>
  );
}
