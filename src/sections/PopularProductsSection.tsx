import React from 'react'
import SectionIntro from "@/components/SectionIntro";
import ProductCard from "@/components/ProductCard";

export default function PopularProductsSection() {
  const popularProducts = [
    { title: "Popular Product 1", price: 120, discount: 15 },
    { title: "Popular Product 2", price: 150, discount: 20 },
    { title: "Popular Product 3", price: 200, discount: 25 },
    { title: "Popular Product 4", price: 180, discount: 30 },
    { title: "Popular Product 5", price: 220, discount: 10 },
    { title: "Popular Product 6", price: 170, discount: 5 },
    { title: "Popular Product 7", price: 130, discount: 15 },
    { title: "Popular Product 8", price: 160, discount: 20 },
  ];
  return (
    <section className="flex flex-col my-50 mx-auto justify-between gap-9 w-full px-48">
      <SectionIntro
        title="Most Popular Products"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat. Nunc auctor consectetur elit, quis pulvina."
        buttonText="View All"
      />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] justify-center justify-items-center gap-y-5 gap-x-25">
        {popularProducts.map((product) => (
          <ProductCard
            key={product.title}
            title={product.title}
            price={product.price}
            discount={product.discount}
          />
        ))}
      </div>
    </section>
  )
}
