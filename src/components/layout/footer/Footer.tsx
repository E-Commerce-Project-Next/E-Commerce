import React from "react";
import HeroFooter from "@/components/layout/footer/HeroFooter";
import BottomFooter from "@/components/layout/footer/BottomFooter";
import NavFooter from "@/components/layout/footer/NavFooter";

export default function Footer() {
  return (
    <div className="bg-gray-100 flex flex-col pt-30">
        <HeroFooter />
        <NavFooter />
        <BottomFooter />
    </div>
  );
}
