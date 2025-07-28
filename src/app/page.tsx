import HeroSection from "@/features/commons/sections/HeroSection";
import FeaturedProductsSection from "@/features/products/sections/FeaturedProductsSection";
import LatestOngoingsSection from "@/features/blogs/sections/LatestOngoingsSection";
import PopularProductsSection from "@/features/products/sections/PopularProductsSection";
import ValuePropositionSection from "@/features/commons/sections/ValuePropositionSection";
import FaqSection from "@/features/faqs/sections/FaqSection";
import { getProducts } from "@/features/products/services/ProductService";
import CategorySection from "@/features/categories/sections/CategorySection";

export default async function Home() {
  const popularProducts = (await getProducts({
    sortBy: 'salesCount',
    limit: 4,
  })).slice(0, 8);

  const featuredProducts = (await getProducts()).slice(0, 4);

  return (
    <main className="flex flex-col gap-40 px-40 mb-30">
      <HeroSection /> 

      <PopularProductsSection popularProducts={popularProducts} />
 
      <FeaturedProductsSection featuredProducts={featuredProducts}/>

      <CategorySection/>
 
      <ValuePropositionSection />

      <LatestOngoingsSection array={[]}/>
 
      <FaqSection />

    </main>
  );
}
