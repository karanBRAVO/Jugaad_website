"use client";

import React, { useState } from "react";
import { NavigationLinks } from "@/types/Links";
import { Logo } from "@/components/ComponentExporter";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import Link from "next/link";
import { f_inter_700 } from "@/styles/fonts";

type Props = {
  links: NavigationLinks[];
};

const MobileNavbar = (props: Props) => {
  const [menuStatus, setMenuStatus] = useState(true);

  const toggleMenu = () => setMenuStatus((prev) => !prev);

  return (
    <>
      <div className="w-full p-5 flex items-center justify-between md:hidden relative">
        <Logo />
        {menuStatus ? (
          <FaBars
            className="text-white font-black text-xl cursor-pointer hover:text-yellow-500 transition-all hover:scale-105 ease-in"
            onClick={toggleMenu}
          />
        ) : (
          <>
            <FaTimes
              className="text-white font-black text-xl cursor-pointer hover:text-yellow-500 transition-all hover:scale-105 ease-in"
              onClick={toggleMenu}
            />
            <div className="p-1 bg-[#00000099] rounded-md absolute top-20 mt-5 left-0 right-0 w-full">
              <div className="flex flex-col gap-2 text-white">
                {props.links.map((link, idx) => (
                  <Link
                    href={link.to}
                    key={idx}
                    className={`uppercase font-medium text-base text-white ${f_inter_700.className} hover:bg-yellow-500 p-3 rounded-sm transition-all ease-linear`}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="w-full flex flex-row gap-0 items-center justify-center">
                  <input
                    type="search"
                    name="search"
                    id="search"
                    placeholder="type here..."
                    className="w-full px-3 py-2 rounded-l-md bg-white text-blue-950 outline-none text-base font-mono"
                  />
                  <div className="p-2 rounded-r-md bg-yellow-700">
                    <FaSearch className="text-white font-black text-2xl cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default MobileNavbar;
