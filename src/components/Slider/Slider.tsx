"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { f_amaranth_400, f_alata_400 } from "@/styles/fonts";

type Props = {
  title: string;
  images: { src: string; alt: string; title: string }[];
};

const CustomSlider = (props: Props) => {
  return (
    <>
      <div className="w-full p-3 flex flex-col items-center my-8">
        <h1
          className={`text-7xl font-extrabold text-white my-1 leading-3 tracking-tight ${f_alata_400.className} p-5 my-5`}
          style={{
            WebkitTextStroke: "2.5px black",
          }}
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
    {
      src: "https://www.exabytes.co.id/blog/wp-content/uploads/2023/10/apa-itu-sharing-session-adalah-scaled.webp",
      alt: "/",
      title: "Moonshot",
    },
    {
      src: "https://miro.medium.com/v2/resize:fit:1150/1*0y80qr8USOq_w4gjOkDWiQ.jpeg",
      alt: "/",
      title: "Tinker@jugaad",
    },
    {
      src: "https://bsmedia.business-standard.com/_media/bs/img/article/2023-05/26/full/1685119195-4932.jpg?im=FeatureCrop,size=(826,465)",
      alt: "/",
      title: "Punjab Zonals",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Wk_wVJF3hA-bYcq5AurquPAuvtHXNlIV3Q&usqp=CAU",
      alt: "/",
      title: "Sessions",
    },
    {
      src: "https://www.exabytes.co.id/blog/wp-content/uploads/2023/10/apa-itu-sharing-session-adalah-scaled.webp",
      alt: "/",
      title: "Moonshot",
    },
    {
      src: "https://miro.medium.com/v2/resize:fit:1150/1*0y80qr8USOq_w4gjOkDWiQ.jpeg",
      alt: "/",
      title: "Tinker@jugaad",
    },
    {
      src: "https://bsmedia.business-standard.com/_media/bs/img/article/2023-05/26/full/1685119195-4932.jpg?im=FeatureCrop,size=(826,465)",
      alt: "/",
      title: "Punjab Zonals",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Wk_wVJF3hA-bYcq5AurquPAuvtHXNlIV3Q&usqp=CAU",
      alt: "/",
      title: "Sessions",
    },
  ];
  const images2 = [
    { src: "/projects/econveyer.jpg", alt: "/", title: "Econveyer" },
    { src: "/projects/faradaystation.jpg", alt: "/", title: "Faraday Station" },
    { src: "/projects/lfr.jpg", alt: "/", title: "LFR" },
    { src: "/projects/rccar.jpg", alt: "/", title: "RC Car" },
    { src: "/projects/econveyer.jpg", alt: "/", title: "Econveyer" },
    { src: "/projects/faradaystation.jpg", alt: "/", title: "Faraday Station" },
    { src: "/projects/lfr.jpg", alt: "/", title: "LFR" },
    { src: "/projects/rccar.jpg", alt: "/", title: "RC Car" },
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
