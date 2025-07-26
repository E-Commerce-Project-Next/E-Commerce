import ValueProposition from "@/components/sections/ValueProposition";
import TwoColumnsSection from "@/layouts/TwoColumnsSection";
import React from "react";

export default function ValuePropositionSection() {
  return (
    <TwoColumnsSection
      title="Have a Look at Our Unique Selling Proportions"
      buttonText="Read More"
    >
      <ValueProposition />
    </TwoColumnsSection>
  );
}
