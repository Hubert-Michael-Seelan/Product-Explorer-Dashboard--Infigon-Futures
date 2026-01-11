// src/app/products/[id]/page.tsx
import Image from "next/image";
import { notFound } from "next/navigation";
import { fetchProductById } from "@/lib/api";
import FavoriteButton from "@/components/product/FavoriteButton";
import Link from "next/link";

export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{ id?: string }>;
};

export default async function ProductPage({ params }: Props) {
  const { id } = await params;

  // 1) Validate early
  if (!id) {
    console.error("Server: Product ID is required (missing route param)");
    return notFound();
  }

  // 2) Fetch safely
  let product;
  try {
    product = await fetchProductById(id);
  } catch (err: any) {
    console.error("Server: error fetching product", err?.message ?? err);
    return notFound();
  }

  if (!product) {
    return notFound();
  }

  return (
    <div className="p-6 max-w-3xl mx-auto relative">
      <Link
        href="/"
        className="absolute top-6 left-6 flex items-center gap-1 text-sm font-medium text-gray-600 hover:bg-gray-100 px-2 py-1 rounded"
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

      <div className="relative h-80 w-full mt-6">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 768px"
          priority
          loading="eager"
        />
      </div>

      <h1 className="text-2xl font-bold mt-4">{product.title}</h1>
      <p className="text-gray-600 mt-2">{product.description}</p>
      <p className="mt-4 font-bold">${product.price}</p>
      <p className="text-sm text-gray-500 capitalize">{product.category}</p>

      <div className="mt-4">
        <FavoriteButton productId={product.id} />
      </div>
    </div>
  );
}
