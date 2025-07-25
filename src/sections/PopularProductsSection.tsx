import React from "react";
import SectionIntro from "@/components/sections/SectionIntro";
import ProductCard from "@/components/products/ProductCard";
import { Product } from "@/types/productType";
import NotFoundProducts from "@/components/products/NotFoundProducts";

interface PopularProductsSectionProps {
  popularProducts: Product[];
}

export default function PopularProductsSection({
  popularProducts,
}: PopularProductsSectionProps) {
  const hasPopularProducts = popularProducts?.length > 0 && popularProducts;

  return (
    <section className="flex flex-col p-30 py-40 justify-between gap-9 w-full px-48">
      <SectionIntro
        title="Most Popular Products"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat. Nunc auctor consectetur elit, quis pulvina."
        buttonText="View All"
      />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] justify-center justify-items-center gap-y-5 gap-x-25">
        {hasPopularProducts ? (
          popularProducts.map((product) => (
            <ProductCard
              key={product.id}
              title={product.name}
              price={product.price}
              discount={product.discountValue}
              imageUrl={product.images[0]?.url}
              altText={product.images[0]?.altText || "Product Image"}
            />
          ))
        ) : (
          <NotFoundProducts />
        )}
      </div>
    </section>
  );
}
