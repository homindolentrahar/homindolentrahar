"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "./Icons";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isDark, setIsDark] = useState(theme === "dark");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      type="button"
      role="switch"
      onClick={() => {
        setIsDark(!isDark);
        setTheme(theme === "dark" ? "light" : "dark");
      }}
      className={`flex h-6 w-12 shrink-0 cursor-pointer items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50  dark:focus-visible:ring-slate-300 dark:focus-visible:ring-offset-slate-950 dark:data-[state=checked]:bg-slate-50 dark:data-[state=unchecked]:bg-slate-800 ${
        isDark ? "bg-primary" : "bg-zinc-200"
      }`}
    >
      <span
        className={`relative left-1 p-[3px] bg-surface rounded-full align-middle transition duration-300 ${
          isDark && "translate-x-[22px]"
        }`}
      >
        {isDark ? (
          <Moon className="size-3 fill-primary" />
        ) : (
          <Sun className="size-3 fill-zinc-500" />
        )}
      </span>
    </button>
  );
}
