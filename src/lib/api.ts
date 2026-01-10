// src/lib/api.ts
import { Product } from "@/types/product";

const BASE_URL = "https://fakestoreapi.com";

export async function fetchProducts(): Promise<Product[]> {
  const res = await fetch(`${BASE_URL}/products`, { cache: "no-store" });
  const text = await res.text().catch(() => "");
  if (!res.ok) {
    throw new Error(`Failed to fetch products: ${res.status} ${res.statusText} - ${text || "no body"}`);
  }
  if (!text) {
    throw new Error("Empty response when fetching products");
  }
  try {
    return JSON.parse(text) as Product[];
  } catch (err) {
    throw new Error(`Invalid JSON when fetching products: ${String(err)} - ${text.slice(0, 200)}`);
  }
}

export async function fetchProductById(id: string): Promise<Product> {
  const res = await fetch(`${BASE_URL}/products/${id}`, { cache: "no-store" });
  const text = await res.text().catch(() => "");
  if (!res.ok) {
    throw new Error(`Failed to fetch product ${id}: ${res.status} ${res.statusText} - ${text || "no body"}`);
  }
  if (!text) {
    throw new Error(`Empty response when fetching product ${id}`);
  }
  try {
    return JSON.parse(text) as Product;
  } catch (err) {
    throw new Error(`Invalid JSON for product ${id}: ${String(err)} - ${text.slice(0, 200)}`);
  }
}
