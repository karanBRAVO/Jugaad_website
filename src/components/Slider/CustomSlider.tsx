"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { f_amaranth_400, f_alata_400 } from "@/styles/fonts";
import { ImageType } from "@/types/Image";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import "@/styles/custom_slider.css";

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
      <div className="w-full p-1 md:p-5 flex flex-col items-center my-10 md:my-12 relative">
        <h1
          className={`text-5xl md:text-7xl font-extrabold text-white my-1 md:leading-3 tracking-tight ${f_alata_400.className} p-1 my-2 md:p-5 md:my-5 text-wrap`}
          style={{
            WebkitTextStroke: "2.5px black",
          }}
        >
          {props.title}
        </h1>

        <div className="py-1 px-2 md:px-14 my-5 w-full h-full relative">
          <Swiper
            effect={"fade"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={isDesktop ? 3 : 1}
            spaceBetween={30}
            autoplay={{ delay: 2500 }}
            loop={true}
            zoom={true}
            pagination={{
              clickable: true,
              renderBullet: function (index, className) {
                return '<span class="' + className + '">' + "</span>";
              },
            }}
            navigation={{
              prevEl: ".prev",
              nextEl: ".next",
            }}
            modules={[Navigation, Pagination, Autoplay]}
            className="w-full h-full my-5"
          >
            {props.images.map((image, i) => (
              <SwiperSlide
                key={i}
                className="bg-black border-4 border-solid border-white w-full h-full text-white flex items-center"
              >
                <h5
                  className={`${f_amaranth_400.className} text-nowrap text-2xl font-normal text-white text-center w-full bg-black p-5`}
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
            <SlideNavigationButtons />
          </Swiper>
        </div>
      </div>
    </>
  );
};

const SlideNavigationButtons = () => {
  const swiper = useSwiper();

  const btnStyles = `p-1 sm:p-2 md:p-3 rounded-full bg-white w-fit cursor-pointer border-2 md:border-4 border-solid border-black`;
  const iconStyles = `font-black text-black text-sm sm:text-base md:text-xl`;

  return (
    <div className="flex w-full items-center justify-between absolute my-10 left-0 bottom-1/2 translate-y-1/2 z-10">
      <div className={`prev ${btnStyles}`} onClick={() => swiper.slidePrev(1)}>
        <FaArrowLeftLong className={`${iconStyles}`} />
      </div>
      <div className={`next ${btnStyles}`} onClick={() => swiper.slideNext()}>
        <FaArrowRightLong className={`${iconStyles}`} />
      </div>
    </div>
  );
};

export default CustomSlider;
