import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types/product";
import FavoriteButton from "./FavoriteButton";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="relative z-0">
      <div className="pointer-events-none absolute inset-0 opacity-0 dark:opacity-100 transition-opacity duration-500 z-0">
        <div className="absolute -top-6 -left-6 w-28 h-28 rounded-full blur-3xl bg-gradient-to-br from-purple-500 via-pink-500 to-yellow-400 opacity-60" />
        <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full blur-3xl bg-gradient-to-tr from-indigo-500 via-blue-500 to-cyan-400 opacity-50" />
        <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full blur-3xl bg-gradient-to-bl from-rose-500 via-orange-400 to-yellow-300 opacity-40" />
        <div className="absolute -bottom-6 -right-6 w-28 h-28 rounded-full blur-3xl bg-gradient-to-br from-green-400 via-teal-400 to-cyan-300 opacity-30" />
      </div>

      <div
        className="
          border rounded-xl overflow-hidden
          bg-white dark:bg-gray-800 dark:border-gray-700
          shadow-sm hover:shadow-md
          transform transition-all duration-500 ease-out
          md:hover:scale-[1.03]
          relative z-10
        "
      >
        <div className="relative bg-gray-50 dark:bg-gray-900 p-4 h-56">
          <Link href={`/products/${product.id}`}>
            <Image
              src={product.image}
              alt={product.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-contain"
            />
          </Link>

          <div className="absolute top-3 right-3 z-20">
            <FavoriteButton productId={product.id} />
          </div>
        </div>

        <div className="p-4">
          <h3 className="font-medium text-sm line-clamp-2">{product.title}</h3>

          <p className="text-xs text-gray-500 dark:text-gray-300 mt-1 capitalize">
            {product.category}
          </p>

          <p className="mt-2 font-semibold text-black dark:text-white">
            ${product.price}
          </p>
        </div>
      </div>
    </div>
  );
}
