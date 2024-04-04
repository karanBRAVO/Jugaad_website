import React from "react";
import Link from "next/link";
import Image from "next/image";
import { f_inter_800, f_inter_400, f_inika_700 } from "@/styles/fonts";
import { NavigationLinks } from "@/types/Links";

type Props = {};

const Footer = (props: Props) => {
  const links: NavigationLinks[] = [
    { name: "Home", to: "/" },
    { name: "About Us", to: "/aboutus" },
    { name: "Workshops", to: "/workshops" },
    { name: "Projects", to: "/projects" },
  ];

  return (
    <>
      <div className="w-full flex flex-col sm:flex-row items-center sm:items-start justify-evenly px-4 sm:px-12 py-6">
        <div className="flex flex-col items-center justify-center gap-1">
          <Link href={"/"}>
            <Image
              src={"/Logo_foot.png"}
              alt="Logo"
              width={100}
              height={100}
              className="m-1 w-36 sm:w-48"
            />
            <h1
              className={`text-white text-base md:text-xl tracking-wider font-bold uppercase text-center ${f_inter_800.className}`}
            >
              Jugaad
            </h1>
          </Link>
        </div>
        <div className="flex flex-col items-center sm:justify-between sm:gap-1 sm:px-2">
          <div className="flex flex-row items-start justify-start my-7 w-full sm:my-0 gap-1">
            {links.map((link, idx) => (
              <Link
                href={link.to}
                key={idx}
                className={`font-medium text-white md:m-1 py-1 px-1 md:px-3 text-sm md:text-base leading-6 tracking-wide uppercase ${f_inika_700.className} text-center text-nowrap`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between w-full px-2 sm:pt-3 sm:mt-2">
            <div className="w-full h-full px-2 flex flex-col items-center gap-2 py-1">
              <h3
                className={`underline text-white font-medium text-base sm:text-xl tracking-wide leading-none capitalize ${f_inter_800.className} p-3`}
              >
                Email Address
              </h3>
              <p
                className={`${f_inter_400.className} flex flex-col items-start justify-start leading-none text-base font-light text-white`}
              >
                <span>jugaadclubuiet@gmail.com</span>
              </p>
            </div>
            <div className="w-full px-2 flex flex-col items-center sm:items-end gap-2 py-1 my-3 sm:my-0">
              <h3
                className={`underline text-white font-medium text-base sm:text-xl tracking-wide leading-none capitalize ${f_inter_800.className} p-3`}
              >
                Phone Number
              </h3>
              <p
                className={`${f_inter_400.className} flex flex-col gap-2 justify-start w-full items-center sm:items-end leading-none text-base font-light text-white`}
              >
                <span>Pranav - 8427311044 </span>
                <span>Kunal - 8604329827</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
