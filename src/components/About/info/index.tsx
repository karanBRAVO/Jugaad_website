"use client";
import React from "react";
import { BackgroundGradient } from "./Info";
import Cubemodel from "../cube/cube";
export function Infobox() {
  return (
    <div  >
      <div  className="flex flex-col gap-12 lg:gap-0 my-8 lg:flex-row justify-around items-center">
        <BackgroundGradient className="rounded-[22px] h-full  sm:p-7 flex flex-col justify-center items-center  bg-white dark:bg-zinc-900 shadow-inner shadow-white"> 
            <p className="relative flex flex-col items-start justify-start gap-6 text-white text-base  px-2 w-full text-center my-5 ">
            <span>
                Jugaad Robotics Club is not just a club; it{`'`}s a community of
                passionate individuals driven by innovation, creativity, and a
                shared love for robotics. Founded with the aim of fostering a
                culture of technological exploration and hands-on learning, Jugaad
                Robotics Club has become a hub for aspiring engineers and
                enthusiasts alike.
            </span>
            <span className="hidden md:contents">
                    Jugaad at UIET, Panjab University, Chandigarh, transcends being just
                    a robotics club; it{`'`}s a vibrant community driven by the fusion
                    of creativity and technology. As the foremost robotic club in UIET
                    College, we{`'`}re dedicated to nurturing students passionate about
                    robotics, embedded systems, programming, 3D designing, 3D printing,
                    and cutting-edge technologies.
                </span>
            </p>
        </BackgroundGradient>
        <Cubemodel/>
      </div>
    </div>
  );
}
export default Infobox;
