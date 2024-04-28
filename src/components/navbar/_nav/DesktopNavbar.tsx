"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { f_inter_700 } from "@/styles/fonts";
import { FaEnvelope, FaSearch } from "react-icons/fa";
import { FaHouse, FaPeopleGroup, FaRegFileLines } from "react-icons/fa6";
import styles from "./styles.module.css";

const DesktopNavbar = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  const handleSearch = () => {
    console.log({ searchValue });
  };

  return (
    <>
      <div className="w-full p-3 md:flex items-center justify-around hidden">
        {/* Logo */}
        <div className="flex flex-col items-center justify-center gap-1">
          <Link href={"/"}>
            <Image
              src={"/Logo.png"}
              alt="Logo"
              width={400}
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
        <div className="flex flex-row items-center justify-between ">
          <div className="hover:scale-125 active:scale-75 flex flex-row justify-center gap-12 ">
            <Homeicon />
            <Abouticon />
            <Teamicon />
            <Contacticon />
          </div>
        </div>

        {/* Search Button */}
        <div className="flex flex-row items-center gap-2">
          <input
            type="text"
            name="searchValue"
            id="searchValue"
            placeholder="Type here..."
            value={searchValue}
            onChange={({ target }) => setSearchValue(target.value)}
            required={true}
            className="p-1 rounded-md border-2 border-solid border-white outline-none text-black font-light font-mono placeholder:text-slate-400"
          />
          <FaSearch
            onClick={handleSearch}
            className="text-white font-black text-2xl cursor-pointer mx-2 hover:text-yellow-500 hover:scale-110 transition-all ease-in"
            title="Search Jugaad"
          />
        </div>
      </div>
    </>
  );
};

export default DesktopNavbar;

const Homeicon = () => {
  return (
    <button className={styles.btn}>
      <Link href={"/"}>
        <span className={styles.sign}>
          <FaHouse className="text-white w-[30px]" />
        </span>
        <span className={styles.contents}>Home</span>
      </Link>
    </button>
  );
};
const Abouticon = () => {
  return (
    <button className={styles.btn}>
      <Link href={"/About"}>
        <span className={styles.sign}>
          <FaRegFileLines className="text-white w-[30px]" />
        </span>
        <span className={styles.contents}>About</span>
      </Link>
    </button>
  );
};
const Teamicon = () => {
  return (
    <button className={styles.btn}>
      <Link href={"/Team"}>
        <span className={styles.sign}>
          <FaPeopleGroup className="text-white w-[30px]" />
        </span>
        <span className={styles.contents}>Team</span>
      </Link>
    </button>
  );
};
const Contacticon = () => {
  return (
    <button className={styles.btn}>
      <Link href={"/Contact"}>
        <span className={styles.sign}>
          <FaEnvelope className="text-white w-[30px]" />
        </span>
        <span className={styles.contents}>Contact</span>
      </Link>
    </button>
  );
};
