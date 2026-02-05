"use client";

import { skills } from "@/content";

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
    <section className="border-border-muted bg-bg-panel/80 relative overflow-hidden border-y py-3">
      <div className="marquee-track flex w-max gap-4">
        {row.map((skill, i) => (
          <span
            key={`${skill}-${i}`}
            className="font-editor border-border bg-bg text-text-muted shrink-0 rounded-md border px-3 py-1.5 text-xs"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
