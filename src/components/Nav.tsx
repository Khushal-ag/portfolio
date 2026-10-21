"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import { FaBars, FaGithub, FaXmark } from "react-icons/fa6";

import ExternalLink from "@/components/ExternalLink";
import ThemeToggle from "@/components/ThemeToggle";
import TrafficLights from "@/components/TrafficLights";
import { navItems, site } from "@/content";
import { EASE } from "@/lib/motion";

const SECTION_IDS = navItems.map((item) => item.link.slice(1));

const mobileLinkClass =
  "font-editor rounded-xl px-4 py-3 text-sm text-text transition hover:bg-surface-hover hover:text-accent";

function getActiveHash(): string {
  return window.location.hash.slice(1);
}

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const isHome = pathname === "/";

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
    const targets = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    if (targets.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        }
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  const hrefFor = (link: string) => (isHome ? link : `/${link}`);
  const closeMenu = () => setMobileOpen(false);

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
            className="font-editor flex shrink-0 items-center gap-2.5 rounded-full py-1 pr-2 pl-1 text-sm font-medium text-text transition hover:text-accent"
          >
            <TrafficLights />
            <span>{isHome ? site.author.name.split(" ")[0] : "Home"}</span>
          </Link>

          <nav className="hidden items-center lg:flex" aria-label="Main">
            {navItems.map((item) => {
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
              className="btn-primary hidden shrink-0 rounded-full px-4 py-1.5 text-xs lg:inline-flex"
            >
              Resume
            </ExternalLink>
            <button
              type="button"
              onClick={() => setMobileOpen((o) => !o)}
              className="flex size-9 items-center justify-center rounded-full text-text-muted transition hover:bg-surface-hover hover:text-text lg:hidden"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ?
                <FaXmark className="size-5" />
              : <FaBars className="size-5" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[calc(var(--z-nav)-1)] bg-bg/70 backdrop-blur-sm lg:hidden"
              onClick={closeMenu}
              aria-hidden
            />
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2, ease: EASE }}
              className="fixed inset-x-3 top-[4.25rem] z-(--z-nav) mx-auto max-w-xl rounded-2xl border border-border-strong bg-bg-panel p-2 shadow-2xl shadow-black/20 sm:top-[4.75rem] lg:hidden"
            >
              <nav className="flex flex-col" aria-label="Main">
                {!isHome && (
                  <Link
                    href="/"
                    onClick={closeMenu}
                    className={mobileLinkClass}
                  >
                    Home
                  </Link>
                )}
                {navItems.map((item) => (
                  <Link
                    key={item.link}
                    href={hrefFor(item.link)}
                    onClick={closeMenu}
                    className={mobileLinkClass}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="mt-2 flex items-center gap-2 border-t border-border p-2 pt-3">
                  <ExternalLink
                    href={site.resumeUrl}
                    onClick={closeMenu}
                    className="btn-primary flex-1 justify-center py-2.5 text-sm"
                  >
                    Resume
                  </ExternalLink>
                  <ExternalLink
                    href={site.links.github}
                    onClick={closeMenu}
                    className="btn-ghost flex-1 justify-center py-2.5 text-sm"
                  >
                    <FaGithub className="size-4" aria-hidden />
                    GitHub
                  </ExternalLink>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
