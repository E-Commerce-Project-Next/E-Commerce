'use client';

import React from "react";
import Image from "next/image";
import { motion } from 'framer-motion';
import Link from 'next/link';

type ProductCardProps = {
  discount: number;
  price: number;
  title: string;
  imageUrl?: string; 
  altText?: string; // Optional alt text for the image
  id?: string;
  isHome?: boolean;
};

const MotionImage = motion(Image);

export default function ProductCard({
  discount,
  price,
  title,
  imageUrl,
  altText = "Product Image", // Default alt text if not provided
  id,
  isHome
}: ProductCardProps) {
  const newPrice: number = discount!=0 ? parseFloat((price * (1 - (discount / 100))).toFixed(2)) : parseFloat(price.toFixed(2));
  const discountPercentage: number = parseFloat(discount.toFixed(1));
  const imageSrc = imageUrl || "/no_image.jpg";
  const discountBoolean = discount!=0 ? true : false;
  const layoutId = {
    id: `image-${id}`,
    productId: `product-${id}`
  }

  return (
    <article className="flex flex-col relative w-[286px] h-[432px] gap-3 rounded-xl">
      {discountBoolean && <span className="absolute top-4 left-3 py-1 px-2 rounded-lg z-10 bg-black/70 text-white text-xs">-{discountPercentage}%</span>}
      <Link className="relative w-full h-[360px]" href={`/products/${id}`}>
        {isHome ? (
          <Image src={imageSrc} alt={altText} fill className="rounded-xl" />
        ) : (
          <MotionImage src={imageSrc} alt={altText} fill className="rounded-xl" layoutId={layoutId.id} />
        )}
      </Link>
      <div>
        <motion.h3 className="block text-lg text-black/80 text-center" layoutId={layoutId.productId}>{title}</motion.h3>
        <div className="flex justify-between px-4 py-2 gap-3">
          <div className="flex gap-2">
            {discountBoolean && <span className="line-through text-black/60">${price}</span>}
            <span>${newPrice}</span>
          </div>
          <button>
            <svg
              width="25"
              height="25"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 0.5C5.225 0.5 0.5 5.225 0.5 11C0.5 16.775 5.225 21.5 11 21.5C16.775 21.5 21.5 16.775 21.5 11C21.5 5.225 16.775 0.5 11 0.5ZM11 20.225C5.9 20.225 1.775 16.1 1.775 11C1.775 5.9 5.9 1.775 11 1.775C16.1 1.775 20.225 5.9 20.225 11C20.225 16.1 16.1 20.225 11 20.225Z"
                fill="black"
              />
              <path
                d="M11.6 7.32495H10.4V10.4H7.625V11.6H10.4V14.825H11.6V11.6H14.45V10.4H11.6V7.32495Z"
                fill="black"
              />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
}
