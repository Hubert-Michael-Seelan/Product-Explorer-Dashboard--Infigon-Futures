"use client";

import { useEffect } from "react";

export default function RootError({ error, reset }: { error: Error; reset: () => void; }) {
  useEffect(() => {
    console.error("RootError:", error);
  }, [error]);

  return (
    <main className="p-6">
      <div className="max-w-xl mx-auto text-center">
        <h1 className="text-2xl font-semibold text-red-600">Something went wrong</h1>
        <p className="text-gray-600 mt-3">{error?.message || "Unknown error"}</p>

        <div className="mt-6 flex justify-center gap-3">
          <button
            onClick={() => reset()}
            className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
          >
            Try again
          </button>
        </div>
      </div>
    </main>
  );
}
