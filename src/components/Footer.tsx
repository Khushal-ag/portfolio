"use client";

import Image from "next/image";
import Link from "next/link";
import { footer as footerContent, site, socialMedia } from "@/content";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="section-padding border-border bg-bg-elevated scroll-mt-20 border-t"
    >
      <div className="section-container text-center">
        <p className="font-editor text-comment mb-2 text-xs" aria-hidden>
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
          className="text-text-muted mt-3"
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
            href={
              site.github?.href ??
              site.links?.github?.href ??
              "https://github.com/Khushal-ag"
            }
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost inline-flex items-center gap-2"
          >
            <FaGithub className="size-4" />
            {site.github?.label ?? "View GitHub"}
          </a>
        </motion.div>
        <p className="text-text-muted font-editor mt-6 text-center text-xs">
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
              className="border-border bg-bg-panel hover:border-accent/40 hover:bg-surface-hover flex size-12 items-center justify-center rounded-lg border transition"
              aria-label={item.label ?? "Social link"}
            >
              <Image
                src={item.img}
                alt={item.label ?? ""}
                width={22}
                height={22}
              />
            </a>
          ))}
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-text-subtle mt-10 text-sm"
        >
          {footerContent.copyright.replace(
            "{year}",
            String(new Date().getFullYear()),
          )}
        </motion.p>
      </div>
    </footer>
  );
}
