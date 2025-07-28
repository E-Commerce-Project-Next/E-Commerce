import React from "react";
import CategoryCard from "../components/CategoryCard";

export default function CategorySection() {

  const categories = [
    {
      altText: "Electronics",
      nameCategory: "Electronics",
      span:"row-span-2"
    },
    {
      altText: "Fashion",
      nameCategory: "Fashion",
    },
    {
      altText: "Home & Living",
      nameCategory: "Home & Living",
    },
  
    {
      altText: "Sports",
      nameCategory: "Sports",
      span:"row-span-2"
    }
  ];

  return (

    <section id="categories" className="flex flex-col items-center gap-5 p-10 scroll-mt-30">
      <h2 className="text-4xl font-bold">View Our Range Of Categories</h2>
      <p className=" text-gray-600 text-l max-w-2xl text-center">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.
      
      </p>
      <div className="grid grid-rows-[repeat(2,minmax(300px,1fr))] gap-10 grid-flow-col mt-10">
        {categories.map((category, idx) => (
          <CategoryCard
            key={idx}
            altText={category.altText}
            nameCategory={category.nameCategory}
            span={category.span || ""}
          />
        ))}        
      </div>
    </section>
  );
}
