import React from "react";
import HeroFooter from "@/features/commons/components/footer/HeroFooter";
import BottomFooter from "@/features/commons/components/footer/BottomFooter";
import NavFooter from "@/features/commons/components/footer/NavFooter";

export default function Footer() {
  return (
    <div className="bg-gray-100 flex flex-col pt-30">
        <HeroFooter />
        <NavFooter />
        <BottomFooter />
    </div>
  );
}
