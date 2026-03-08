"use client";

import { useEffect } from "react";
import Link from "next/link";

import { site } from "@/content";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-dvh flex-col items-center justify-center bg-bg px-4">
      <div className="w-full max-w-lg overflow-hidden rounded-lg border border-border bg-bg-panel shadow-xl shadow-black/10">
        <div className="flex items-center gap-2 border-b border-border bg-bg-elevated px-3 py-2">
          <span className="size-2 rounded-full bg-[#ff5f56]" aria-hidden />
          <span className="size-2 rounded-full bg-[#ffbd2e]" aria-hidden />
          <span className="size-2 rounded-full bg-[#27c93f]" aria-hidden />
          <span className="font-editor ml-2 text-xs text-text-dim">
            error.tsx
          </span>
        </div>
        <div className="border-l-2 border-accent/20 bg-bg-panel px-6 py-8 md:px-8 md:py-10">
          <p className="font-editor text-sm text-comment">
            {"// Something went wrong"}
          </p>
          <p className="mt-2 text-xl font-(--font-heading) tracking-tight text-text md:text-2xl">
            <span className="text-accent">Application error</span>
          </p>
          <p className="mt-3 text-sm leading-relaxed text-text-muted">
            {error.message ||
              "An unexpected error occurred. Try again or go back home."}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button type="button" onClick={reset} className="btn-primary">
              Try again
            </button>
            <Link href="/" className="btn-ghost">
              Back home
            </Link>
            <a href={`mailto:${site.author.mail}`} className="btn-ghost">
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
