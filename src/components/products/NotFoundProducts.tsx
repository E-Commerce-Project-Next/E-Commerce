import React from "react";

export default function NotFoundProducts() {
  return (
    <div className="flex flex-col items-center col-span-full py-16 text-center animate-fade-in-up text-black/40">
      <div className="animate-float pb-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          />
        </svg>
      </div>
      <h3 className="text-2xl font-semibold">Oops! No products here</h3>
      <p className="mt-2 max-w-md">
        It seems our popular products section is empty at the moment. Please
        check back soon!
      </p>
    </div>
  );
}
