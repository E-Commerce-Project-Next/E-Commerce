import React from "react";
import Link from "next/link";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { LogOutIcon, LogInIcon, PyramidIcon, UserCog } from "lucide-react";

interface NavbarRightProps {
  isLoggedIn?: boolean;
}

export default function NavbarRight({ isLoggedIn = false }: NavbarRightProps) {
  return (
    <div className="flex items-center justify-center gap-4">
      <NavigationMenuItem className="">
        <NavigationMenuTrigger>
          <svg
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.5996 10C9.22461 10 8.04753 9.51042 7.06836 8.53125C6.08919 7.55208 5.59961 6.375 5.59961 5C5.59961 3.625 6.08919 2.44792 7.06836 1.46875C8.04753 0.489584 9.22461 0 10.5996 0C11.9746 0 13.1517 0.489584 14.1309 1.46875C15.11 2.44792 15.5996 3.625 15.5996 5C15.5996 6.375 15.11 7.55208 14.1309 8.53125C13.1517 9.51042 11.9746 10 10.5996 10ZM0.599609 20V16.5C0.599609 15.7917 0.78211 15.1404 1.14711 14.5463C1.51211 13.9521 1.99628 13.4992 2.59961 13.1875C3.89128 12.5417 5.20378 12.0571 6.53711 11.7338C7.87044 11.4104 9.22461 11.2492 10.5996 11.25C11.9746 11.25 13.3288 11.4117 14.6621 11.735C15.9954 12.0583 17.3079 12.5425 18.5996 13.1875C19.2038 13.5 19.6884 13.9533 20.0534 14.5475C20.4184 15.1417 20.6004 15.7925 20.5996 16.5V20H0.599609Z"
              fill="black"
            />
          </svg>
        </NavigationMenuTrigger>
        <NavigationMenuContent className="absolute  origin-top-right translate-x-[-50%] min-w-36">
          <ul className="grid w-full gap-2">
            {isLoggedIn ? (
              <li className="flex flex-col gap-1">
                <NavigationMenuLink asChild>
                  <Link href="#" className="flex-row items-center gap-2">
                    <UserCog color="black"/>
                    Account
                  </Link>
                </NavigationMenuLink>
                <hr />
                <NavigationMenuLink asChild>
                  <Link
                    href="#"
                    className="flex-row items-center gap-2 hover:bg-red-300"
                  >
                    <LogOutIcon color="black"/>
                    Log Out
                  </Link>
                </NavigationMenuLink>
              </li>
            ) : (
              <li className="flex flex-col gap-1">
                <NavigationMenuLink asChild>
                  <Link href="#" className="flex-row items-center gap-2">
                    <LogInIcon color="black"/>
                    Log In
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/signup" className="flex-row items-center gap-2">
                    <PyramidIcon color="black"/>
                    Sign Up
                  </Link>
                </NavigationMenuLink>
              </li>
            )}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link href="/contact-us" className="px-5">
            <svg
              width="19"
              height="20"
              viewBox="0 0 19 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.60455 0C12.2845 0 14.4878 2.10591 14.5996 4.77432H14.5735C14.5766 4.85189 14.5617 4.92913 14.5299 5H14.6861C15.9031 5 17.1775 5.84351 17.6884 7.8798L17.744 8.12007L18.5129 14.3147C19.0662 18.2657 16.9046 19.9273 13.9558 19.9977L13.7581 20H5.46814C2.47139 20 0.162154 18.908 0.66989 14.5836L0.704514 14.3147L1.48225 8.12007C1.86575 5.92719 3.15322 5.06225 4.39373 5.00326L4.53132 5H4.6095C4.59631 4.92535 4.59631 4.84898 4.6095 4.77432C4.72133 2.10591 6.9246 0 9.60455 0ZM6.69661 8.32929C6.2085 8.32929 5.81282 8.73655 5.81282 9.23893C5.81282 9.74131 6.2085 10.1486 6.69661 10.1486C7.18471 10.1486 7.5804 9.74131 7.5804 9.23893L7.57351 9.12483C7.51897 8.67631 7.14716 8.32929 6.69661 8.32929ZM12.4854 8.32929C11.9973 8.32929 11.6016 8.73655 11.6016 9.23893C11.6016 9.74131 11.9973 10.1486 12.4854 10.1486C12.9735 10.1486 13.3692 9.74131 13.3692 9.23893C13.3692 8.73655 12.9735 8.32929 12.4854 8.32929ZM9.56536 1.30238C7.64125 1.30238 6.08145 2.85682 6.08145 4.77432C6.09463 4.84898 6.09463 4.92535 6.08145 5H13.0928C13.065 4.92794 13.0502 4.85153 13.0493 4.77432C13.0493 2.85682 11.4895 1.30238 9.56536 1.30238Z"
                fill="black"
              />
            </svg>
          </Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
    </div>
  );
}
