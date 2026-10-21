"use client";

import { motion } from "motion/react";
import { LuAward, LuCode, LuGraduationCap, LuTrophy } from "react-icons/lu";

import { Section, SectionHeading } from "@/components/Section";
import Spotlight from "@/components/Spotlight";
import { achievements, education } from "@/content";
import { fadeUp, stagger } from "@/lib/motion";

/** Icon per achievement, in `achievements` order. */
const icons = [LuTrophy, LuCode, LuAward] as const;

export default function Achievements() {
  return (
    <Section id="achievements">
      <SectionHeading eyebrow="education">
        Education & achievements
      </SectionHeading>
      <motion.div
        variants={stagger(0.06)}
        className="grid gap-8 md:grid-cols-[1fr_1.7fr] md:gap-12"
      >
        <motion.div variants={fadeUp} className="self-start">
          <Spotlight className="editor-panel p-6 md:p-8">
            <span className="mb-4 flex size-10 items-center justify-center rounded-lg border border-border-strong bg-bg text-accent">
              <LuGraduationCap
                className="size-5"
                strokeWidth={1.75}
                aria-hidden
              />
            </span>
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
            const Icon = icons[i % icons.length] ?? LuTrophy;
            return (
              <motion.li
                key={text}
                variants={fadeUp}
                className="flex items-start gap-4 py-4 text-text-muted md:text-lg"
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-border-strong bg-bg-panel text-accent">
                  <Icon
                    className="size-[1.125rem]"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                </span>
                {text}
              </motion.li>
            );
          })}
        </ul>
      </motion.div>
    </Section>
  );
}
