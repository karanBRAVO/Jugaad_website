import React from "react";
import { Judson, Kaisei_Opti, Inter_Tight } from "next/font/google";

type Props = {};

// fonts
const f_judson_700 = Judson({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});
const f_kaiseiOpti_700 = Kaisei_Opti({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});
const f_interTight_700 = Inter_Tight({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

const Masthead = (props: Props) => {
  return (
    <>
      <div className="w-full h-full flex items-center justify-center p-3">
        <div className="w-full flex flex-col items-center justify-between p-4">
          <h1
            className={`capitalize text-white font-black text-9xl w-full flex flex-col items-center justify-center gap-7 my-6 p-5 ${f_judson_700.className} leading-7 tracking-widest`}
          >
            Jugaad
            <span
              className={`font-black leading-none tracking-widest text-white text-4xl my-5 p-5 ${f_interTight_700.className}`}
            >
              The Robotics Club of UIET
            </span>
          </h1>
          <h2
            className={`text-white font-black text-7xl flex flex-row items-center justify-center w-full gap-4 capitalize my-5 p-2 self-end ${f_kaiseiOpti_700.className} leading-6 tracking-wide`}
          >
            <span>Frugal</span>•<span>Inclusive</span>•<span>Flexible</span>
          </h2>
        </div>
      </div>
    </>
  );
};

export default Masthead;
