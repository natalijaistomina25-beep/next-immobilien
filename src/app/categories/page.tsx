import Link from "next/link";
// import CategoryCard from "@/app/components/CategoryCard"; 
import { FC } from "react";
import CategoryCard from "../components/category-card";

type Category = {
  id: number;
  name: string;
  image: string;
};

async function getCategories(): Promise<Category[]> {
  const res = await fetch("https://api.escuelajs.co/api/v1/categories");
  return res.json();
}

export default async function CategoriesPage() {
  const categories = await getCategories();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Categories</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <CategoryCard key={cat.id} id={cat.id} name={cat.name} image={cat.image} />
        ))}
      </div>
    </div>
  );
}
