import React from 'react'
import LeftSectionIntro from '@/components/sections/LeftSectionIntro'

type TwoColumnsSectionProps = {
    title: string;
    buttonText: string;
    description?: string;
    children: React.ReactNode;
};


export default function TwoColumnsSection({ title, buttonText, description, children }: TwoColumnsSectionProps) {
  return (
    <section className="flex justify-between my-50 mx-auto w-full px-48 gap-5">
          <LeftSectionIntro
            title={title}
            buttonText={buttonText}
            description={description}
          />
          {children}
    </section>
  )
}

  