import React from "react";

type Props = {};

const Masthead = (props: Props) => {
  return (
    <>
      <div
        className="w-fill min-h-screen py-5 px-9 relative"
        style={{
          background: "url('/contactBG.png') lightgray 50% / cover no-repeat",
        }}
      >
        <h1 className="uppercase font-black text-black text-6xl p-1 text-center absolute w-full bottom-8">
          CONTACT JUGAAD
        </h1>
      </div>
    </>
  );
};

export default Masthead;
