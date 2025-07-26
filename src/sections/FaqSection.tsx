import Faqs from "@/components/sections/Faqs";
import TwoColumnsSection from "@/layouts/TwoColumnsSection";
import React from "react";

export default function FaqSection() {
  return (
    <TwoColumnsSection
      title="Frequently Asked Questions"
      description="Here are some common questions and answers to help you understand our services better."
      buttonText="Read More"
    >
      <div className="flex flex-col gap-5 flex-1">
        <Faqs
          question="This is important?"
          answer="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
          veritatis molestias culpa in, recusandae laboriosam neque aliquid
          libero nesciunt voluptate dicta quo officiis explicabo consequuntur
          distinctio corporis earum similique!"
        />
        <Faqs
          question="Also This is important?"
          answer="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
          veritatis molestias culpa in, recusandae laboriosam neque aliquid
          libero nesciunt voluptate dicta quo officiis explicabo consequuntur
          distinctio corporis earum similique!"
        />
        <Faqs
          question="Also and This is important?"
          answer="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
          veritatis molestias culpa in, recusandae laboriosam neque aliquid
          libero nesciunt voluptate dicta quo officiis explicabo consequuntur
          distinctio corporis earum similique!"
        />
      </div>
    </TwoColumnsSection>
  );
}
