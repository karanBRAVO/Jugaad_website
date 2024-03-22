"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

type Props = {
  title: string;
  images: { src: string; alt: string }[];
};

const CustomSlider = (props: Props) => {
  return (
    <>
      <div className="w-full p-3 flex flex-col items-center">
        <h1 className="text-6xl font-extrabold text-white my-1 leading-tight tracking-normal">
          {props.title}
        </h1>

        <div className="p-1 my-5 w-full h-full">
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
              <SwiperSlide key={i} className="bg-blue-400 w-full h-full">
                <img
                  src={image.src}
                  alt={image.alt}
                  width={150}
                  height={100}
                  className="border-4 border-solid border-white w-full h-72"
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
    { src: "/logo.jpg", alt: "/" },
    { src: "/logo.jpg", alt: "/" },
    { src: "/logo.jpg", alt: "/" },
    { src: "/logo.jpg", alt: "/" },
    { src: "/logo.jpg", alt: "/" },
    { src: "/logo.jpg", alt: "/" },
  ];

  const images2 = [
    { src: "/logo.jpg", alt: "/" },
    { src: "/logo.jpg", alt: "/" },
    { src: "/logo.jpg", alt: "/" },
    { src: "/logo.jpg", alt: "/" },
    { src: "/logo.jpg", alt: "/" },
    { src: "/logo.jpg", alt: "/" },
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
