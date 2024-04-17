import React from "react";
import { f_alata_400 } from "@/styles/fonts";
import Image from "next/image";

const WhatWeDo = () => {
  return (
    <>
      {/* Mobile View */}
      <div className="xl:hidden flex flex-col items-center min-h-screen py-6 my-10">
        <h1
          className={`text-white ${f_alata_400.className} w-full text-center uppercase my-1 py-0 text-5xl leading-none tracking-wide`}
          style={{
            WebkitTextStrokeWidth: 3,
            WebkitTextStrokeColor: "#000",
          }}
        >
          What we Do
        </h1>
        <div className="flex flex-col lg:flex-row-reverse items-center justify-center py-5">
          <div className="relative mt-5 mb-16 lg:w-1/2">
            <Image
              src={"/team/1.jpg"}
              alt="1"
              width={250}
              height={250}
              draggable={false}
              className="border-2 border-solid border-white rounded-full w-[150px] h-[150px] md:w-[200px] md:h-[200px] absolute -left-[60px] -top-[10px]"
            />
            <Image
              src={"/team/2.jpg"}
              alt="2"
              width={250}
              height={250}
              draggable={false}
              className="border-2 border-solid border-white rounded-full w-[150px] h-[150px] md:w-[200px] md:h-[200px] absolute -left-[5px] -bottom-[70px]"
            />
            <Image
              src={"/team/3.jpg"}
              alt="3"
              width={250}
              height={250}
              draggable={false}
              className="border-2 border-solid border-white rounded-full w-[150px] h-[150px] md:w-[200px] md:h-[200px] relative -top-[20px] -right-[60px]"
            />
          </div>
          <p className="text-base text-white font-normal my-6 py-5 px-10 sm:px-20 bg-[#000000ba] w-full">
            From designing and building robots to programming and experimenting
            with cutting-edge technologies, Jugaad Robotics Club offers a wide
            range of activities and opportunities for members to dive deep into
            the world of robotics. Whether you{`'`}re a seasoned expert or a
            complete beginner, there{`'`}s something for everyone at Jugaad
            Robotics Club.
          </p>
        </div>
      </div>

      {/* Desktop View */}
      <div className="w-full py-10 hidden xl:flex flex-row items-center justify-start min-h-screen relative">
        <div className="flex flex-col items-center justify-center gap-10 bg-[#000000b1] py-10 px-8 w-[73%] relative">
          <h1
            className={`text-white ${f_alata_400.className} w-full text-center uppercase my-1 py-0 text-6xl leading-none tracking-wide`}
            style={{
              WebkitTextStrokeWidth: 3,
              WebkitTextStrokeColor: "#000",
            }}
          >
            What we Do
          </h1>
          <p className="text-base text-white font-normal py-0 px-52">
            From designing and building robots to programming and experimenting
            with cutting-edge technologies, Jugaad Robotics Club offers a wide
            range of activities and opportunities for members to dive deep into
            the world of robotics. Whether you{`'`}re a seasoned expert or a
            complete beginner, there{`'`}s something for everyone at Jugaad
            Robotics Club.
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
