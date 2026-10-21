"use client";

import { useEffect } from "react";

import "@/styles/globals.css";

import ErrorCard from "@/components/ErrorCard";
import { fontVariables } from "@/lib/fonts";

/** Replaces the root layout, so it owns <html>/<body> and forces the dark theme. */
export default function GlobalError({
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
    <html lang="en" className={`dark ${fontVariables}`}>
      <body className="bg-bg font-(--font-body) text-text antialiased">
        <ErrorCard
          file="global-error.tsx"
          comment="Critical error"
          title={<span className="text-accent">Application error</span>}
          message={
            error.message ||
            "Something went wrong. Please refresh or try again."
          }
        >
          <button type="button" onClick={reset} className="btn-primary">
            Try again
          </button>
          <a href="/" className="btn-ghost">
            Back home
          </a>
        </ErrorCard>
      </body>
    </html>
  );
}
