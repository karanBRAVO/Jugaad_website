import React from "react";
import BidirectionalLine from "../BidirectionalLine/BidirectionalLine";
import { f_alata_400 } from "@/styles/fonts";

type Props = {};

const Info = (props: Props) => {
  return (
    <>
      <div className="w-full p-3">
        <BidirectionalLine />

        <p
          className={`text-white font-normal text-center text-xl leading-8 tracking-wider px-10 mx-9 my-5 ${f_alata_400.className}`}
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

        <BidirectionalLine />
      </div>
    </>
  );
};

export default Info;
