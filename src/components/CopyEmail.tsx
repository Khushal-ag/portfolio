"use client";

import { useState } from "react";

import { FaCheck, FaRegCopy } from "react-icons/fa6";

import Magnetic from "@/components/Magnetic";

/** Primary contact action: copies the email address, with mailto as fallback. */
export default function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <Magnetic className="w-full sm:inline-block sm:w-auto">
      <button
        type="button"
        onClick={copy}
        className="btn-primary min-h-14 w-full cursor-pointer px-6 py-3.5 text-sm sm:min-h-0 sm:w-auto sm:text-base"
      >
        {copied ?
          <FaCheck className="size-4" aria-hidden />
        : <FaRegCopy className="size-4" aria-hidden />}
        {copied ? "Copied to clipboard" : email}
      </button>
      <span className="sr-only" aria-live="polite">
        {copied ? "Email address copied" : ""}
      </span>
    </Magnetic>
  );
}
