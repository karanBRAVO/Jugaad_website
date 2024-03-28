import React from "react";
import { Logo } from "@/components/ComponentExporter";
import { NavigationLinks } from "@/types/Links";
import Link from "next/link";
import { f_inter_700 } from "@/styles/fonts";
import { FaSearch } from "react-icons/fa";

type Props = {
  links: NavigationLinks[];
};

const DesktopNavbar = (props: Props) => {
  return (
    <>
      <div className="w-full p-5 md:flex items-center justify-around hidden">
        <Logo />
        <div className="flex flex-row items-center justify-between">
          {props.links.map((link, idx) => (
            <Link
              href={link.to}
              key={idx}
              className={`uppercase font-semibold text-white mx-5 text-xl hover:line-through hover:text-red-700 transition-all ease-in-out tracking-normal leading-tight ${f_inter_700.className}`}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <FaSearch
          className="text-white font-black text-3xl cursor-pointer mx-2 hover:text-red-700 hover:scale-110 transition-all ease-in"
          title="Search Jugaad"
        />
      </div>
    </>
  );
};

export default DesktopNavbar;
