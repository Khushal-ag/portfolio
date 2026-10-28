"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { FaGithub } from "react-icons/fa6";

import type { SiteContent } from "@/lib/cms/types";

import ExternalLink from "@/components/ExternalLink";
import MobileDock from "@/components/MobileDock";
import ThemeToggle from "@/components/ThemeToggle";
import TrafficLights from "@/components/TrafficLights";

function getActiveHash(): string {
  return window.location.hash.slice(1);
}

export default function Nav({ site }: { site: SiteContent }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const isHome = pathname === "/";
  const sectionIds = site.navItems.map((item) => item.link.slice(1));
  const sectionIdsKey = sectionIds.join("|");

  useEffect(() => {
    const onHashChange = () => setActiveSection(getActiveHash());
    const id = window.setTimeout(() => setActiveSection(getActiveHash()), 0);
    window.addEventListener("hashchange", onHashChange);
    return () => {
      window.clearTimeout(id);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 24);
    if (y < 120) setActiveSection("");
  });

  useEffect(() => {
    const ids = sectionIdsKey ? sectionIdsKey.split("|") : [];
    const targets = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (targets.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          // Late callbacks must not overwrite the "back at the top" state.
          if (entry.isIntersecting && window.scrollY >= 120) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname, sectionIdsKey]);

  const hrefFor = (link: string) => (isHome ? link : `/${link}`);

  return (
    <>
      <header className="fixed inset-x-0 top-3 z-(--z-nav) flex justify-center px-3 sm:top-4 sm:px-4">
        <div
          className={`flex w-full max-w-xl items-center gap-2 rounded-full border px-3 py-1.5 backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-300 lg:w-auto lg:max-w-none ${
            scrolled ?
              "border-border-strong bg-bg/85 shadow-lg shadow-black/10"
            : "border-border bg-bg/55"
          }`}
        >
          <Link
            href={isHome ? "#" : "/"}
            className="font-editor flex min-h-10 shrink-0 items-center gap-2.5 rounded-full py-1 pr-2 pl-1 text-sm font-medium text-text transition hover:text-accent"
          >
            <TrafficLights />
            <span>{isHome ? site.author.name.split(" ")[0] : "Home"}</span>
          </Link>

          <nav className="hidden items-center lg:flex" aria-label="Main">
            {site.navItems.map((item) => {
              const isActive = isHome && activeSection === item.link.slice(1);
              return (
                <Link
                  key={item.link}
                  href={hrefFor(item.link)}
                  aria-current={isActive ? "true" : undefined}
                  className={`font-editor relative rounded-full px-3 py-1.5 text-[0.8125rem] transition-colors ${
                    isActive ? "text-accent" : "text-text-muted hover:text-text"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-full bg-surface-active"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 32,
                      }}
                    />
                  )}
                  <span className="relative">{item.name}</span>
                </Link>
              );
            })}
          </nav>

          <div className="ml-auto flex shrink-0 items-center gap-1">
            <ExternalLink
              href={site.links.github}
              className="hidden size-9 items-center justify-center rounded-full text-text-muted transition hover:bg-surface-hover hover:text-accent lg:flex"
              aria-label="GitHub profile"
            >
              <FaGithub className="size-[1.125rem]" />
            </ExternalLink>
            <ThemeToggle />
            <ExternalLink
              href={site.resumeUrl}
              className="btn-primary min-h-10 shrink-0 rounded-full px-4 py-2 text-xs"
            >
              Resume
            </ExternalLink>
          </div>
        </div>
      </header>

      <MobileDock
        navItems={site.navItems}
        activeSection={activeSection}
        isHome={isHome}
      />
    </>
  );
}
