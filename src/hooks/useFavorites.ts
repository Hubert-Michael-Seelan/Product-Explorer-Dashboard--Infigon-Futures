// src/hooks/useFavorites.ts
"use client";

import { useEffect, useState } from "react";

const KEY = "favorites";

export function useFavorites() {
  const [favorites, setFavorites] = useState<number[]>(() => {
    if (typeof window === "undefined") return [];
    try {
      return JSON.parse(localStorage?.getItem(KEY) || "[]");
    } catch {
      return [];
    }
  });

  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === KEY) {
        try {
          setFavorites(JSON.parse(e.newValue || "[]"));
        } catch {
          setFavorites([]);
        }
      }
    };

    const onCustom = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (Array.isArray(detail)) {
        setFavorites(detail as number[]);
      } else {
        try {
          setFavorites(JSON.parse(localStorage?.getItem(KEY) || "[]"));
        } catch {
          setFavorites([]);
        }
      }
    };

    window.addEventListener("storage", onStorage);
    window.addEventListener("favorites-changed", onCustom as EventListener);

    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("favorites-changed", onCustom as EventListener);
    };
  }, []);

  function toggle(id: number) {
    let current: number[] = [];
    try {
      current = JSON.parse(localStorage?.getItem(KEY) || "[]");
    } catch {
      current = [];
    }

    const updated = current.includes(id) ? current.filter((x) => x !== id) : [...current, id];

    try {
      localStorage.setItem(KEY, JSON.stringify(updated));
    } catch {
      console.error("error in setting local storage");
    }

    setFavorites(updated);

    window.dispatchEvent(new CustomEvent("favorites-changed", { detail: updated }));
  }

  function isFavorite(id: number) {
    return favorites.includes(id);
  }

  return { favorites, toggle, isFavorite };
}
