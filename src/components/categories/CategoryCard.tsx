import React from 'react'
import Image from 'next/image';

type CategoryCardProps = {
    urlImage?: string;
    altText?: string;
    nameCategory?: string;
    gridArea: string;
}

export default function CategoryCard({ urlImage, altText, nameCategory, gridArea }: CategoryCardProps) {
  const defaultImage = "/no_image.jpg";
  return (
    <article className={`relative ${gridArea}`}>
        <Image src={urlImage || defaultImage} alt={altText || "No Image"} width={500} height={300} />
        <h3 className="text-lg font-semibold">{nameCategory || "Unknown Category"}</h3>
    </article>
  )
}

