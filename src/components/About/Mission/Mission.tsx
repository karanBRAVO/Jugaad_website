import React from "react";
import Image from "next/image";
import { f_alata_400 } from "@/styles/fonts";

const Mission = () => {
  return (
    <>
      {/* Mobile View */}
      <div className="min-h-screen w-full xl:hidden flex flex-col items-center justify-center py-4">
        <h1
          className={`text-5xl text-white ${f_alata_400.className} leading-none tracking-wide my-2`}
          style={{
            WebkitTextStrokeWidth: 3,
            WebkitTextStrokeColor: "#000",
          }}
        >
          Our Mission
        </h1>
        <div className="flex flex-col items-center md:flex-row px-2">
          <Image
            src={"/team/mission.png"}
            alt="mission"
            width={300}
            height={300}
            draggable={false}
            className="w-[300px] h-[300px] rounded-full border-4 border-solid my-4 border-white"
          />
          <p
            className={`${f_alata_400.className} text-base text-center px-5 sm:px-12 w-full py-4 my-2 text-white bg-[#000000ba]`}
          >
            At Jugaad Robotics Club, our mission is simple yet ambitious: to
            ignite curiosity, inspire innovation, and empower individuals to
            shape the future through robotics and automation. We believe that
            through collaborative projects, workshops, and competitions, we can
            cultivate a generation of problem solvers and change makers who are
            ready to tackle real-world challenges head-on.
          </p>
        </div>
      </div>

      {/* Desktop View */}
      <div className="min-h-screen w-full py-16 px-10 hidden xl:flex flex-row items-center justify-center">
        <div className="flex flex-col items-center justify-center p-1 w-[50%]">
          <Image
            src={"/team/mission.png"}
            alt="mission"
            width={250}
            height={300}
            draggable={false}
            className="w-[400px] h-[400px] rounded-full border-4 border-solid border-white"
          />
        </div>
        <div className="flex flex-col gap-6 items-center justify-center w-[100%] bg-[#000000ba]">
          <h1
            className={`text-6xl text-white ${f_alata_400.className} leading-none tracking-wide my-2`}
            style={{
              WebkitTextStrokeWidth: 3,
              WebkitTextStrokeColor: "#000",
            }}
          >
            Our Mission
          </h1>
          <p
            className={`${f_alata_400.className} text-xl text-center px-20 py-4 my-2 text-white`}
          >
            At Jugaad Robotics Club, our mission is simple yet ambitious: to
            ignite curiosity, inspire innovation, and empower individuals to
            shape the future through robotics and automation. We believe that
            through collaborative projects, workshops, and competitions, we can
            cultivate a generation of problem solvers and change makers who are
            ready to tackle real-world challenges head-on.
          </p>
        </div>
      </div>
    </>
  );
};

export default Mission;
