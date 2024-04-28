import React, { useEffect, useRef, useState } from 'react';
import { f_alata_400 } from "@/styles/fonts";
import MissionImage from "./image/image";

const Mission = () => {
  return (
    <>
      {/* Mobile View */}
      <div className="min-h-screen w-full lg:hidden justify-center items-center flex flex-col gap-8  py-8">
        <h1 
          className={` text-5xl text-white ${f_alata_400.className}  leading-none  my-2`}
          style={{
            WebkitTextStrokeWidth: 3,
            WebkitTextStrokeColor: "#000",
          }}
        >
          Our Mission
        </h1>
        <div className="flex flex-col lg:flex-row justify-center items-center px-12 gap-14">
          <p
            className={`${f_alata_400.className} text-base text-center px-5 sm:px-12 w-full my-2 text-white bg-[#000000ba]`}
            >
            At Jugaad Robotics Club, our mission is simple yet ambitious: to
            ignite curiosity, inspire innovation, and empower individuals to
            shape the future through robotics and automation. We believe that
            through collaborative projects, workshops, and competitions, we can
            cultivate a generation of problem solvers and change makers who are
            ready to tackle real-world challenges head-on.
          </p>
          <MissionImage/>
        </div>
      </div>

      {/* Desktop View */}
      <div className="min-h-screen px-16 hidden lg:flex flex-row items-center justify-center">
        <div className="flex flex-col lg:flex-row gap-[7rem] w-full justify-between "> 
         <MissionImage/>
         <div className=" flex flex-col gap-10 justify-between items-center">
          <h1 className=" text-white text-[4rem] lg:text-[4.5rem]"
            >
            Our Mission
          </h1>
          <p
            className={`${f_alata_400.className} text-xl flex justify-center items-center xl:px-20 text-center py-4 my-2 text-white`}
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
      </div>
    </>
  );
};

export default Mission;
