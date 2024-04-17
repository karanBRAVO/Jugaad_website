import React from "react";
import Image from "next/image";
import { f_alata_400 } from "@/styles/fonts";
import { LeftBg, RightBg } from "./bg";

const Masthead = () => {
  return (
    <>
      <div className="w-full min-h-screen flex flex-row items-center justify-center pt-16 relative">
        <div className="absolute top-[0] left-0 w-[68%]">
          <LeftBg />
        </div>
        <div className="absolute top-[0] right-8 w-[32%]">
          <RightBg />
        </div>
        <div className="relative flex items-center flex-col justify-center px-4 py-5 w-1/2">
          <h1
            className={`uppercase text-white text-6xl ${f_alata_400.className} leading-none tracking-wide`}
            style={{
              WebkitTextStrokeWidth: 3,
              WebkitTextStrokeColor: "#000",
            }}
          >
            What is Jugaad
          </h1>
          <p className="flex flex-col items-start justify-start gap-10 text-white text-base py-8 px-[87px]">
            <span>
              Jugaad at UIET, Panjab University, Chandigarh, transcends being
              just a robotics club; it's a vibrant community driven by the
              fusion of creativity and technology. As the foremost robotic club
              in UIET College, we're dedicated to nurturing students passionate
              about robotics, embedded systems, programming, 3D designing, 3D
              printing, and cutting-edge technologies.
            </span>
            <span>
              Jugaad Robotics Club is not just a club; it's a community of
              passionate individuals driven by innovation, creativity, and a
              shared love for robotics. Founded with the aim of fostering a
              culture of technological exploration and hands-on learning, Jugaad
              Robotics Club has become a hub for aspiring engineers and
              enthusiasts alike.
            </span>
          </p>
        </div>
        <div className="relative p-1 w-1/2 flex items-center justify-center">
          <Image
            src={"/team/team.jpg"}
            alt="Jugaad Team"
            width={250}
            height={200}
            draggable={false}
            className="w-[590px] h-[300px] border-4 border-solid border-black rounded-[50px]"
            style={{
              boxShadow: "20px 20px 4px 0px #282829",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Masthead;
