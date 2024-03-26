import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";

// icons
import { FaSearch } from "react-icons/fa";

// fonts
const f_inter_700 = Inter({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

type Props = {};

interface NavbarLinks {
  name: string;
  to: string;
}

const Navbar = (props: Props) => {
  const links: NavbarLinks[] = [
    { name: "Home", to: "/" },
    { name: "About", to: "/aboutus" },
    { name: "Activities", to: "/activities" },
  ];

  return (
    <>
      <div className="w-full p-5 flex items-center justify-around">
        <div className="flex flex-col items-center justify-center gap-1">
          <Link href={"/"}>
            <Image
              src={"/Logo_head.png"}
              alt="Logo"
              width={100}
              height={100}
              className="m-1 w-36"
            />
            <h1
              className={`text-white text-xl tracking-wider font-bold uppercase text-center ${f_inter_700.className}`}
            >
              Jugaad
            </h1>
          </Link>
        </div>
        <div className="flex flex-row items-center justify-between">
          {links.map((link, idx) => (
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

export default Navbar;
