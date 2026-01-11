"use client";

import { useFavorites } from "@/hooks/useFavorites";
import { useEffect, useState } from "react";

export default function FavoriteButton({ productId }: { productId: number }) {
  const { isFavorite, toggle } = useFavorites();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const fav = mounted ? isFavorite(productId) : false;

  return (
    <button
      onClick={() => toggle(productId)}
      aria-label="Toggle favorite"
      className="p-1 rounded-full bg-white shadow cursor-pointer"
    >
      <svg
        className={`w-5 h-5 transition ${
          fav ? "fill-red-500 stroke-red-500" : "fill-white stroke-gray-400"
        }`}
        viewBox="0 0 24 24"
        strokeWidth="2"
      >
        <path d="M12 21s-6.716-4.686-9.364-7.333C.988 11.02 1.19 6.92 4.3 5.3c2.02-1.06 4.44-.37 5.7 1.33 1.26-1.7 3.68-2.39 5.7-1.33 3.11 1.62 3.31 5.72 1.66 8.37C18.716 16.314 12 21 12 21z" />
      </svg>
    </button>
  );
}
