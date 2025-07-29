import ProductsSection from "@/features/products/sections/ProductsSection";
import CategorySliderPrice from "@/features/categories/components/CategorySliderPrice";
import CategoryDropdown from "@/features/categories/components/CategoryDropdown";
import GridProducts from "@/features/products/components/GridProducts";
import { getProducts } from "@/features/products/services/ProductService";
import ProductCard from "@/features/products/components/ProductCard";
import type { Product } from "@/features/products/types/productType";
import SearchInput from "@/features/commons/components/SearchInput";
import PaginationProduct from "@/features/products/components/PaginationProducts";
import Button from "@/features/commons/components/Button";
import PaginationTop from "@/features/products/components/PaginationTop";

export default async function Page() {
  const products: Product[] = await getProducts();

  return (
    <main className="py-30 min-h-[calc(100vh-128px)] flex px-8">
      <ProductsSection>
        <CategoryDropdown />
        <CategorySliderPrice />
        <SearchInput />
        <PaginationProduct>
          <div className="flex items-center w-full">
            <PaginationTop range={[0,4]} total={products.length} />
          </div>
          <p className="w-full text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </PaginationProduct>
        <GridProducts>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.name}
              price={product.price}
              discount={product.discountValue}
              imageUrl={product.images[0]?.url}
              altText={product.images[0]?.altText || "Product Image"}
            />
          ))}
        </GridProducts>
        <PaginationProduct>
          <PaginationTop range={[0,4]} total={products.length} />
          <Button>
            Load More
          </Button>
        </PaginationProduct>
      </ProductsSection>
    </main>
  );
}
