"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { f_inter_700 } from "@/styles/fonts";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import { NavigationLinks } from "@/types/LinkTypes";

type Props = {
  links: NavigationLinks[];
};

const MobileNavbar = (props: Props) => {
  const [searchValue, setSearchValue] = useState<string>("");

  const handleSearch = () => {
    console.log({ searchValue });
  };

  const [menuStatus, setMenuStatus] = useState<boolean>(true);

  const toggleMenu = () => setMenuStatus((prev) => !prev);

  return (
    <>
      <div className="w-full px-5 py-3 flex items-center justify-between md:hidden relative">
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
                <div className="w-full flex flex-row gap-0 items-center justify-center">
                  <input
                    type="text"
                    name="searchValue"
                    id="searchValue"
                    placeholder="Type here..."
                    value={searchValue}
                    onChange={({ target }) => setSearchValue(target.value)}
                    required={true}
                    className="w-full px-3 py-2 rounded-l-md bg-white text-blue-950 outline-none text-base font-mono"
                  />
                  <div className="p-2 rounded-r-md bg-yellow-700">
                    <FaSearch
                      onClick={handleSearch}
                      className="text-white font-black text-2xl cursor-pointer"
                    />
                  </div>
                </div>
                {props.links.map((link, idx) => (
                  <Link
                    href={link.to}
                    key={idx}
                    className={`uppercase font-medium text-base text-white ${f_inter_700.className} hover:bg-yellow-500 p-3 rounded-sm transition-all ease-linear`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default MobileNavbar;
