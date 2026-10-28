"use client";

import { useEffect } from "react";
import Link from "next/link";

import ErrorCard from "@/components/ErrorCard";
import { staticFallback } from "@/lib/cms/fallback";

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
    <ErrorCard
      file="error.tsx"
      comment="Something went wrong"
      title={<span className="text-accent">Application error</span>}
      message={
        error.message ||
        "An unexpected error occurred. Try again or go back home."
      }
    >
      <button type="button" onClick={reset} className="btn-primary">
        Try again
      </button>
      <Link href="/" className="btn-ghost">
        Back home
      </Link>
      <a href={`mailto:${staticFallback.authorMail}`} className="btn-ghost">
        Contact
      </a>
    </ErrorCard>
  );
}
