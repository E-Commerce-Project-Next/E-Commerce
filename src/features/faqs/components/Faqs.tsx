import React from "react";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FaqsProps = {
  question: string;
  answer: string;
  numItem: number;
};

export default function Faqs({ question, answer, numItem }: FaqsProps) {
  return (
    <AccordionItem value={`item-${numItem}`}>
      <AccordionTrigger className="text-xl">{question}</AccordionTrigger>
      <AccordionContent className="flex flex-col gap-4">
        <p>{answer}</p>
      </AccordionContent>
    </AccordionItem>
  );
}
