import { FC } from "react";
// import { Category } from "@/app/common/types/Category";
import Image from "next/image";
import Link from "next/link";

type Category = {
  id: number;
  name: string;
  image: string;
};

const CategoryCard: FC<Category> = ({ id, name, image }) => {
  return (
    <div className="p-4 bg bg-purple-400 rounded-2xl max-w-64 min-h-100 flex flex-col gap-4 items-center justify-center hover:shadow-lg hover:scale-105 transition-transform duration-200">
      <h3 className="text-lg font-medium text-center">
        <Link href={`/categories/${id}`}>{name}</Link>
      </h3>
      <Image
        src={image}
        alt={name}
        width={300}
        height={200}
        className="rounded-xl object-cover"
        unoptimized
      />
    </div>
  );
};

export default CategoryCard;