import React from "react";
import ProductCard from "@/components/products/ProductCard";
import { Product } from "@/types/productType";
import NotFoundProducts from "@/components/products/NotFoundProducts";

interface FeaturedProductsSectionProps {
  featuredProducts: Product[];
}

export default function FeaturedProductsSection({
  featuredProducts,
}: FeaturedProductsSectionProps) {
  const hasFeaturedProducts = featuredProducts?.length > 0 && featuredProducts;

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
        {hasFeaturedProducts ? (
          <div className="flex w-full lg:justify-between justify-center gap-4 flex-wrap">
            {featuredProducts.map((product) => (
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
        ) : (
          <NotFoundProducts />
        )}
    </section>
  );
}
