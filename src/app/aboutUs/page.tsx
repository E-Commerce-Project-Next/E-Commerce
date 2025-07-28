import React from "react";
import TwoColumnsSection from "@/features/commons/layouts/TwoColumnsSection";
import Image from "next/image";
import ValuePropositionSection from "@/features/commons/sections/ValuePropositionSection";
import LatestOngoingsSection from "@/features/blogs/sections/LatestOngoingsSection";
import FaqSection from "@/features/faqs/sections/FaqSection";

export default function page() {
  return (
    <main className="flex flex-col gap-40 px-40 mb-30">
      <div>
        <h1>Get To Know Who We Are And What We Do - About Us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          fringilla nunc in molestie feugiat. Nunc auctor consectetur elit, quis
          pulvina. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nulla fringilla nunc in molestie feugiat
        </p>
      </div>
      <TwoColumnsSection
        title="Learn About Us And What Sets Us Apart"
        buttonText="Read Our Blogs"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat. Nunc auctor consectetur elit, quis pulvina. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat. Nunc auctor consectetur elit, quis pulvina."
        sectionId="mission-section"
      >
        <div className="relative w-1/2 h-[50vh]">
          <Image
            src="/grayCollage.png"
            alt="Description of the image"
            fill
            className="object-contain"
          />
        </div>
      </TwoColumnsSection>
      <ValuePropositionSection />
      <LatestOngoingsSection array={[]} />
      <FaqSection />
    </main>
  );
}
