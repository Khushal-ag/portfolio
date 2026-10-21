"use client";

import { useState } from "react";

import { FaCheck, FaRegCopy } from "react-icons/fa6";

import Magnetic from "@/components/Magnetic";
import { site } from "@/content";

/** Primary contact action: copies the email address, with mailto as fallback. */
export default function CopyEmail() {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(site.author.mail);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${site.author.mail}`;
    }
  }

  return (
    <Magnetic>
      <button
        type="button"
        onClick={copy}
        className="btn-primary cursor-pointer px-6 py-3.5 text-sm sm:text-base"
      >
        {copied ?
          <FaCheck className="size-4" aria-hidden />
        : <FaRegCopy className="size-4" aria-hidden />}
        {copied ? "Copied to clipboard" : site.author.mail}
      </button>
      <span className="sr-only" aria-live="polite">
        {copied ? "Email address copied" : ""}
      </span>
    </Magnetic>
  );
}
