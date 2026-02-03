"use client";

import { site } from "@/content";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const href =
  site.github?.href ?? site.links?.github?.href ?? "https://github.com/Khushal-ag";

export default function GitHubCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4 }}
      className="mt-10 flex flex-wrap items-center justify-center gap-4 rounded-lg border border-border bg-bg-panel px-6 py-5 text-center"
    >
      <p className="text-text-muted text-sm md:text-base">
        {site.github?.blurb ?? "More projects, open-source work, and code on GitHub."}
      </p>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="link-accent font-editor inline-flex items-center gap-2 text-sm font-medium"
      >
        <FaGithub className="size-4" />
        {site.github?.label ?? "View my GitHub"}
      </a>
    </motion.div>
  );
}
