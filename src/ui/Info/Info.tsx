import React from "react";

type Props = {};

const BDLine = () => {
  return (
    <>
      <svg viewBox="0 0 300 10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <marker
            id="arrow-start"
            viewBox="0 0 10 10"
            refX="5"
            refY="5"
            markerWidth="6"
            markerHeight="6"
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
            markerWidth="6"
            markerHeight="6"
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
    </>
  );
};

const Info = (props: Props) => {
  return (
    <>
      <div className="w-full p-3">
        <div className="w-full flex items-center justify-center p-2">
          <BDLine />
        </div>

        <p className="text-white font-normal text-center text-xl px-10 my-5">
          At Jugaad, we believe in the limitless possibilities that emerges when
          creativity meets technology. As a premier robotic club of UIET
          College, we are dedicated to fostering a dynamic community of students
          passionate about robotics, embedded systems, programming, 3D
          designing, 3D printing, and various other cutting edge technologies.
          Our club serves as a hub for innovation, collaboration, and hands-on
          learning, where students come together to explore, create and push the
          boundaries of what is possible in the world of technology.
        </p>

        <div className="w-full flex items-center justify-center p-2">
          <BDLine />
        </div>
      </div>
    </>
  );
};

export default Info;
