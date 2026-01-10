import ProductSkeleton from "@/components/product/ProductSkeleton";
import Spinner from "@/components/ui/Spinner";

export default function RootLoading() {
  return (
    <main className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <Spinner />
        <h2 className="text-lg font-medium">Loading products…</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <ProductSkeleton key={i} />
        ))}
      </div>
    </main>
  );
}
