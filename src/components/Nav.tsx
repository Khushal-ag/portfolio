"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { AnimatePresence, motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

import { navItems, site } from "@/content";

const SECTION_IDS = navItems
  .map((item) => (item.link.startsWith("#") ? item.link.slice(1) : item.link))
  .filter(Boolean);

function getActiveHash(): string {
  if (typeof window === "undefined") return "";
  return window.location.hash.slice(1) || "";
}

function getSectionInView(): string {
  if (typeof window === "undefined") return "";
  const topThreshold = 120;
  const candidates = SECTION_IDS.map((id) => ({
    id,
    top: document.getElementById(id)?.getBoundingClientRect().top ?? Infinity,
  })).filter((s) => s.top <= topThreshold);
  if (candidates.length === 0) {
    const first = SECTION_IDS.map((id) => ({
      id,
      top: document.getElementById(id)?.getBoundingClientRect().top ?? Infinity,
    })).filter((s) => s.top !== Infinity);

    if (first.length > 0) {
      return first.reduce((a, b) => (a.top < b.top ? a : b)).id;
    }

    return "";
  }

  return candidates.reduce((a, b) => (a.top > b.top ? a : b)).id;
}

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const isHome = pathname === "/";
  const scrolledHeaderClass =
    scrolled ?
      "border-border bg-bg/95 shadow-lg shadow-black/5 backdrop-blur-md"
    : "border-border-muted bg-bg/80 backdrop-blur-sm";

  useEffect(() => {
    const onHashChange = () => setActiveSection(getActiveHash());
    const id = window.setTimeout(() => setActiveSection(getActiveHash()), 0);
    window.addEventListener("hashchange", onHashChange);
    return () => {
      window.clearTimeout(id);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  useEffect(() => {
    const onScroll = () =>
      setActiveSection((prev) => getSectionInView() || prev);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkToHash = (link: string) =>
    link.startsWith("#") ? link.slice(1) : link;

  return (
    <>
      <header
        className={`fixed top-0 right-0 left-0 z-(--z-nav) border-b transition-all duration-300 ${scrolledHeaderClass}`}
      >
        <div className="section-container flex h-14 items-center gap-3 md:h-12 md:gap-4">
          {/* Window controls + brand */}
          <div className="flex shrink-0 items-center gap-3">
            <div className="hidden shrink-0 items-center gap-1.5 md:flex">
              <span className="size-2 rounded-full bg-[#ff5f56]" aria-hidden />
              <span className="size-2 rounded-full bg-[#ffbd2e]" aria-hidden />
              <span className="size-2 rounded-full bg-[#27c93f]" aria-hidden />
            </div>
            <Link
              href={isHome ? "#" : "/"}
              className="font-editor shrink-0 text-sm font-medium text-text transition hover:text-accent"
            >
              <span className="hidden sm:inline">
                {isHome ? site.author.name.split(" ")[0] : "Portfolio"}
              </span>
              <span className="sm:hidden">{isHome ? "portfolio" : "Home"}</span>
            </Link>
          </div>

          {/* Nav tabs */}
          <nav
            className="hidden flex-1 items-center justify-center gap-0.5 md:flex"
            aria-label="Main"
          >
            {navItems.map((item) => {
              const hash = linkToHash(item.link);
              const isActive = isHome && activeSection === hash;
              const href = isHome ? item.link : `/${item.link}`;
              const linkClass =
                isActive ?
                  "bg-surface-active text-accent"
                : "text-text-muted hover:bg-surface-hover hover:text-text";

              return (
                <Link
                  key={item.link}
                  href={href}
                  className={`font-editor shrink-0 rounded-md px-3 py-2 text-xs transition md:text-[0.8125rem] ${linkClass}`}
                  aria-current={isActive ? "true" : undefined}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* GitHub + Resume + mobile toggle */}
          <div className="ml-auto flex shrink-0 items-center gap-2">
            <a
              href={
                site.github?.href ??
                site.links?.github?.href ??
                "https://github.com/Khushal-ag"
              }
              target="_blank"
              rel="noopener noreferrer"
              className="hidden size-9 items-center justify-center rounded-lg text-text-muted transition hover:text-accent md:flex"
              aria-label="GitHub profile"
            >
              <FaGithub className="size-5" />
            </a>
            <a
              href={site.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary hidden shrink-0 py-2 text-xs md:inline-flex"
            >
              Resume
            </a>
            <button
              type="button"
              onClick={() => setMobileOpen((o) => !o)}
              className="flex size-10 items-center justify-center rounded-lg text-text-muted hover:bg-surface hover:text-text md:hidden"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ?
                <HiX className="size-5" />
              : <HiMenu className="size-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[calc(var(--z-nav)-1)] bg-bg/80 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
              aria-hidden
            />
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
              className="fixed top-14 right-0 left-0 z-(--z-nav) border-t border-b border-border bg-bg-panel md:hidden"
            >
              <nav
                className="section-container flex flex-col py-4"
                aria-label="Main"
              >
                {!isHome && (
                  <Link
                    href="/"
                    onClick={() => setMobileOpen(false)}
                    className="font-editor rounded-lg px-4 py-3 text-sm text-text transition hover:bg-surface-hover hover:text-accent"
                  >
                    Home
                  </Link>
                )}
                {navItems.map((item) => (
                  <Link
                    key={item.link}
                    href={isHome ? item.link : `/${item.link}`}
                    onClick={() => setMobileOpen(false)}
                    className="font-editor rounded-lg px-4 py-3 text-sm text-text transition hover:bg-surface-hover hover:text-accent"
                  >
                    {item.name}
                  </Link>
                ))}
                <a
                  href={site.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="btn-primary mx-4 mt-4 justify-center py-2.5 text-sm"
                >
                  Resume
                </a>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
