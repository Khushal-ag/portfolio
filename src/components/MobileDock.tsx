"use client";

import Link from "next/link";

import { motion } from "motion/react";
import {
  FaBriefcase,
  FaEnvelope,
  FaFolderOpen,
  FaHouse,
  FaUser,
} from "react-icons/fa6";

import { navItems } from "@/content";

/** Thumb-reach tabs shown on phones and tablets; `link` "" means the top of the page. */
const dockItems = [
  { label: "Home", link: "", Icon: FaHouse },
  { label: "About", link: "#about", Icon: FaUser },
  { label: "Work", link: "#experience", Icon: FaBriefcase },
  { label: "Projects", link: "#projects", Icon: FaFolderOpen },
  { label: "Contact", link: "#contact", Icon: FaEnvelope },
] as const;

const sectionOrder = navItems.map((item) => item.link.slice(1));

/** The last dock tab whose section the reader has reached (0 = Home). */
function activeTab(activeSection: string): number {
  const current = sectionOrder.indexOf(activeSection);
  if (current === -1) return 0;
  let result = 0;
  dockItems.forEach((item, i) => {
    const target = sectionOrder.indexOf(item.link.slice(1));
    if (i > 0 && target !== -1 && target <= current) result = i;
  });
  return result;
}

type MobileDockProps = {
  activeSection: string;
  isHome: boolean;
};

export default function MobileDock({ activeSection, isHome }: MobileDockProps) {
  const active = isHome ? activeTab(activeSection) : -1;

  return (
    <nav
      aria-label="Primary"
      className="fixed inset-x-0 bottom-0 z-(--z-nav) flex justify-center px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] lg:hidden"
    >
      <ul className="flex w-full max-w-md items-stretch rounded-3xl border border-border-strong bg-bg/85 p-1.5 shadow-2xl shadow-black/25 backdrop-blur-md">
        {dockItems.map(({ label, link, Icon }, i) => {
          const selected = i === active;
          const href =
            link === "" ?
              isHome ? "#"
              : "/"
            : isHome ? link
            : `/${link}`;
          return (
            <li key={label} className="flex-1">
              <Link
                href={href}
                aria-current={selected ? "page" : undefined}
                className={`relative flex min-h-14 flex-col items-center justify-center gap-1 rounded-2xl px-1 text-[0.6875rem] font-medium transition-colors ${
                  selected ? "text-accent" : "text-text-subtle active:text-text"
                }`}
              >
                {selected && (
                  <motion.span
                    layoutId="dock-active"
                    aria-hidden
                    className="absolute inset-0 rounded-2xl bg-surface-active"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                )}
                <Icon className="relative size-[1.125rem]" aria-hidden />
                <span className="relative">{label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
