import React from "react";
import ProductCard from "@/components/ProductCard";

export default function FeaturedProductsSection() {
  return (
    <section className="flex flex-col my-50 mx-auto items-center justify-between gap-9 w-full px-48">
      <div className="flex justify-between w-full gap-8">
        <h1 className="text-4xl font-bold text-black/80">Featured Products</h1>
        <p className="text-lg text-black/70 max-w-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          fringilla nunc in molestie feugiat. Nunc auctor consectetur elit, quis
          pulvina.
        </p>
      </div>
      <div className="flex w-full lg:justify-between justify-center gap-4 flex-wrap">
        <ProductCard title="Sample Product" price={100} discount={10} />
        <ProductCard title="Sample Product" price={100} discount={10} />
        <ProductCard title="Sample Product" price={100} discount={10} />
        <ProductCard title="Sample Product" price={100} discount={10} />
      </div>
    </section>
  );
}
