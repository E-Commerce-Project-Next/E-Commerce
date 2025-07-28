import ValueProposition from "@/features/commons/components/sections/ValueProposition";
import TwoColumnsSection from "@/features/commons/layouts/TwoColumnsSection";
import React from "react";

export default function ValuePropositionSection() {
  return (
    <TwoColumnsSection
      title="Have a Look at Our Unique Selling Proportions"
      buttonText="Read More"
      sectionId="value-proposition"
    >
      <ValueProposition />
    </TwoColumnsSection>
  );
}
