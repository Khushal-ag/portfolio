"use client";

import { useEffect, useState } from "react";

import { allSkills } from "@/content";
import SkillIcon from "@/lib/skill-icons";

const middle = Math.ceil(allSkills.length / 2);
const rows = [
  { skills: allSkills.slice(0, middle), className: "" },
  { skills: allSkills.slice(middle), className: "reverse" },
];

/**
 * Decorative skill ticker; the Skills section carries the accessible list.
 * The server sends one copy of each row. The copy that makes the loop seamless
 * is added after hydration, which keeps roughly 170 inline icons out of the HTML.
 */
export default function MarqueeStrip() {
  const [looping, setLooping] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => setLooping(true), 0);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <section
      className="marquee relative space-y-3 overflow-hidden border-y border-border bg-linear-to-b from-bg-panel to-bg-elevated py-5"
      aria-hidden
    >
      {rows.map(({ skills, className }) => (
        <div
          key={className || "forward"}
          className={`flex w-max gap-3 ${looping ? `marquee-track ${className}` : ""}`}
        >
          {(looping ? [...skills, ...skills] : skills).map((skill, i) => (
            <span
              key={`${skill}-${i}`}
              className="font-editor inline-flex shrink-0 items-center gap-2.5 rounded-full border border-border-strong bg-bg-panel py-1.5 pr-4 pl-2.5 text-xs text-text shadow-sm shadow-black/5"
            >
              <SkillIcon skill={skill} className="size-4" />
              {skill}
            </span>
          ))}
        </div>
      ))}
    </section>
  );
}
