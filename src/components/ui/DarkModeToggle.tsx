"use client";

import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("light");

  useEffect(() => {
    const stored = localStorage?.getItem("theme") as "dark" | "light" | null;
    if (stored) {
      setTheme(stored);
      document.documentElement.classList.toggle("dark", stored === "dark");
      return;
    }
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(prefersDark ? "dark" : "light");
    document.documentElement.classList.toggle("dark", prefersDark);
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.classList.toggle("dark", next === "dark");
  }

  return (
    <button
      onClick={toggle}
      aria-pressed={theme === "dark"}
      aria-label="Toggle dark mode"
      className="inline-flex items-center gap-2 px-3 py-1 rounded-md border bg-white dark:bg-gray-800 text-sm text-gray-700 dark:text-gray-200 shadow-sm hover:opacity-90 transition cursor-pointer"
    >
      {theme === "dark" ? (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        </svg>
      ) : (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M6.76 4.84l-1.8-1.79L3.5 5.5l1.79 1.79 1.47-2.45zM1 13h3v-2H1v2zm10 9h2v-3h-2v3zM20.5 5.5l-1.46-1.46-1.79 1.79 1.46 1.46L20.5 5.5zM17 13h3v-2h-3v2z" />
        </svg>
      )}

      <span className="hidden sm:inline">{theme === "dark" ? "Dark" : "Light"}</span>
    </button>
  );
}
