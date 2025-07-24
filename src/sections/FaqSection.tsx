import Faqs from "@/components/Faqs";
import LeftSectionIntro from "@/components/LeftSectionIntro";
import TwoColumnsSection from "@/layouts/TwoColumnsSection";
import React from "react";

export default function FaqSection() {
  return (
    <TwoColumnsSection
      title="Frequently Asked Questions"
      description="Here are some common questions and answers to help you understand our services better."
      buttonText="Read More"
    >
      <Faqs />
    </TwoColumnsSection>
  );
}
