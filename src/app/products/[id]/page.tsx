export const dynamic = "force-dynamic";
import Image from "next/image";
import Link from "next/link";
import { fetchProductById } from "@/lib/api";
import { notFound } from "next/navigation";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  if (!id) {
    notFound();
  }

  const product = await fetchProductById(id);

  return (
    <div className="p-6 max-w-3xl mx-auto relative">
      <Link
        href="/"
        className="absolute top-6 left-6 flex items-center gap-1 text-sm font-medium text-gray-600 hover:bg-gray-100 px-2 py-1 rounded
        "
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back
      </Link>

      {/* Image */}
      <div className="relative h-80 w-full mt-6">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 768px"
          priority
        />
      </div>

      {/* Content */}
      <h1 className="text-2xl font-bold mt-6">{product.title}</h1>

      <p className="text-gray-600 mt-3 leading-relaxed">
        {product.description}
      </p>

      <div className="mt-6 flex items-center justify-between">
        <p className="text-xl font-semibold">${product.price}</p>
        <p className="text-sm text-gray-500 capitalize">{product.category}</p>
      </div>
    </div>
  );
}
