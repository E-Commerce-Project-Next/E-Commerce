import React from "react";
import GridProducts from "@/features/products/components/GridProducts";

export default function FeaturedProductsSection({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section
      id="featured-products"
      className="flex flex-col justify-center gap-9 w-full scroll-mt-30"
    >
      <div className="flex justify-between w-full gap-8">
        <h1 className="text-4xl font-bold text-black/80">Featured Products</h1>
        <p className="text-lg text-black/70 max-w-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          fringilla nunc in molestie feugiat. Nunc auctor consectetur elit, quis
          pulvina.
        </p>
      </div>
      <GridProducts>
        {children}
      </GridProducts>
    </section>
  );
}
