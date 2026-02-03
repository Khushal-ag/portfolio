/**
 * ESLint 9 flat config for Next.js 16 + TypeScript.
 * Run type-check separately or via `lint` (tsc --noEmit && eslint .).
 */
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import eslintConfigPrettier from "eslint-config-prettier";

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    files: ["**/*.{ts,tsx}"],
    rules: {
      "@next/next/no-html-link-for-pages": "off",
      "react/jsx-key": "off",
    },
  },
  { rules: eslintConfigPrettier.rules },
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "node_modules/**",
    "dist/**",
    ".cache/**",
    "public/**",
    "*.esm.js",
    "*.d.ts",
    "bun.lock",
    "*.config.js",
    "*.config.mjs",
    "*.config.cjs",
  ]),
]);
