import React from "react";
import { f_alata_400 } from "@/styles/fonts";
import Image from "next/image";

const WhatWeDo = () => {
  return (
    <>
      <div className="w-full py-10 flex flex-row items-center justify-start min-h-screen relative">
        <div className="flex flex-col items-center justify-center gap-10 bg-[#000000b1] py-5 px-8 w-2/3 relative">
          <h1
            className={`text-white ${f_alata_400.className} uppercase my-2 py-4 text-6xl leading-none tracking-wide`}
            style={{
              WebkitTextStrokeWidth: 3,
              WebkitTextStrokeColor: "#000",
            }}
          >
            What we Do
          </h1>
          <p className="text-base text-white font-normal py-4 px-16">
            From designing and building robots to programming and experimenting
            with cutting-edge technologies, Jugaad Robotics Club offers a wide
            range of activities and opportunities for members to dive deep into
            the world of robotics. Whether you're a seasoned expert or a
            complete beginner, there's something for everyone at Jugaad Robotics
            Club.
          </p>

          <div className="absolute p-1 -right-72">
            <div className="relative">
              <Image
                src={"/team/1.jpg"}
                alt="1"
                width={250}
                height={250}
                draggable={false}
                className="border-2 border-solid border-white rounded-full w-[270px] h-[270px] absolute -left-[190px] -top-[100px]"
              />
              <Image
                src={"/team/2.jpg"}
                alt="2"
                width={250}
                height={250}
                draggable={false}
                className="border-2 border-solid border-white rounded-full w-[270px] h-[270px] absolute -left-[70px] -bottom-16"
              />
              <Image
                src={"/team/3.jpg"}
                alt="3"
                width={250}
                height={250}
                draggable={false}
                className="border-2 border-solid border-white rounded-full w-[270px] h-[270px] relative -top-[90px] -right-[30px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatWeDo;
