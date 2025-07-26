import React from "react";

type FaqsProps = {
  question: string,
  answer: string
}

export default function Faqs({ question, answer}: FaqsProps) {
  return (
    <div className="space-y-4 flex-1 pl-20">
      <details
        className="group [&_summary::-webkit-details-marker]:hidden"
        open
      >
        <summary className="flex items-center justify-between gap-1.5 rounded-md border border-gray-100 bg-gray-50 p-4 text-gray-900">
          <h2 className="text-lg font-medium">
            {question}
          </h2>

          <svg
            className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </summary>

        <p className="px-4 pt-4 text-gray-900">
          {answer}
        </p>
      </details>
    </div>
  );
}
