"use client";

import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa6";

export default function ThemeToggle({
  className = "",
}: {
  className?: string;
}) {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className={`flex size-10 cursor-pointer items-center justify-center rounded-lg text-text-muted transition hover:bg-surface-hover hover:text-accent lg:size-9 ${className}`}
      aria-label="Toggle color theme"
    >
      <FaSun className="hidden size-4 dark:block" aria-hidden />
      <FaMoon className="size-4 dark:hidden" aria-hidden />
    </button>
  );
}
