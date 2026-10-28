export const CONTENT_TAG = "content";

/** ~5m stale, refresh in background by 10m, hard expire at 1h (webhook safety net). */
export const CONTENT_CACHE_LIFE = {
  stale: 300,
  revalidate: 600,
  expire: 3600,
} as const;
