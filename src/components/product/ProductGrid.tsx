"use client";

import { useEffect, useState } from "react";
import { Product } from "@/types/product";
import ProductCard from "./ProductCard";
import SearchInput from "../filters/SearchInput";
import CategoryFilter from "../filters/CategoryFilter";
import DarkModeToggle from "../ui/DarkModeToggle";
import { useFavorites } from "@/hooks/useFavorites";

interface Props {
  products: Product[];
}

export default function ProductGrid({ products }: Props) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const { favorites } = useFavorites();
  console.log("Product", products)

  const filtered = products.filter((p) => {
    const matchTitle = p.title.toLowerCase().includes(search.toLowerCase());

    const matchCategory =
      category === "all" ||
      (category === "favorites" && favorites.includes(p.id)) ||
      p.category === category;

    return matchTitle && matchCategory;
  });
  console.log("Filtered", filtered)
  return (
    <>
      <div className="flex flex-col gap-4 mt-6 mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex justify-center md:justify-center flex-wrap gap-2">
            <CategoryFilter
              products={products}
              value={category}
              onChange={setCategory}
            />
          </div>

          <div className="md:ml-auto flex items-center gap-2">
            <div>
              <DarkModeToggle />
            </div>

            <div className="ml-2">
              <SearchInput value={search} onChange={setSearch} />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
