import { Product } from "@/types/product";

const BASE_URL = "https://fakestoreapi.com";

export async function fetchProducts(): Promise<Product[]> {
  const res = await fetch(`${BASE_URL}/products`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch products (${res.status})`);
  }

  return res.json() as Promise<Product[]>;
}

export async function fetchProductById(id: string): Promise<Product> {
  if (!id) {
    throw new Error("Product ID is required");
  }

  const res = await fetch(`${BASE_URL}/products/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch product ${id} (${res.status})`);
  }

  return res.json() as Promise<Product>;
}
