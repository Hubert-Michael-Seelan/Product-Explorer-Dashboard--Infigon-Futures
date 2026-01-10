import { fetchProducts } from "@/lib/api";
import ProductGrid from "@/components/product/ProductGrid";

export default async function HomePage() {
  const products = await fetchProducts();

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Product Explorer</h1>
      <ProductGrid products={products} />
    </main>
  );
}
