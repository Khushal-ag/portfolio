"use client";

import { useEffect, useState } from "react";

import SkillIcon from "@/lib/skill-icons";

/**
 * Decorative skill ticker; the Skills section carries the accessible list.
 * The server sends one copy of each row. The copy that makes the loop seamless
 * is added after hydration, which keeps roughly 170 inline icons out of the HTML.
 */
export default function MarqueeStrip({ skills }: { skills: string[] }) {
  const [looping, setLooping] = useState(false);
  const middle = Math.ceil(skills.length / 2);
  const rows = [
    { skills: skills.slice(0, middle), className: "" },
    { skills: skills.slice(middle), className: "reverse" },
  ];

  useEffect(() => {
    const id = window.setTimeout(() => setLooping(true), 0);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <section
      className="marquee relative space-y-3 overflow-hidden border-y border-border bg-linear-to-b from-bg-panel to-bg-elevated py-5"
      aria-hidden
    >
      {rows.map(({ skills: rowSkills, className }) => (
        <div
          key={className || "forward"}
          className={`flex w-max gap-3 ${looping ? `marquee-track ${className}` : ""}`}
        >
          {(looping ? [...rowSkills, ...rowSkills] : rowSkills).map(
            (skill, i) => (
              <span
                key={`${skill}-${i}`}
                className="font-editor inline-flex shrink-0 items-center gap-2.5 rounded-full border border-border-strong bg-bg-panel py-1.5 pr-4 pl-2.5 text-xs text-text shadow-sm shadow-black/5"
              >
                <SkillIcon skill={skill} className="size-4" />
                {skill}
              </span>
            ),
          )}
        </div>
      ))}
    </section>
  );
}
