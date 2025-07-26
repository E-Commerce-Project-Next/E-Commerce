import React from "react";
import Image from "next/image";

type BlogCardProps = {
  imageBlog?: string;
  imageUser?: string;
  userName: string;
  description: string;
  date: string;
};

export default function BlogCard({
  imageBlog,
  imageUser,
  userName,
  description,
  date,
}: BlogCardProps) {
  const imageBlogSrc = imageBlog || "/no_image.jpg";
  const imageUserSrc = imageUser || "/no_image.jpg";
  return (
    <article className="flex flex-col w-[396px] h-[415px] gap-5">
      <div className="relative h-[275px]">
        <Image
          src={imageBlogSrc}
          alt="Blog Image"
          fill
          className="rounded-xl"
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3 text-sm">
          <div className="relative w-8 h-8">
            <Image
              src={imageUserSrc}
              alt="User Image"
              fill
              className="rounded-full object-cover"
            />
          </div>
          <p>{userName}</p>
          <Image
            src="/point.png"
            alt="black point"
            width={5}
            height={5}
            className="object-cover"
          />
          <p>{date}</p>
        </div>
        <p>{description}</p>
      </div>
    </article>
  );
}
