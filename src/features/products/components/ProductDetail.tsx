import React from "react";
import { Product } from "../types/productType";
import StarRating from "@/features/commons/components/StarRating";
import NumberField from "@/features/commons/components/NumberField";
import Button from "@/features/commons/components/Button";
import {TruckIcon, Clock} from "lucide-react";

export default function ProductDetail({
  children,
  product,
}: {
  children: React.ReactNode;
  product: Product | undefined;
}) {

  return (
    <div className="flex flex-col gap-5 w-1/2 px-10">
      <div className="block">{children}</div>
      <div className="flex items-center gap-2 align-middle text-middle">
        <span className="text-2xl">${product?.price}</span>
        <div className="h-8 border-1 mx-2 border-black/60" />
        <StarRating value={3.5} readOnly />
        <span className="text-sm">( 32 review )</span>
      </div>
      <div className="border-[1px] w-full my-5 border-black/10" />
      <div className="flex flex-col gap-5 w-full mb-5">
        <p className="text-md mb-5">{product?.description}</p>
        <div className="flex w-full items-center gap-5">
          <NumberField/>
          <Button className="flex-1 flex justify-center items-center font-bold border-1 border-black" arrowRight={false}>Add to Cart</Button>
        </div>
        <Button className="flex-1 flex justify-center items-center font-bold" variant="outline" arrowRight={false}>Buy now</Button>
      </div>
      <div className="flex gap-5">
        <TruckIcon size={18}/>
        <p className="text-sm">Free worldwide shipping on all orders over $100</p>
      </div>
      <div className="flex gap-5">
        <Clock size={18}/>
        <p className="text-sm">Delivers in: 3-7 Working Days Shipping & Return</p>
      </div>
    </div>
  );
}
