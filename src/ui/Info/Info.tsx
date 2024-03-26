import React from "react";
import { Alata } from "next/font/google";

type Props = {};

// fonts
const f_alata_400 = Alata({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

// bi-directional arrow
const BDLine = () => {
  return (
    <>
      <div className="w-full flex items-center justify-center p-2">
        <svg viewBox="0 0 300 10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <marker
              id="arrow-start"
              viewBox="0 0 10 10"
              refX="5"
              refY="5"
              markerWidth="5"
              markerHeight="5"
              orient="auto-start-reverse"
              stroke="white"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" fill="white" />
            </marker>
            <marker
              id="arrow-end"
              viewBox="0 0 10 10"
              refX="5"
              refY="5"
              markerWidth="5"
              markerHeight="5"
              orient="auto"
              stroke="white"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" fill="white" />
            </marker>
          </defs>
          <line
            x1="10"
            y1="5"
            x2="290"
            y2="5"
            stroke="white"
            markerStart="url(#arrow-start)"
            markerEnd="url(#arrow-end)"
          />
        </svg>
      </div>
    </>
  );
};

const Info = (props: Props) => {
  return (
    <>
      <div className="w-full p-3">
        <BDLine />

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

        <BDLine />
      </div>
    </>
  );
};

export default Info;
