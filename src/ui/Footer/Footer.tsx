import React from "react";
import Link from "next/link";
import Image from "next/image";

type Props = {};

const Footer = (props: Props) => {
  const links = [
    { name: "Home", to: "/" },
    { name: "About Us", to: "/aboutus" },
    { name: "Workshops", to: "/workshops" },
    { name: "Projects", to: "/projects" },
  ];

  return (
    <>
      <div className="w-full flex flex-row items-center justify-between px-10 py-4">
        <Image
          src={"/logo.jpg"}
          alt="Logo"
          width={100}
          height={100}
          className="w-40 h-32 rounded-full m-1"
        />
        <div className="flex flex-col items-start justify-start">
          {links.map((link, idx) => (
            <Link
              href={link.to}
              key={idx}
              className="font-medium text-white m-1 p-1 text-xl tracking-tight leading-tight"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex flex-col items-start justify-between">
          <h3 className="underline text-white font-medium text-2xl capitalize">
            Email Address
          </h3>
          <p className="flex flex-col items-start justify-start text-sm font-light text-gray-400 p-1">
            <span>jugaad@gmail.com</span>
          </p>
          <h3 className="underline text-white font-medium text-2xl capitalize">
            Phone Number
          </h3>
          <p className="flex flex-col items-start justify-start text-sm font-light text-gray-400 p-1">
            <span>Pranav - 8763542781</span>
            <span>Kunal - 1902938476</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
