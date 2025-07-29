import SectionIntro from "@/features/commons/components/sections/SectionIntro";
import GridProducts from "@/features/products/components/GridProducts";
import React from "react";

export default function PopularProductsSection({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <section
      id="popular-products"
      className="flex flex-col justify-center gap-9 w-full scroll-mt-30"
    >
      <SectionIntro
        title="Most Popular Products"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat. Nunc auctor consectetur elit, quis pulvinar."
        buttonText="View All"
        buttonLink="/products"
      />
      <GridProducts>
        {children}
      </GridProducts>
        
      
    </section>
  );
}
