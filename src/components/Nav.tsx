"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { navItems } from "@/data";
import { AnimatePresence, motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

import { siteConfig } from "@/config/site";

function getActiveHash(): string {
  if (typeof window === "undefined") return "";
  return window.location.hash.slice(1) || "";
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

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
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkToHash = (link: string) => (link.startsWith("#") ? link.slice(1) : link);

  return (
    <>
      <header
        className={`fixed top-0 right-0 left-0 z-[var(--z-nav)] border-b transition-all duration-300 ${
          scrolled
            ? "border-border bg-bg/95 shadow-lg shadow-black/5 backdrop-blur-md"
            : "border-border-muted bg-bg/80 backdrop-blur-sm"
        }`}
      >
        <div className="section-container flex h-14 items-center gap-3 md:gap-4 md:h-12">
          {/* Window controls + brand */}
          <div className="flex shrink-0 items-center gap-3">
            <div className="hidden shrink-0 items-center gap-1.5 md:flex">
              <span className="size-2 rounded-full bg-[#ff5f56]" aria-hidden />
              <span className="size-2 rounded-full bg-[#ffbd2e]" aria-hidden />
              <span className="size-2 rounded-full bg-[#27c93f]" aria-hidden />
            </div>
            <Link
              href="#"
              className="font-editor text-text hover:text-accent shrink-0 text-sm font-medium transition"
            >
              <span className="hidden sm:inline">{siteConfig.author.name.split(" ")[0]}</span>
              <span className="sm:hidden">portfolio</span>
            </Link>
          </div>

          {/* Nav tabs */}
          <nav
            className="hidden flex-1 items-center justify-center gap-0.5 md:flex"
            aria-label="Main"
          >
            {navItems.map((item) => {
              const hash = linkToHash(item.link);
              const isActive = activeSection === hash;
              return (
                <Link
                  key={item.link}
                  href={item.link}
                  className={`font-editor shrink-0 rounded-md px-3 py-2 text-xs transition md:text-[0.8125rem] ${
                    isActive
                      ? "bg-surface-active text-accent"
                      : "text-text-muted hover:bg-surface-hover hover:text-text"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* GitHub + Resume + mobile toggle */}
          <div className="ml-auto flex shrink-0 items-center gap-2">
            <a
              href={siteConfig.github?.href ?? siteConfig.links?.github?.href ?? "https://github.com/Khushal-ag"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-accent hidden size-9 items-center justify-center rounded-lg transition md:flex"
              aria-label="GitHub profile"
            >
              <FaGithub className="size-5" />
            </a>
            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary hidden shrink-0 py-2 text-xs md:inline-flex"
            >
              Resume
            </a>
            <button
              type="button"
              onClick={() => setMobileOpen((o) => !o)}
              className="text-text-muted hover:bg-surface hover:text-text flex size-10 items-center justify-center rounded-lg md:hidden"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <HiX className="size-5" /> : <HiMenu className="size-5" />}
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
              className="bg-bg/80 fixed inset-0 z-[calc(var(--z-nav)-1)] backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
              aria-hidden
            />
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
              className="border-border bg-bg-panel fixed top-14 right-0 left-0 z-[var(--z-nav)] border-b border-t md:hidden"
            >
              <nav className="section-container flex flex-col py-4" aria-label="Main">
                {navItems.map((item) => (
                  <Link
                    key={item.link}
                    href={item.link}
                    onClick={() => setMobileOpen(false)}
                    className="text-text hover:bg-surface-hover hover:text-accent font-editor rounded-lg px-4 py-3 text-sm transition"
                  >
                    {item.name}
                  </Link>
                ))}
                <a
                  href={siteConfig.resumeUrl}
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
