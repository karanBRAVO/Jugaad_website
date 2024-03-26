"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { Alata, Amaranth } from "next/font/google";

type Props = {
  title: string;
  images: { src: string; alt: string; title: string }[];
};

// fonts
const f_alata_400 = Alata({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
const f_amaranth_400 = Amaranth({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const CustomSlider = (props: Props) => {
  return (
    <>
      <div className="w-full p-3 flex flex-col items-center my-8">
        <h1
          className={`text-6xl font-extrabold text-white my-1 leading-3 tracking-tight ${f_alata_400.className} p-5 my-5`}
        >
          {props.title}
        </h1>

        <div className="py-1 px-14 my-5 w-full h-full">
          <Swiper
            slidesPerView={4}
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

const Slider = () => {
  const images1 = [
    { src: "/logo.jpg", alt: "/", title: "Moonshot" },
    { src: "/logo.jpg", alt: "/", title: "Tinker@jugaad" },
    { src: "/logo.jpg", alt: "/", title: "Punjab Zonals" },
    { src: "/logo.jpg", alt: "/", title: "Sessions" },
    { src: "/logo.jpg", alt: "/", title: "Moonshot" },
    { src: "/logo.jpg", alt: "/", title: "Sessions" },
  ];
  const images2 = [
    { src: "/logo.jpg", alt: "/", title: "Tinker@jugaad" },
    { src: "/logo.jpg", alt: "/", title: "Punjab Zonals" },
    { src: "/logo.jpg", alt: "/", title: "Tinker@jugaad" },
    { src: "/logo.jpg", alt: "/", title: "Moonshot" },
    { src: "/logo.jpg", alt: "/", title: "Punjab Zonals" },
    { src: "/logo.jpg", alt: "/", title: "Sessions" },
  ];

  return (
    <>
      <div className="w-full flex flex-col gap-3">
        <CustomSlider title="Session / Workshops" images={images1} />
        <CustomSlider title="Projects" images={images2} />
      </div>
    </>
  );
};

export default Slider;
