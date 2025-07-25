import React from 'react'
import SectionIntro from "@/components/SectionIntro";
import ProductCard from "@/components/ProductCard";
import {Product} from "@/types/productType";

interface PopularProductsSectionProps {
  popularProducts: Product[];
}

export default function PopularProductsSection({ popularProducts }: PopularProductsSectionProps) {
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
            key={product.id}
            title={product.name}
            price={product.price}
            discount={product.discountValue}
            imageUrl={product.images[0]?.url}
            altText={product.images[0]?.altText || "Product Image"}
          />
        ))}
      </div>
    </section>
  )
}
