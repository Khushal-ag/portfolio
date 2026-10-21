"use client";

import { useRef, useState } from "react";

import { motion } from "motion/react";
import {
  FaBrain,
  FaCode,
  FaDatabase,
  FaMobileScreen,
  FaServer,
} from "react-icons/fa6";

import { Section, SectionHeading } from "@/components/Section";
import { skillGroups } from "@/content";
import { fadeUp } from "@/lib/motion";
import SkillIcon from "@/lib/skill-icons";

/** Icon per skill group, in `skillGroups` order. */
const groupIcons = [
  FaCode,
  FaServer,
  FaMobileScreen,
  FaDatabase,
  FaBrain,
] as const;

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
            const GroupIcon = groupIcons[i] ?? FaCode;
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
                <span className="relative flex items-center gap-3">
                  <GroupIcon
                    className={`size-4 ${selected ? "text-accent" : "text-text-dim"}`}
                    aria-hidden
                  />
                  <span className="text-sm font-medium whitespace-nowrap">
                    {group.label}
                  </span>
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

        <div className="editor-panel relative min-h-72 overflow-hidden bg-[radial-gradient(ellipse_60%_70%_at_100%_100%,var(--color-accent-dim),transparent)] p-5 sm:p-7">
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
                    className="chip-in font-editor group flex items-center gap-2.5 rounded-xl border border-border bg-bg-elevated py-1.5 pr-3 pl-1.5 text-[0.8125rem] text-text-muted shadow-sm shadow-black/5 transition-[border-color,color,transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-accent/50 hover:text-text hover:shadow-md sm:gap-3 sm:py-2 sm:pr-4 sm:pl-2 sm:text-sm"
                    style={{ "--i": j } as React.CSSProperties}
                  >
                    <span className="flex size-9 items-center justify-center rounded-lg border border-border bg-bg-panel transition-transform duration-200 group-hover:scale-110">
                      <SkillIcon skill={skill} className="size-5" />
                    </span>
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
