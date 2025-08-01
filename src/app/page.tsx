import HeroSection from "@/features/commons/sections/HeroSection";
import FeaturedProductsSection from "@/features/products/sections/FeaturedProductsSection";
import LatestOngoingsSection from "@/features/blogs/sections/LatestOngoingsSection";
import PopularProductsSection from "@/features/products/sections/PopularProductsSection";
import ValuePropositionSection from "@/features/commons/sections/ValuePropositionSection";
import FaqSection from "@/features/faqs/sections/FaqSection";
import { getProducts } from "@/features/products/services/ProductService";
import CategorySection from "@/features/categories/sections/CategorySection";
import ProductCard from "@/features/products/components/ProductCard";
import NotFoundProducts from "@/features/products/components/NotFoundProducts";
import type { Product } from "@/features/products/types/productType";

export default async function Home() {
  const popularProducts = (
    await getProducts({
      sortBy: "salesCount",
      limit: 4,
    })
  ).slice(0, 8);

  const featuredProducts = (await getProducts()).slice(0, 4);

  const hasPopularProducts: boolean = popularProducts.length > 0;
  const hasFeaturedProducts: boolean = popularProducts.length > 0;

  return (
    <main className="flex flex-col gap-40 px-40 mb-30">
      <HeroSection />

      <PopularProductsSection>
        {hasPopularProducts ? (
          popularProducts.map((product: Product) => (
            <ProductCard
              key={product.id}
              title={product.name}
              price={product.price}
              discount={product.discountValue}
              imageUrl={product.images[0]?.url}
              altText={product.images[0]?.altText || "Product Image"}
              id={product.id}
              isHome={true}
            />
          ))
        ) : (
          <NotFoundProducts />
        )}
      </PopularProductsSection>

      <FeaturedProductsSection>
        {hasFeaturedProducts ? (
            featuredProducts.map((product: Product) => (
              <ProductCard
                key={product.id}
                title={product.name}
                price={product.price}
                discount={product.discountValue}
                imageUrl={product.images[0]?.url}
                altText={product.images[0]?.altText || "Product Image"}
                id={product.id}
                isHome={true}
              />
            ))
        ) : (
          <NotFoundProducts />
        )}
      </FeaturedProductsSection>

      <CategorySection />

      <ValuePropositionSection />

      <LatestOngoingsSection array={[]} />

      <FaqSection />
    </main>
  );
}
