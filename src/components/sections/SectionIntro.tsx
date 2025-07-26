import React from "react";
import Button from "@/components/ui/Button";

type SectionIntroProps = {
    title: string;
    description: string;
    buttonText: string;
};

export default function SectionIntro({ title, description, buttonText }: SectionIntroProps) {
  return (
    <div className="flex justify-between items-center w-full ">
      <div className="flex flex-col gap-4">
        <h2 className="text-4xl font-bold text-black/80">{title}</h2>
        <p className="text-lg text-black/70 max-w-2xl">{description}</p>
      </div>
      <div>
        <Button>{buttonText}</Button>
      </div>
    </div>
  );
}
