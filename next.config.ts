import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const imageHostnames = (process.env.NEXT_PUBLIC_IMAGE_HOSTS ?? "")
  .split(",")
  .map((host) => host.trim())
  .filter(Boolean);

const nextConfig: NextConfig = {
  reactStrictMode: true,
  reactCompiler: isProd,
  experimental: {
    optimizePackageImports: ["react-icons"],
  },
  ...(imageHostnames.length > 0 && {
    images: {
      remotePatterns: imageHostnames.map((hostname) => ({
        protocol: "https",
        hostname,
      })),
    },
  }),
};

export default nextConfig;
