import { Product } from "@/types/product";

const BASE_URL = "https://fakestoreapi.com";

export async function fetchProducts(): Promise<Product[]> {
  try {
    const res = await fetch(`${BASE_URL}/products`, {
      cache: "no-store",
    });
    console.log(res)
    if (!res.ok) {
      console.error(`Failed to fetch products (${res.status})`);
      return []; // Return empty array instead of throwing
    }

    return res.json() as Promise<Product[]>;
  } catch (error) {
    console.error("Error fetching products:", error);
    return []; // Fallback to empty array
  }
}

export async function fetchProductById(id: string): Promise<Product | null> {
  if (!id) {
    console.error("Product ID is required");
    return null;
  }

  try {
    const res = await fetch(`${BASE_URL}/products/${id}`, {
      cache: "no-store",
    });
    console.log(res)
    if (!res.ok) {
      console.error(`Failed to fetch product ${id} (${res.status})`);
      return null;
    }

    return res.json() as Promise<Product>;
  } catch (error) {
    console.error(`Error fetching product ${id}:`, error);
    return null;
  }
}
