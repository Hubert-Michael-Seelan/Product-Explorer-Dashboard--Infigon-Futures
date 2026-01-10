import Spinner from "@/components/ui/Spinner";

export default function ProductLoading() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <div className="flex items-center gap-3 mb-4">
        <Spinner size={8} />
        <h2 className="text-lg font-medium">Loading product…</h2>
      </div>

      <div className="border rounded-lg p-6 animate-pulse">
        <div className="bg-gray-200 h-80 rounded-md mb-4" />
        <div className="h-6 bg-gray-200 rounded w-3/4 mb-3" />
        <div className="h-4 bg-gray-200 rounded w-full mb-2" />
        <div className="h-4 bg-gray-200 rounded w-full mb-2" />
        <div className="h-5 bg-gray-200 rounded w-1/3 mt-4" />
      </div>
    </div>
  );
}
