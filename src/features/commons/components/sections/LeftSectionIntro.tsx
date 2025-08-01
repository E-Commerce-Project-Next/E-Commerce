import React from "react";
import Button from "@/features/commons/components/Button";

type LeftSectionIntroProps = {
  title: string;
  description?: string;
  buttonText: string;
  buttonLink?: string;
};

export default function LeftSectionIntro({
  title,
  description,
  buttonText,
  buttonLink
}: LeftSectionIntroProps) {
  return (
    <div className="flex flex-col gap-8 max-w-lg">
      <h2 className="text-4xl font-bold text-black/80">{title}</h2>
      {description && <p className="text-lg text-black/60">{description}</p>}
      <div>
        <Button link={buttonLink}>{buttonText}</Button>
      </div>
    </div>
  );
}
