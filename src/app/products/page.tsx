"use client";
import { useEffect } from 'react';
import { getProducts } from "@/features/products/services/ProductService";
import { useProductStore } from "@/features/products/stores/useProductStore";
import ProductsSection from "@/features/products/sections/ProductsSection";
import CategoryDropdown from "@/features/categories/components/CategoryDropdown";
import CategorySliderPrice from "@/features/categories/components/CategorySliderPrice";
import GridProducts from "@/features/products/components/GridProducts";
import ProductCard from "@/features/products/components/ProductCard";
import PaginationProduct from "@/features/products/components/PaginationProducts";
import PaginationTop from "@/features/products/components/PaginationTop";
import SearchInput from "@/features/commons/components/SearchInput";
import Button from "@/features/commons/components/Button";

export default function ProductsPage() {
  const { products, setProducts } = useProductStore();

  useEffect(() => {
    if (products.length === 0) {
      getProducts().then(setProducts);
      console.log("Products fetched and stored in Zustand store.");
    } else {
      console.log("Using cached products from Zustand store.");
    }
  }, [products, setProducts]);

  const productsQuantity = products.length;

  return (
    <main className="py-30 min-h-[calc(100vh-128px)] flex px-8">
      <ProductsSection>
        <CategoryDropdown />
        <CategorySliderPrice />
        <SearchInput />
        <PaginationProduct>
          <div className="flex items-center w-full">
            <PaginationTop range={[0, 4]} total={productsQuantity} />
          </div>
          <p className="w-full text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
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
              id={product.id}
            />
          ))}
        </GridProducts>
        <PaginationProduct>
          <PaginationTop range={[0, 4]} total={productsQuantity} />
          <Button>Load More</Button>
        </PaginationProduct>
      </ProductsSection>
    </main>
  );
}
