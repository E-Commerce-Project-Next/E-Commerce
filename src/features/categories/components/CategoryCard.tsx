import React from 'react'
import Image from 'next/image';

type CategoryCardProps = {
    urlImage?: string;
    altText?: string;
    nameCategory?: string;
    span?: string;
}

export default function CategoryCard({ urlImage, altText, nameCategory, span }: CategoryCardProps) {
  const defaultImage = "/no_image.jpg";
  return (
    <article className={`relative min-h-max min-w-[390px] rounded-2xl overflow-hidden group ${span}`}>
        <div className="w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-110">
          <Image src={urlImage || defaultImage} alt={altText || "No Image"} fill className='object-cover rounded-2xl' />
        </div>
        <h3 className="text-lg font-semibold absolute bottom-5 left-5 text-l">{nameCategory || "Unknown Category"}</h3>
    </article>
  )
}

/*
<article className={`relative min-h-max min-w-[390px] rounded-full overflow-hidden group ${span}`}>
      <div className="w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-110">
        <Image src={urlImage || defaultImage} alt={altText || "No Image"} fill className='object-cover rounded-3xl' />
      </div>
      <h3 className="text-lg font-semibold absolute bottom-5 left-5 text-l">{nameCategory || "Unknown Category"}</h3>
    </article>

*/

