"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

import { footer as footerContent, site, socialMedia } from "@/content";
import { githubProfileHref } from "@/lib/links";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="section-padding scroll-mt-20 border-t border-border bg-bg-elevated"
    >
      <div className="section-container text-center">
        <p className="font-editor mb-2 text-xs text-comment" aria-hidden>
          ~/portfolio/contact.ts
        </p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4 }}
          className="section-heading text-text"
        >
          {footerContent.heading}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="mt-3 text-text-muted"
        >
          {footerContent.subtext}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-3"
        >
          <Link
            href={`mailto:${footerContent.contactEmail}`}
            className="btn-primary inline-flex"
          >
            {footerContent.ctaText}
          </Link>
          <a
            href={githubProfileHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost inline-flex items-center gap-2"
          >
            <FaGithub className="size-4" />
            {site.github?.label ?? "View GitHub"}
          </a>
        </motion.div>
        <p className="font-editor mt-6 text-center text-xs text-text-muted">
          {site.github?.blurb ?? "More projects and code on GitHub."}
        </p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          {socialMedia.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex size-12 items-center justify-center rounded-lg border border-border bg-bg-panel transition hover:border-accent/40 hover:bg-surface-hover"
              aria-label={item.label ?? "Social link"}
            >
              <Image
                src={item.img}
                alt=""
                width={22}
                height={22}
                className="size-[22px]"
                unoptimized
              />
            </a>
          ))}
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10 text-sm text-text-subtle"
        >
          {footerContent.copyright.replace(
            "{year}",
            String(new Date().getFullYear()),
          )}{" "}
          ·{" "}
          <Link
            href="/khushal-agarwal"
            className="underline underline-offset-2 hover:text-accent"
          >
            Khushal Agarwal
          </Link>
        </motion.p>
      </div>
    </footer>
  );
}
