"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getProductById as fetchProductById } from "@/features/products/services/ProductService";
import { useProductStore } from "@/features/products/stores/useProductStore";
import type { Product } from "@/features/products/types/productType";
import ProductDetail from "@/features/products/components/ProductDetail";
import DetailSection from "@/features/products/sections/DetailSection";
import ImageCollage from "@/features/products/components/ImageCollage";
import BreadCrumb from "@/features/commons/components/BreadCrumb";

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

  const images = product?.images?.map((img) => img.url) ?? ["/no_image.jpg"];
  const smallImages = images.slice(1, 4);

  while (smallImages.length < 3) smallImages.push("/notfound.png");

  const [bigImage, setBigImage] = useState<string>(images[0]);
  const [thumbnails, setThumbnails] = useState<string[]>(smallImages);

  useEffect(() => {
    if (product) {
      const imgs = product.images.map((img) => img.url);
      setBigImage(imgs[0]);
      const thumbs = imgs.slice(1, 4);
      while (thumbs.length < 3) thumbs.push("/notfound.png");
      setThumbnails(thumbs);
    }
  }, [product]);

  const handleImageClick = (index: number) => {
    const newThumbnails = [...thumbnails];
    const clickedImage = newThumbnails[index];

    setBigImage("");

    setTimeout(() => {
      newThumbnails[index] = bigImage;
      setBigImage(clickedImage);
      setThumbnails(newThumbnails);
    }, 200);
  };

  const imageVariants = {
    initial: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } },
    enter: { opacity: 1, scale: 1, transition: { duration: 0.2 } },
  };

  const productName = product?.name ?? "Product name";

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: productName },
  ];

  return (
    <main className="py-20 min-h-[calc(100vh-128px)] flex flex-col px-8 items-center justify-center">
      <BreadCrumb items={breadcrumbItems}/>
      <DetailSection>
        <ImageCollage>
          {thumbnails.map((thumb, index) => (
            <div className="flex-1 flex justify-center" key={index}>
              <MotionImage
                src={thumb}
                alt={productName}
                width={450}
                height={450}
                className="rounded-xl object-cover hover:scale-105 hover:cursor-pointer transition-transform duration-300"
                onClick={() => handleImageClick(index)}
              />
            </div>
          ))}
          <AnimatePresence mode="wait">
            {bigImage && (
              <MotionImage
                key={bigImage}
                src={bigImage}
                alt="Expanded Image"
                width={500}
                height={900}
                layoutId={layoutId.id}
                className="rounded-xl object-cover h-full w-3/4"
                initial="exit"
                animate="enter"
                exit="exit"
                variants={imageVariants}
              />
            )}
          </AnimatePresence>
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
