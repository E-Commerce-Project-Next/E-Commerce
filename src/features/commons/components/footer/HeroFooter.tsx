import React from "react";
import SearchInput from "@/features/commons/components/SearchInput";

export default function HeroFooterSection() {
  return (
    <section className="flex flex-col items-center justify-center text-center">
      <svg
        viewBox="0 0 55 20"
        fill="black"
        xmlns="http://www.w3.org/2000/svg"
        className="size-32"
      >
        <g clipPath="url(#clip0_2_24927)">
          <path
            d="M12.9603 0C10.828 0 8.78311 0.847035 7.27538 2.35477L2.35477 7.27538C0.847035 8.78311 0 10.828 0 12.9603C0 17.4005 3.5995 21 8.03971 21C10.172 21 12.2169 20.1529 13.7246 18.6452L17.1282 15.2416C17.1282 15.2415 17.1283 15.2417 17.1282 15.2416L27.0452 5.32462C27.7653 4.60454 28.7419 4.2 29.7603 4.2C31.4652 4.2 32.9106 5.31119 33.4118 6.84885L36.5415 3.71907C35.1138 1.48284 32.6102 0 29.7603 0C27.628 0 25.5831 0.847035 24.0754 2.35477L10.7548 15.6754C10.0347 16.3955 9.05807 16.8 8.03971 16.8C5.91909 16.8 4.2 15.0809 4.2 12.9603C4.2 11.9419 4.60454 10.9653 5.32462 10.2452L10.2452 5.32462C10.9653 4.60454 11.9419 4.2 12.9603 4.2C14.6653 4.2 16.1106 5.31124 16.6118 6.84895L19.7416 3.71915C18.3138 1.48288 15.8103 0 12.9603 0Z"
            fill="black"
          />
          <path
            d="M27.5566 15.6754C26.8365 16.3955 25.8599 16.8 24.8415 16.8C23.1368 16.8 21.6915 15.6891 21.1902 14.1517L18.0605 17.2814C19.4884 19.5173 21.9918 21 24.8415 21C26.9738 21 29.0187 20.1529 30.5264 18.6452L43.847 5.32462C44.5671 4.60454 45.5437 4.2 46.5621 4.2C48.6827 4.2 50.4018 5.91909 50.4018 8.03971C50.4018 9.05807 49.9973 10.0347 49.2772 10.7548L44.3566 15.6754C43.6365 16.3955 42.6599 16.8 41.6415 16.8C39.9367 16.8 38.4913 15.6889 37.9901 14.1513L34.8604 17.2811C36.2882 19.5173 38.7917 21 41.6415 21C43.7738 21 45.8187 20.1529 47.3264 18.6452L52.247 13.7246C53.7547 12.2169 54.6018 10.172 54.6018 8.03971C54.6018 3.5995 51.0023 0 46.5621 0C44.4298 0 42.3849 0.847035 40.8772 2.35477L27.5566 15.6754Z"
            fill="black"
          />
        </g>
        <defs>
          <clipPath id="clip0_2_24927">
            <rect width="54.6" height="21" fill="none" />
          </clipPath>
        </defs>
      </svg>
      <div className="flex flex-col items-center gap-10">
        <h1 className="text-4xl text-black w-2xl">
          Subscribe To Your Newsletter to Stay Updated About Discounts
        </h1>
        <SearchInput />
      </div>
    </section>
  );
}
