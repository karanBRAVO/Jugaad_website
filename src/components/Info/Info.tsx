import React from "react";
import BidirectionalLine from "../BidirectionalLine/BidirectionalLine";
import { f_alata_400 } from "@/styles/fonts";

type Props = {};

const Info = (props: Props) => {
  return (
    <div className="py-14 px-[.5px]">
      <BidirectionalLine />
      <div
        className="w-full py-4 px-1 lg:px-24"
        style={{
          backdropFilter: "blur(8.649999618530273px)",
        }}
      >
        <p
          className={`text-white font-normal text-center text-sm md:text-xl leading-8 tracking-wider md:px-10 md:mx-9 my-5 ${f_alata_400.className}`}
        >
          At Jugaad, we believe in the limitless possibilities that emerge when
          creativity meets technology. As the premier robotic club of UIET
          College, we are dedicated to fostering a dynamic community of students
          passionate about robotics, embedded systems, programming, 3D
          designing, 3D printing, and various other cutting-edge technologies.
          Our club serves as a hub for innovation, collaboration, and hands-on
          learning, where students come together to explore, create, and push
          the boundaries of what is possible in the world of technology.
        </p>
      </div>
      <BidirectionalLine />
    </div>
  );
};

export default Info;
