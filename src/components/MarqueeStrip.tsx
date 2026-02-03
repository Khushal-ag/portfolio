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
    <section className="relative overflow-hidden border-y border-border-muted bg-bg-panel/80 py-3">
      <div className="marquee-track flex w-max gap-4">
        {row.map((skill, i) => (
          <span
            key={`${skill}-${i}`}
            className="font-editor shrink-0 rounded-md border border-border bg-bg px-3 py-1.5 text-xs text-text-muted"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
