import React from "react";

export default function SearchInput() {
  return (
    <div className="flex border border-gray-300 rounded-full items-center justify-between px-5 py-3 w-full bg-white gap-3">
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search an item"
        className="border-none outline-none flex-1"
      />
      <svg
        width="17"
        height="17"
        viewBox="0 0 17 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.25 15.25L11.8855 11.8795M13.75 7.375C13.75 9.06576 13.0784 10.6873 11.8828 11.8828C10.6873 13.0784 9.06576 13.75 7.375 13.75C5.68424 13.75 4.06274 13.0784 2.86719 11.8828C1.67165 10.6873 1 9.06576 1 7.375C1 5.68424 1.67165 4.06274 2.86719 2.86719C4.06274 1.67165 5.68424 1 7.375 1C9.06576 1 10.6873 1.67165 11.8828 2.86719C13.0784 4.06274 13.75 5.68424 13.75 7.375Z"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
