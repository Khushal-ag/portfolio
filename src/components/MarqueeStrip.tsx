"use client";

import { skills } from "@/data";

const allSkills = [
  ...skills.languages,
  ...skills.backendCloud,
  ...skills.frontendMobile,
  ...skills.databasesDevOps,
  ...skills.other,
];

export default function MarqueeStrip() {
  const row = [...allSkills, ...allSkills];

  return (
    <section className="relative overflow-hidden border-y border-border bg-surface/50 py-4">
      <div className="marquee-track flex w-max gap-4">
        {row.map((skill, i) => (
          <span
            key={`${skill}-${i}`}
            className="shrink-0 rounded-full border border-border bg-bg px-4 py-2 text-sm font-medium text-text-muted"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
