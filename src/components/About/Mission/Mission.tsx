import React from "react";
import Image from "next/image";
import { f_alata_400 } from "@/styles/fonts";

const Mission = () => {
  return (
    <>
      <div className="min-h-screen w-full py-16 px-10 flex flex-row justify-center">
        <div className="flex flex-col items-center justify-center p-1 w-1/2">
          <Image
            src={"/team/mission.png"}
            alt="mission"
            width={250}
            height={300}
            draggable={false}
            className="w-[400px] h-[400px] rounded-full border-4 border-solid border-white"
          />
        </div>
        <div className="flex flex-col gap-6 items-center justify-center w-1/2">
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
