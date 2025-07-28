import Faqs from "@/features/faqs/components/Faqs";
import TwoColumnsSection from "@/features/commons/layouts/TwoColumnsSection";
import React from "react";
import { Accordion } from "@/components/ui/accordion";

export default function FaqSection() {
  const questionsAndAnswers = [
    {
      question: "This is important?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!",
      numItem: 1,
    },
    {
      question: "Also This is important?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!",
      numItem: 2,
    },
    {
      question: "Also and This is important?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!",
      numItem: 3,
    },
  ];

  return (
    <TwoColumnsSection
      title="Frequently Asked Questions"
      description="Here are some common questions and answers to help you understand our services better."
      buttonText="Read More"
      sectionId="faqs"
    >
      <div className="flex flex-col gap-5 flex-1 justify-start items-start">
        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="item-1"
        >
          {questionsAndAnswers.map(({ question, answer, numItem }) => (
            <Faqs
              key={numItem}
              question={question}
              answer={answer}
              numItem={numItem}
            />
          ))}
        </Accordion>
      </div>
    </TwoColumnsSection>
  );
}
