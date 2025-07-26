import Image from "next/image";
import Marca1 from "@/features/commons/assets/brands/logo-brand-1.svg";
import Marca2 from "@/features/commons/assets/brands/logo-brand-2.svg";
import Marca3 from "@/features/commons/assets/brands/logo-brand-3.svg";
import Marca4 from "@/features/commons/assets/brands/logo-brand-4.svg";
import { Marquee } from "@/components/magicui/marquee";

const logos = [Marca1, Marca2, Marca3, Marca4];

export default function Brands() {
  return (
    <div className="relative overflow-hidden w-full bg-white py-4">
      <div className="flex whitespace-nowrap w-fit">
        <Marquee pauseOnHover={true}>
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center w-40 h-20 mx-4">
              <Image src={logo} alt={`Brand Logo ${index + 1}`} width={100} height={50} className="object-contain" />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

