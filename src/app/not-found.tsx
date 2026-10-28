import Link from "next/link";

import ErrorCard from "@/components/ErrorCard";
import ExternalLink from "@/components/ExternalLink";
import { getStaticFallback } from "@/lib/cms/content";

export default function NotFound() {
  const fallback = getStaticFallback();

  return (
    <ErrorCard
      file="404.ts"
      comment="Page not found"
      title={
        <>
          <span className="text-keyword">404</span>
          <span className="text-text-muted"> - </span>
          <span className="text-accent">Not found</span>
        </>
      }
      message="The route you’re looking for doesn’t exist or was moved."
    >
      <Link href="/" className="btn-primary">
        Back home
      </Link>
      <ExternalLink href={fallback.resumeUrl} className="btn-ghost">
        Resume
      </ExternalLink>
    </ErrorCard>
  );
}
