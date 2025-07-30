import React from "react";
export default function ImageCollage({
  children,
}: {
  children: React.ReactNode;
}) {
  const [Image1, Image2, Image3, Image4] = React.Children.toArray(children);
  return (
    <div className="flex w-1/2 gap-3">
      <div className="flex flex-col justify-between relative w-1/4 gap-5 h-full">
        {Image1}
        {Image2}
        {Image3}
      </div>
      {Image4}
    </div>
  );
}
