"use client";

import { useEffect } from "react";

export default function ProductError({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error("ProductError:", error);
  }, [error]);

  return (
    <div className="p-6 max-w-3xl mx-auto text-center">
      <h2 className="text-xl font-semibold text-red-600">Could not load product</h2>
      <p className="text-gray-500 mt-2">{error?.message ?? "Unknown error"}</p>

      <div className="mt-6 flex justify-center gap-3">
        <button
          onClick={() => reset()}
          className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
