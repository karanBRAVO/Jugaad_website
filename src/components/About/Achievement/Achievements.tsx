import React from "react";
import Image from "next/image";
import { f_alata_400 } from "@/styles/fonts";
import { AchievementsImages } from "./Data";
import "@/styles/flip_card.css";

const Achievements = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center  gap-16 py-5 px-4 my-10 mb-20">
        <h1
          className={`capitalize text-white  mx-1 px-1 text-[2.8rem] sm:text-5xl md:text-6xl leading-none tracking-normal ${f_alata_400.className}`}
        >
          Achievements
        </h1>
        <div className="flex flex-col sm:flex-row items-center  flex-wrap justify-evenly w-full my-2 ">
          {AchievementsImages.map((image, index) => (
            <div className=" w-[87%]  sm:w-[455px] my-6 h-max" key={index} >
                <div className=" w-full h-full flex flex-col sm:flex-row gap-6 items-center rounded-2xl justify-center border-2 border-white py-4 px-8 bg-stone-700">
                  <Image
                    src={image.back.src}
                    alt={image.back.alt}
                    width={800}
                    height={400}
                    draggable={false}
                    className={`w-[230px] h-[180px] sm:w-[190px] sm:h-[200px] border-2 border-black shadow-black shadow-lg rounded-lg`}
                  />
                  <p
                    className={`text-white text-sm ${f_alata_400} text-center w-full rounded-md`}
                  >
                    {image.back.title}
                  </p>
                </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Achievements;
