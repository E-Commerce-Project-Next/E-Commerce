import HeroSection from "@/sections/HeroSection";
import ProductCard from "@/components/ProductCard";
import FeaturedProductsSection from "@/sections/FeaturedProductsSection";
import LatestOngoingsSection from "@/sections/LatestOngoingsSection";
import PopularProductsSection from "@/sections/PopularProductsSection";
import ValuePropositionSection from "@/sections/ValuePropositionSection";
import FaqSection from "@/sections/FaqSection";

export default function Home() {
  return (
    <>
      <HeroSection/> 
      <ProductCard
        title="Sample Product"
        price={100}
        discount={10}
      />
      <br />
      <br />
      <br />
      <PopularProductsSection/>
      <br />
      <br />
      <br />
      <FeaturedProductsSection/>
      <br/>
      <br />
      <br/>
      <ValuePropositionSection/>
      <br/>
      <br/>
      <br/>
      <LatestOngoingsSection/>
      <br/>
      <br/>
      <br/>
      <FaqSection/>
    </>
  );
}
