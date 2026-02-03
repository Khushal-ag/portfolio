"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { navItems } from "@/data";
import { AnimatePresence, motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

import { siteConfig } from "@/config/site";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 right-0 left-0 z-[var(--z-nav)] transition-all duration-300 ${
          scrolled ? "border-border bg-bg/80 border-b backdrop-blur-xl" : ""
        }`}
      >
        <div className="section-container flex h-16 items-center justify-between md:h-18">
          <Link
            href="#"
            className="text-text hover:text-accent text-lg font-(--font-heading) font-semibold transition"
          >
            {siteConfig.author.name.split(" ")[0]}
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.link}
                href={item.link}
                className="text-text-muted hover:text-accent text-sm font-medium transition"
              >
                {item.name}
              </Link>
            ))}
            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm"
            >
              Resume
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            className="text-text hover:bg-surface flex size-10 items-center justify-center rounded-lg md:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <HiX className="size-6" />
            ) : (
              <HiMenu className="size-6" />
            )}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-bg/95 fixed inset-0 z-[calc(var(--z-nav)-1)] pt-20 backdrop-blur-xl md:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <nav className="section-container flex flex-col gap-2 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.link}
                  href={item.link}
                  onClick={() => setMobileOpen(false)}
                  className="text-text hover:bg-surface rounded-lg px-4 py-3 text-lg font-medium"
                >
                  {item.name}
                </Link>
              ))}
              <a
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mx-4 mt-4 justify-center"
                onClick={() => setMobileOpen(false)}
              >
                Resume
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
