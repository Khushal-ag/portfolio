"use client";

import { useRef } from "react";
import { workExperience } from "@/data";
import { motion, useInView } from "framer-motion";

import { Section, SectionHeading } from "@/components/Section";

const card = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <Section id="experience" reveal={false}>
      <div ref={ref}>
        <SectionHeading>Work experience</SectionHeading>
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            visible: {
              transition: { staggerChildren: 0.1, delayChildren: 0.05 },
            },
          }}
          className="space-y-6"
        >
          {workExperience.map((job) => (
            <motion.article
              key={job.id}
              variants={card}
              transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
              className="card-surface p-6 md:p-8"
            >
              <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                <div>
                  <h3 className="text-text text-lg font-(--font-heading) font-semibold md:text-xl">
                    {job.role} · {job.company}
                  </h3>
                  <p className="text-accent/90 text-sm">
                    {job.location}
                    {job.period && ` · ${job.period}`}
                  </p>
                </div>
              </div>
              <ul className="text-text-muted mt-4 list-inside list-disc space-y-2 text-sm leading-relaxed md:text-base">
                {job.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
