import React from "react";

export default function ProductsSection({
  children,
}: {
  children: React.ReactNode;
}) {
  const [Categories, Range, SearchBar, PaginationTop, GridProducts, PaginationBottom] = children as React.ReactElement[];
  return (
    <>
      <aside className="sticky top-[100px] left-0 max-h-[calc(100vh-128px)] w-fit border-r p-4 overflow-y-auto">
        {Categories}
        {Range}
      </aside>
      <div className="flex-1 flex flex-col gap-8 px-12">
        <h2 className="text-3xl font-semibold">Our Collection Of Products</h2>
        {SearchBar}
        {PaginationTop}
        {GridProducts}
        {PaginationBottom}
      </div>
      
    </>
  );
}
