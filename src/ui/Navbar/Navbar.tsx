import React from "react";
import Image from "next/image";
import Link from "next/link";

// icons
import { FaSearch } from "react-icons/fa";

type Props = {};

const Navbar = (props: Props) => {
  const links = [
    { name: "Home", to: "/" },
    { name: "About", to: "/aboutus" },
    { name: "Activities", to: "/activities" },
  ];

  return (
    <>
      <div className="w-full p-5 flex items-center justify-between border-2 border-solid border-slate-400 border-t-0 border-l-0 border-r-0">
        <Image
          src={"/logo.jpg"}
          alt="Logo"
          width={100}
          height={100}
          className="w-40 aspect-video h-32 rounded-full mx-2"
        />
        <div className="flex flex-row items-center justify-between">
          {links.map((link, idx) => (
            <Link
              href={link.to}
              key={idx}
              className="uppercase font-semibold text-white mx-5 text-2xl hover:line-through hover:text-red-700 transition-all ease-in-out tracking-normal leading-tight"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <FaSearch
          className="text-white font-black text-5xl cursor-pointer mx-2 hover:text-red-700 hover:scale-110 transition-all ease-in"
          title="Search Jugaad"
        />
      </div>
    </>
  );
};

export default Navbar;
