"use client";

import { Product } from "@/types/product";
import { useFavorites } from "@/hooks/useFavorites";
import { useEffect, useState } from "react";

interface Props {
  products: Product[];
  value: string;
  onChange: (category: string) => void;
}

export default function CategoryFilter({ products, value, onChange }: Props) {
  const categories = Array.from(new Set(products.map((p) => p.category)));
  const { favorites } = useFavorites();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const hasFavorites = mounted && favorites.length > 0;

  return (
    <div className="flex flex-wrap gap-2">

      <button
        onClick={() => onChange("all")}
        className={`px-4 py-1 rounded-full border text-sm font-medium capitalize transition cursor-pointer
          ${
            value === "all"
              ? "bg-black text-white"
              : "bg-white text-gray-700 hover:bg-gray-100"
          }`}
      >
        All
      </button>

      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`px-4 py-1 rounded-full border text-sm font-medium capitalize transition cursor-pointer
            ${
              value === cat
                ? "bg-black text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
        >
          {cat}
        </button>
      ))}
      
      {hasFavorites && (
        <button
          onClick={() => onChange("favorites")}
          className={`px-4 py-1 rounded-full border text-sm font-medium transition cursor-pointer flex items-center gap-1
            ${
              value === "favorites"
                ? "bg-red-500 text-white border-red-500"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
        >
          ❤️ Favorites
        </button>
      )}
    </div>
  );
}
