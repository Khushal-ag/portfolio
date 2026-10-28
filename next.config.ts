import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

/** Sensible CSP for a static portfolio site without breaking Next.js. */
const contentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data:",
  "connect-src 'self' https:",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  // Avoid forcing HTTPS upgrade during local http:// development.
  ...(isProd ? ["upgrade-insecure-requests"] : []),
].join("; ");

const studioContentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://core.sanity-cdn.com https://*.sanity.io",
  "style-src 'self' 'unsafe-inline' https://core.sanity-cdn.com https://*.sanity.io",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data: https:",
  "connect-src 'self' https: wss:",
  "worker-src 'self' blob:",
  "child-src 'self' blob:",
  "frame-src 'self' https://*.sanity.io https://www.youtube.com https://youtube.com",
  "frame-ancestors 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
].join("; ");

const baseSecurityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
];

const securityHeaders = [
  ...baseSecurityHeaders,
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "Content-Security-Policy",
    value: contentSecurityPolicy,
  },
];

const studioSecurityHeaders = [
  ...baseSecurityHeaders,
  {
    key: "Content-Security-Policy",
    value: studioContentSecurityPolicy,
  },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Next.js 16.4 recommends Cache Components for new apps (create-next-app default).
  cacheComponents: true,
  partialPrefetching: true,
  // Always-on React Compiler; Rust path via Turbopack when available.
  reactCompiler: true,
  experimental: {
    turbopackRustReactCompiler: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/studio/:path*",
        headers: studioSecurityHeaders,
      },
      {
        // Everything except the Studio, which needs its own looser CSP.
        source: "/:path((?!studio(?:/|$)).*)*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
