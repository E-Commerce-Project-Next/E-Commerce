import React from "react";
import SearchInput from "@/features/commons/components/SearchInput";

export default function HeroSection() {
  return (
    <section className="min-h-[100vh] flex flex-col items-center justify-center gap-10 text-center">
      <h1 className="text-4xl font-bold text-black max-w-2xl">
        Crafting Comfort, Redefining Spaces. Your Home, Your Signature Style!
      </h1>
      <p className="text-lg text-gray-700 max-w-2xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla
        nunc in molestie feugiat. Nunc auctor consectetur elit, quis pulvina.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla
        nunc in molestie feugiat
      </p>
      <SearchInput/>
    </section>
  );
}
