"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter, useParams } from "next/navigation";

const MotionImage = motion(Image);

export default function ProductDetail() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id;

  const layoutId = "image-" + `${id}`;

  return (
    <main className="py-25 min-h-[calc(100vh-128px)] flex flex-col px-8 justify-center items-center">
      <MotionImage
        src="/no_image.jpg"
        alt="Expanded Image"
        width={500}
        height={900}
        layoutId={layoutId}
        className="rounded-xl object-cover"
      />
      <button
        onClick={() => router.back()}
        className="mt-6 px-5 py-2 bg-emerald-500 text-white rounded-lg"
      >
        Back
      </button>
    </main>
  );
}
