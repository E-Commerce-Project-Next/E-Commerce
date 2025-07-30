"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getProductById as fetchProductById } from "@/features/products/services/ProductService";
import { useProductStore } from "@/features/products/stores/useProductStore";
import type { Product } from "@/features/products/types/productType";
import ProductDetail from "@/features/products/components/ProductDetail";
import DetailSection from "@/features/products/sections/DetailSection";
import ImageCollage from "@/features/products/components/ImageCollage";

const MotionImage = motion(Image);

export default function ProductsDetail() {
  const params = useParams();
  const id = params?.id as string;
  const { getProductById } = useProductStore();
  const cachedProduct = getProductById(id);
  const [product, setProduct] = useState<Product | undefined>(cachedProduct);
  
  useEffect(() => {
    if (!cachedProduct && id) {
      fetchProductById(id)
        .then(setProduct)
        .catch((err) => console.error("Error fetching product:", err));
    }
  }, [id, cachedProduct]);

  const layoutId = {
    id: `image-${id}`,
    productId: `product-${id}`,
  };
  const imageUrl = product ? product?.images[0]?.url : "/no_image.jpg";
  const productName = product ? product?.name : "Product name";
  const fakeArray = Array(3).fill(null);
  const [bigImage, setBigImage] = useState<string>(imageUrl);

  const handleImageClick = (url: string) => {
    setBigImage(url);
  };

  return (
    <main className="py-25 min-h-[calc(100vh-128px)] flex px-8 justify-center items-center">
      <DetailSection>
        <ImageCollage>
          {fakeArray.map((_, index) => (
            <div className="flex-1 flex justify-center" key={index}>
              <MotionImage
                src={imageUrl}
                alt={productName}
                width={450}
                height={450}
                className="rounded-xl object-cover hover:scale-105 hover:cursor-pointer transition-transform duration-300"
                onClick={() => handleImageClick(imageUrl)}
              />
            </div>
          ))}
          <MotionImage
            src={bigImage}
            alt="Expanded Image"
            width={500}
            height={900}
            layoutId={layoutId.id}
            className="rounded-xl object-cover h-full w-3/4"
          />
        </ImageCollage>
        <ProductDetail product={product}>
          <motion.h2
            layoutId={layoutId.productId}
            className="font-semibold text-2xl"
          >
            {productName}
          </motion.h2>
        </ProductDetail>
      </DetailSection>
    </main>
  );
}
