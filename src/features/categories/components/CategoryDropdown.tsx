'use client';
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface Category {
  name: string;
  count: number;
  subcategories?: string[];
}

const categories: Category[] = [
  {
    name: "Lorem ipsum",
    count: 3,
    subcategories: ["Subcat 1", "Subcat 2"],
  },
  {
    name: "Lorem ipsum",
    count: 3,
    subcategories: ["Subcat A", "Subcat B", "Subcat C"],
  },
  {
    name: "Lorem ipsum",
    count: 3,
  },
  {
    name: "Lorem ipsum",
    count: 3,
  },
  {
    name: "Lorem ipsum",
    count: 3,
  },
  {
    name: "Lorem ipsum",
    count: 3,
  },
];

export default function CategoryDropdown() {
  const [openIndices, setOpenIndices] = useState<Set<number>>(new Set());

  const toggleCategory = (index: number) => {
    const newSet = new Set(openIndices);
    if (newSet.has(index)) {
      newSet.delete(index);
    } else {
      newSet.add(index);
    }
    setOpenIndices(newSet);
  };

  return (
    <section className="border p-8 w-full min-w-[280px] rounded-t-lg">
      <h2 className="text-2xl border-l-4 pl-4 border-black mb-4">
        Categories
      </h2>
      <ul className="space-y-4">
        {categories.map((cat, index) => (
          <li key={index}>
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleCategory(index)}
            >
              <span>
                {cat.name} ({cat.count})
              </span>
              {cat.subcategories ? (
                openIndices.has(index) ? (
                  <ChevronUp className="w-4 h-4 black-500" />
                ) : (
                  <ChevronDown className="w-4 h-4 black-500" />
                )
              ) : null}
            </div>
            {openIndices.has(index) && cat.subcategories && (
              <ul className="ml-4 mt-2 space-y-1 text-sm text-gray-600">
                {cat.subcategories.map((sub, subIndex) => (
                  <li key={subIndex} className="hover:text-purple-600 cursor-pointer">
                    {sub}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
