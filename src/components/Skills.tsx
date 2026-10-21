"use client";

import { useRef, useState } from "react";

import { motion } from "motion/react";

import { Section, SectionHeading } from "@/components/Section";
import { skillGroups } from "@/content";
import { fadeUp } from "@/lib/motion";

export default function Skills() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  function select(index: number) {
    const next = (index + skillGroups.length) % skillGroups.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  }

  function onPointerEnter(e: React.PointerEvent, index: number) {
    if (e.pointerType === "mouse") setActive(index);
  }

  function onKeyDown(e: React.KeyboardEvent, index: number) {
    const keys: Record<string, number | undefined> = {
      ArrowDown: index + 1,
      ArrowRight: index + 1,
      ArrowUp: index - 1,
      ArrowLeft: index - 1,
      Home: 0,
      End: skillGroups.length - 1,
    };
    const target = keys[e.key];
    if (target === undefined) return;
    e.preventDefault();
    select(target);
  }

  return (
    <Section id="skills">
      <SectionHeading>Technical skills</SectionHeading>
      <motion.div
        variants={fadeUp}
        className="grid gap-5 lg:grid-cols-[17rem_1fr] lg:gap-8"
      >
        <div
          role="tablist"
          aria-label="Skill categories"
          aria-orientation="vertical"
          className="-mx-1 flex snap-x gap-2 overflow-x-auto px-1 pb-2 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0 lg:pb-0"
        >
          {skillGroups.map((group, i) => {
            const selected = i === active;
            return (
              <button
                key={group.label}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                id={`skill-tab-${i}`}
                role="tab"
                type="button"
                aria-selected={selected}
                aria-controls={`skill-panel-${i}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(i)}
                onPointerEnter={(e) => onPointerEnter(e, i)}
                onKeyDown={(e) => onKeyDown(e, i)}
                className={`relative flex shrink-0 cursor-pointer snap-start items-center justify-between gap-4 rounded-xl border px-4 py-3 text-left transition-colors lg:w-full ${
                  selected ?
                    "border-accent/40 text-text"
                  : "border-border text-text-muted hover:border-border-strong hover:text-text"
                }`}
              >
                {selected && (
                  <motion.span
                    layoutId="skill-tab"
                    aria-hidden
                    className="absolute inset-0 rounded-xl bg-surface-active"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative text-sm font-medium whitespace-nowrap">
                  {group.label}
                </span>
                <span
                  className={`font-editor relative text-xs ${selected ? "text-accent" : "text-text-dim"}`}
                >
                  {group.items.length}
                </span>
              </button>
            );
          })}
        </div>

        <div className="editor-panel min-h-72 p-5 sm:p-7">
          {skillGroups.map((group, i) => (
            <div
              key={group.label}
              id={`skill-panel-${i}`}
              role="tabpanel"
              aria-labelledby={`skill-tab-${i}`}
              hidden={i !== active}
            >
              <h3 className="font-editor mb-5 text-xs text-text-subtle">
                {`// ${group.label}`}
              </h3>
              <ul className="flex flex-wrap gap-2.5">
                {group.items.map((skill, j) => (
                  <li
                    key={skill}
                    className="chip-in font-editor rounded-lg border border-border bg-bg-elevated px-4 py-2.5 text-sm text-text-muted transition-colors hover:border-accent/50 hover:text-text"
                    style={{ "--i": j } as React.CSSProperties}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
