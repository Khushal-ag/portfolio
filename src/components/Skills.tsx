"use client";

import { useRef } from "react";
import { skills } from "@/data";
import { motion, useInView } from "framer-motion";

import { Section, SectionHeading } from "@/components/Section";

const groups = [
  { label: "Languages", items: skills.languages },
  { label: "Backend & Cloud", items: skills.backendCloud },
  { label: "Frontend & Mobile", items: skills.frontendMobile },
  { label: "Databases & DevOps", items: skills.databasesDevOps },
  { label: "Other", items: skills.other },
] as const;

const stagger = {
  visible: { transition: { staggerChildren: 0.03, delayChildren: 0.05 } },
};
const pill = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <Section id="skills" reveal={false}>
      <div ref={ref}>
        <SectionHeading>Technical skills</SectionHeading>
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={stagger}
          className="flex flex-col gap-8"
        >
          {groups.map(({ label, items }) => (
            <div key={label}>
              <motion.h3
                variants={pill}
                className="mb-3 text-xs font-semibold tracking-wider text-accent uppercase"
              >
                {label}
              </motion.h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={pill}
                    whileHover={{
                      scale: 1.03,
                      borderColor: "var(--color-accent)",
                    }}
                    className="rounded-full border border-border bg-surface px-4 py-2 text-sm text-text-muted transition-colors hover:text-text"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
