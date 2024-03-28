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
      <div className="w-full flex flex-row items-center justify-between px-10 py-4">
        <div className="flex flex-col items-center justify-center gap-1">
          <Link href={"/"}>
            <Image
              src={"/Logo_foot.png"}
              alt="Logo"
              width={100}
              height={100}
              className="m-1 w-64"
            />
            <h1
              className={`text-white text-xl tracking-wider font-bold uppercase text-center ${f_inter_800.className}`}
            >
              Jugaad
            </h1>
          </Link>
        </div>
        <div className="flex flex-col items-start justify-start">
          {links.map((link, idx) => (
            <Link
              href={link.to}
              key={idx}
              className={`font-medium text-white m-1 p-1 text-base leading-6 tracking-wide uppercase ${f_inika_700.className}`}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex flex-col items-start justify-between">
          <h3
            className={`underline text-white font-medium text-xl tracking-wide leading-7 capitalize ${f_inter_800.className}`}
          >
            Email Address
          </h3>
          <p
            className={`${f_inter_400.className} flex flex-col items-start justify-start leading-6 text-base font-light text-white p-1`}
          >
            <span>jugaadclubuiet@gmail.com</span>
          </p>
          <h3
            className={`underline text-white font-medium text-xl tracking-wide leading-7 capitalize ${f_inter_800.className}`}
          >
            Phone Number
          </h3>
          <p
            className={`${f_inter_400.className} flex flex-col items-start justify-start leading-6 text-base font-light text-white p-1`}
          >
            <span>Pranav - 8427311044 </span>
            <span>Kunal - 8604329827</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
