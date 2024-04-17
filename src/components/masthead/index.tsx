"use client";

import React, { useEffect, useState } from "react";
import { f_judson_700, f_dmsans_700, f_kaiseiOpti_700 } from "@/styles/fonts";

type Props = {};

const Masthead = (props: Props) => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.matchMedia("(min-width: 960px)").matches);
    };

    checkIsDesktop();

    const mediaQuery = window.matchMedia("(min-width: 960px)");
    const handleResize = () => {
      setIsDesktop(mediaQuery.matches);
    };

    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return (
    <>
      <div className="w-full min-h-screen h-full flex items-center justify-center">
        <div className="w-full flex flex-col items-center justify-center bg-[#00000099] px-1 py-6 mt-10">
          <h1
            className={`capitalize text-white font-black text-7xl md:text-8xl w-full flex flex-col items-center justify-center gap-7 ${f_judson_700.className} leading-7 tracking-widest`}
            style={{
              WebkitTextStroke: "1.15px black",
            }}
          >
            Jugaad
            <span
              className={`font-black leading-none tracking-widest text-white text-base sm:text-xl md:text-2xl lg:text-3xl my-5 sm:p-5 ${f_dmsans_700.className} w-full text-center text-nowrap`}
              style={{
                WebkitTextStroke: "0.05px black",
              }}
            >
              The Robotics Club of UIET
            </span>
          </h1>
          <h2
            className={`text-white font-black text-xl sm:text-2xl md:text-3xl lg:text-6xl flex flex-row items-center justify-center w-full gap-2 sm:gap-3 md:gap-4 capitalize my-5 p-2 self-end ${f_kaiseiOpti_700.className} leading-6 tracking-wide`}
          >
            <span
              style={{
                WebkitTextStroke: !isDesktop ? "0.05px #302F2A" : "2px #302F2A",
              }}
            >
              Frugal
            </span>
            •
            <span
              style={{
                WebkitTextStroke: !isDesktop ? "0.05px #302F2A" : "2px #302F2A",
              }}
            >
              Inclusive
            </span>
            •
            <span
              style={{
                WebkitTextStroke: !isDesktop ? "0.05px #302F2A" : "2px #302F2A",
              }}
            >
              Flexible
            </span>
          </h2>
        </div>
      </div>
    </>
  );
};

export default Masthead;
