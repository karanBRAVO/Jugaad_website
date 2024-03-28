"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { f_amaranth_400, f_alata_400 } from "@/styles/fonts";
import { ImageType } from "@/types/Image";

type Props = {
  title: string;
  images: ImageType[];
};

const CustomSlider = (props: Props) => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.matchMedia("(min-width: 960px)").matches);
    };

    checkIsDesktop();

    const mediaQuery = window.matchMedia("(min-width: 960px)");
    const handleResize = () => {
      setIsDesktop(mediaQuery.matches);
    };

    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return (
    <>
      <div className="w-full p-1 md:p-3 flex flex-col items-center my-4 md:my-8">
        <h1
          className={`text-5xl md:text-7xl font-extrabold text-white my-1 md:leading-3 tracking-tight ${f_alata_400.className} p-1 my-2 md:p-5 md:my-5 text-wrap`}
          style={{
            WebkitTextStroke: "2.5px black",
          }}
        >
          {props.title}
        </h1>

        <div className="py-1 px-3 md:px-14 my-5 w-full h-full">
          <Swiper
            slidesPerView={isDesktop ? 4 : 1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="w-full h-full my-5"
          >
            {props.images.map((image, i) => (
              <SwiperSlide
                key={i}
                className="bg-black border-4 border-solid border-white w-full h-full text-white flex items-center"
              >
                <h5
                  className={`${f_amaranth_400.className} text-2xl font-normal text-white text-center w-full bg-black p-5`}
                >
                  {image.title}
                </h5>
                <img
                  src={image.src}
                  alt={image.alt}
                  width={150}
                  height={100}
                  className="w-full h-72 pt-5 pb-2 px-2"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default CustomSlider;
