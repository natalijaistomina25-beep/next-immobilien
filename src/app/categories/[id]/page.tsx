import Link from "next/link";
import { FC } from "react";

type Category = { id: number; name: string; image: string };
type Product = { id: number; title: string; price: number; images: string[] };

async function getCategory(id: string): Promise<Category> {
  const res = await fetch(`https://api.escuelajs.co/api/v1/categories/${id}`);
  return res.json();
}

async function getCategoryProducts(id: string): Promise<Product[]> {
  const res = await fetch(
    `https://api.escuelajs.co/api/v1/categories/${id}/products`,
  );
  const data = await res.json();

  return Array.isArray(data) ? data : [];
}

export default async function CategoryPage({
  params,
}: {
  params: { id: string };
}) {
  const category = await getCategory(params.id);
  const products = await getCategoryProducts(params.id);

  return (
    <div className="p-6">
      <Link
        href="/categories"
        className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Back to Categories
      </Link>
      <h1 className="text-3xl font-bold mb-6 text-center">{category.name}</h1>
      <img
        src={category.image}
        alt={category.name}
        className="w-96 rounded-lg shadow-lg mb-6 mx-auto"
      />

      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg overflow-hidden p-2 hover:shadow-lg hover:scale-105 transition-transform duration-200"
            >
              <img
                src={product.images[0]}
                alt={product.title}
                className="h-32 w-full object-cover rounded"
              />
              <p className="mt-2 font-medium text-center">{product.title}</p>
              <p className="text-center text-gray-700">${product.price}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">
          No products in this category yet.
        </p>
      )}
    </div>
  );
}
