import React from "react";
import { f_judson_700, f_dmsans_700, f_kaiseiOpti_700 } from "@/styles/fonts";

type Props = {};

const Masthead = (props: Props) => {
  return (
    <>
      <div className="w-full h-full flex items-center justify-center p-3">
        <div className="w-full flex flex-col items-center justify-between p-4">
          <h1
            style={{
              WebkitTextStroke: "3px black",
            }}
            className={`capitalize text-white font-black text-9xl w-full flex flex-col items-center justify-center gap-7 my-6 p-5 ${f_judson_700.className} leading-7 tracking-widest`}
          >
            Jugaad
            <span
              className={`font-black leading-none tracking-widest text-white text-4xl my-5 p-5 ${f_dmsans_700.className}`}
              style={{
                WebkitTextStroke: "0.05px black",
              }}
            >
              The Robotics Club of UIET
            </span>
          </h1>
          <h2
            className={`text-white font-black text-7xl flex flex-row items-center justify-center w-full gap-4 capitalize my-5 p-2 self-end ${f_kaiseiOpti_700.className} leading-6 tracking-wide`}
          >
            <span
              style={{
                WebkitTextStroke: "2px #302F2A",
              }}
            >
              Frugal
            </span>
            •
            <span
              style={{
                WebkitTextStroke: "2px #302F2A",
              }}
            >
              Inclusive
            </span>
            •
            <span
              style={{
                WebkitTextStroke: "2px #302F2A",
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
