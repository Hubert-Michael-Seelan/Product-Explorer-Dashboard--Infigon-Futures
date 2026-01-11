import { Product } from "@/types/product";

const BASE_URL = "https://fakestoreapi.com";

export async function fetchProducts(): Promise<Product[]> {
  const res = await fetch(`${BASE_URL}/products`, {
    cache: "no-store", // always fetch fresh data
  });

  if (!res.ok) {
    // Fail loudly so production errors are visible
    throw new Error(
      `fetchProducts failed: ${res.status} ${res.statusText}`
    );
  }

  const data = (await res.json()) as Product[];

  // Extra safety check
  if (!Array.isArray(data)) {
    throw new Error("fetchProducts: invalid API response");
  }

  return data;
}

export async function fetchProductById(id: string): Promise<Product> {
  if (!id) {
    throw new Error("fetchProductById: Product ID is required");
  }

  const res = await fetch(`${BASE_URL}/products/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(
      `fetchProductById(${id}) failed: ${res.status} ${res.statusText}`
    );
  }

  const product = (await res.json()) as Product;

  // Defensive validation
  if (!product || typeof product !== "object") {
    throw new Error(`fetchProductById(${id}): invalid API response`);
  }

  return product;
}
