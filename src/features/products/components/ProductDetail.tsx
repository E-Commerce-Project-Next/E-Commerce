import React from "react";
import { Product } from "../types/productType";
import StarRating from "@/features/commons/components/StarRating";
import NumberField from "@/features/commons/components/NumberField";
import Button from "@/features/commons/components/Button";
import { TruckIcon, Clock } from "lucide-react";

export default function ProductDetail({
  children,
  product,
}: {
  children: React.ReactNode;
  product: Product | undefined;
}) {
  return (
    <div className="flex flex-col w-1/2 px-10 gap-2">
      <div className="block">{children}</div>
      <div className="flex items-center gap-2 align-middle text-middle">
        <span className="text-2xl">${product?.price}</span>
        <div className="h-8 border-1 mx-2 border-black/60" />
        <StarRating value={product?.rating} readOnly />
        <span className="text-sm">( 32 review )</span>
      </div>
      <div className="border-[1px] w-full my-5 border-black/10" />
      <div className="flex flex-col gap-5 w-full mb-5">
        <div className="flex-1 flex flex-col relative">
          <p className="text-md mb-7 w-full line-clamp-4 break-all [text-wrap:balance] leading-relaxed text-neutral-700">
            {product?.description ||
              "ipsum ipsum ipsum ipsumipsumipsui psumipsumipsum ipsumipsumip sumipsumipsumipsum ipsumipsumipsumips umipsumipsumm ipsumi psumipsum ipsumipsumips umipsum ipsum ipsumipsumipsumipsumipsumipsumipsumipsumipsumipsumipsumipsumipsumipsumipsumipsumipsumipsumipsumipsumipsumipsumipsumipsumipsumipsumipsumipsumipsumipsumipsumipsumipsumipsumipsumipsum"}
          </p>
          <a
            href="#description"
            className="absolute bottom-0 right-0 py-1 px-2 underline text-sm text-blue-900"
          >
            Mostrar más
          </a>
        </div>
        <div className="flex w-full items-center gap-5">
          <NumberField />
          <Button
            className="flex-1 flex justify-center items-center font-bold border-1 border-black"
            arrowRight={false}
          >
            Add to Cart
          </Button>
        </div>
        <Button
          className="flex justify-center items-center font-bold"
          variant="outline"
          arrowRight={false}
        >
          Buy now
        </Button>
      </div>
      <div className="flex gap-5">
        <TruckIcon size={18} />
        <p className="text-sm">
          Free worldwide shipping on all orders over $100
        </p>
      </div>
      <div className="flex gap-5">
        <Clock size={18} />
        <p className="text-sm">
          Delivers in: 3-7 Working Days Shipping & Return
        </p>
      </div>
    </div>
  );
}
