import React from "react";
import Image from "next/image";
import Link from "next/link";
import { f_inter_700 } from "@/styles/fonts";

type Props = {};

const Logo = (props: Props) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-1">
        <Link href={"/"}>
          <Image
            src={"/Logo_head.png"}
            alt="Logo"
            width={100}
            height={100}
            className="m-1 w-24 md:w-36"
          />
          <h1
            className={`text-white text-sm md:text-xl tracking-wider font-bold uppercase text-center ${f_inter_700.className}`}
          >
            Jugaad
          </h1>
        </Link>
      </div>
    </>
  );
};

export default Logo;
