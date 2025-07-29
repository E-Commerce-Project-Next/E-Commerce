import React from "react";

export default function GridProducts({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex-1 grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] justify-center justify-items-center gap-y-5 gap-x-25">
      {children}
    </div>
  );
}
