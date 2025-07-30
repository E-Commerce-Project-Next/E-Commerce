import React from "react";
import ProductDetail from "../components/ProductDetail";

export default function DetailSection({
  children,
}: {
  children: React.ReactNode;
}) {
  const [Images, ProductDetail] = React.Children.toArray(children);

  return (
    <section className="py-5 flex w-3/4 justify-center gap-10 h-150">
      {Images}
      {ProductDetail}
    </section>
  );
}
