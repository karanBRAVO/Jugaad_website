"use client";
import { Title } from "./text"
function Typecontent() {
  const Wordone = [
    {
      text: "Innovating",
    },
    {
      text: "Beyond",
    },
    {
      text: "Boundaries:",
    },
 
  ];
  const Wordtwo = [

    {
      text: "The",
    },
    {
      text: "Future",
    },
    {
      text: "of",
    },
    {
      text: "Robotics",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center "> 
      <Title words={Wordone} />
      <Title words={Wordtwo} />
    </div>
  );
}

export default Typecontent;
