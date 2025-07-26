import HeroSection from "@/sections/HeroSection";
import FeaturedProductsSection from "@/sections/FeaturedProductsSection";
import LatestOngoingsSection from "@/sections/LatestOngoingsSection";
import PopularProductsSection from "@/sections/PopularProductsSection";
import ValuePropositionSection from "@/sections/ValuePropositionSection";
import FaqSection from "@/sections/FaqSection";
import { getPopularProducts } from "@/services/ProductService";

export default async function Home() {
  const popularProducts = await getPopularProducts();

  return (
    <>
      <HeroSection />
      <br />
      <br />
      <br />
      <PopularProductsSection popularProducts={popularProducts} />
      <br />
      <br />
      <br />
      <FeaturedProductsSection featuredProducts={[]}/>
      <br />
      <br />
      <br />
      <ValuePropositionSection />
      <br />
      <br />
      <br />
      <LatestOngoingsSection array={[]}/>
      <br />
      <br />
      <br />
      <FaqSection />
      <br />
      <br />
      <br />
    </>
  );
}
