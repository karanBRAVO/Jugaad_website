import React from "react";
import Image from "next/image";
import { f_alata_400 } from "@/styles/fonts";
import { AchievementsImages } from "./Data";
import "@/styles/flip_card.css";

const Achievements = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center py-5 px-4">
        <h1
          className={`capitalize text-white my-4 mx-1 py-2 text-6xl leading-none tracking-normal ${f_alata_400.className}`}
          style={{
            WebkitTextStrokeWidth: 3,
            WebkitTextStrokeColor: "#000",
          }}
        >
          Achievements
        </h1>
        <div className="flex flex-row items-start justify-evenly w-full my-2">
          {AchievementsImages.map((image, index) => (
            <div className="flip-card" key={index}>
              <div className="flip-card-inner w-full h-full">
                <div className="flip-card-front w-full h-full">
                  <Image
                    src={image.front.src}
                    alt={image.front.alt}
                    width={300}
                    height={300}
                    draggable={false}
                    className={`w-full h-full border-4 rounded-lg border-solid border-white`}
                  />
                </div>
                <div className="flip-card-back w-full h-full flex flex-col items-center justify-center bg-black">
                  <Image
                    src={image.back.src}
                    alt={image.back.alt}
                    width={300}
                    height={300}
                    draggable={false}
                    className={`w-full h-[80%] px-5 py-4`}
                  />
                  <p
                    className={`text-white text-sm ${f_alata_400} text-center w-full rounded-md`}
                  >
                    {image.back.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Achievements;
