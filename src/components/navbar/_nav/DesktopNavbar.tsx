import React from "react";
import Image from "next/image";
import Link from "next/link";
import { f_inter_700 } from "@/styles/fonts";
import { FaSearch } from "react-icons/fa";
import { NavigationLinks } from "@/types/LinkTypes";

type Props = {
  links: NavigationLinks[];
};

const DesktopNavbar = (props: Props) => {
  return (
    <>
      <div className="w-full p-3 md:flex items-center justify-around hidden">
        {/* Logo */}
        <div className="flex flex-col items-center justify-center gap-1">
          <Link href={"/"}>
            <Image
              src={"/Logo.png"}
              alt="Logo"
              width={100}
              height={100}
              className="m-1 w-20 md:w-32"
            />
            <h1
              className={`text-white text-sm md:text-base tracking-wider font-bold uppercase text-center ${f_inter_700.className}`}
            >
              Jugaad
            </h1>
          </Link>
        </div>

        {/* Links */}
        <div className="flex flex-row items-center justify-between">
          {props.links.map((link, idx) => (
            <Link
              href={link.to}
              key={idx}
              className={`uppercase font-semibold text-white mx-5 text-base hover:text-yellow-500 transition-all ease-in-out tracking-normal leading-tight ${f_inter_700.className}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Search Button */}
        <FaSearch
          className="text-white font-black text-2xl cursor-pointer mx-2 hover:text-yellow-500 hover:scale-110 transition-all ease-in"
          title="Search Jugaad"
        />
      </div>
    </>
  );
};

export default DesktopNavbar;
