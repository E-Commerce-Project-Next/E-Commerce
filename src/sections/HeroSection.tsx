import React from "react";
import SearchInput from "@/components/SearchInput";

export default function HeroSection() {
  return (
    <section className="flex flex-col my-50 mx-100 items-center justify-center gap-10 text-center">
      <h1 className="text-4xl font-bold text-black">
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
