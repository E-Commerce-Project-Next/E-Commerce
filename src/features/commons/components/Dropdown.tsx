'use client';

import { useState, useRef, useEffect, ReactNode } from 'react';
import Link from 'next/link';

type DropdownItem = string | { label: string; href: string };

type DropdownMenuProps = {
  items: DropdownItem[];
  buttonContent: ReactNode;
};

export default function DropdownMenu({ items, buttonContent }: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 rounded-3xl fill-current hover:bg-black hover:cursor-pointer hover:text-white flex gap-2 items-center text-black transition-colors"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {buttonContent}
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.59961 1L4.59961 5L8.59961 1"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {isOpen && (
        <ul className="absolute left-0 mt-2 w-fit bg-white text-black border-none rounded-2xl text-left shadow-xl z-10 p-2 animate-fade-in">
          {items.map((item, index) => {
            const label = typeof item === 'string' ? item : item.label;
            const href = typeof item === 'string' ? '/' : item.href;

            return (
              <li key={index}>
                <Link
                  href={href}
                  className="block px-4 py-2 hover:bg-gray-100 rounded-3xl transition-colors"
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
