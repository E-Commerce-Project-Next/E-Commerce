import React from 'react'
import LeftSectionIntro from '@/features/commons/components/sections/LeftSectionIntro'

type TwoColumnsSectionProps = {
    title: string;
    buttonText: string;
    description?: string;
    children: React.ReactNode;
};


export default function TwoColumnsSection({ title, buttonText, description, children }: TwoColumnsSectionProps) {
  return (
    <section className="flex justify-between mx-auto w-full gap-5">
          <LeftSectionIntro
            title={title}
            buttonText={buttonText}
            description={description}
          />
          {children}
    </section>
  )
}

  