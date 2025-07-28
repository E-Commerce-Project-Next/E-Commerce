import React from 'react'
import LeftSectionIntro from '@/features/commons/components/sections/LeftSectionIntro'

type TwoColumnsSectionProps = {
    title: string;
    buttonText: string;
    description?: string;
    children: React.ReactNode;
    sectionId: string;
};


export default function TwoColumnsSection({ title, buttonText, description, children, sectionId }: TwoColumnsSectionProps) {
  return (
    <section id={sectionId} className="flex justify-between mx-auto w-full gap-5 pt-30">
          <LeftSectionIntro
            title={title}
            buttonText={buttonText}
            description={description}
          />
          {children}
    </section>
  )
}

  