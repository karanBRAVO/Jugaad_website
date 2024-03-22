import React from "react";

type Props = {};

const Masthead = (props: Props) => {
  return (
    <>
      <div className="w-full h-full flex items-center justify-center p-3">
        <div className="w-full flex flex-col items-center justify-between p-4">
          <h1 className="capitalize text-white font-black text-9xl w-full flex flex-col items-center justify-center gap-7 my-5 p-2">
            Jugaad
            <span className="font-black leading-none tracking-normal text-red-700 text-4xl my-2 p-3">
              The Robotics Club of UIET
            </span>
          </h1>
          <h2 className="text-zinc-400 font-black text-7xl flex flex-row items-center justify-center w-full gap-4 capitalize my-5 p-2 self-end">
            <span>Frugal</span>•<span>Inclusive</span>•<span>Flexible</span>
          </h2>
        </div>
      </div>
    </>
  );
};

export default Masthead;
