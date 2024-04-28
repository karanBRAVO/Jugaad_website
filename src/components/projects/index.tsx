"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "@/styles/custom_slider.css";
import { Navigation, Pagination, Autoplay ,Mousewheel} from "swiper/modules";
import { f_amaranth_400, f_alata_400 } from "@/styles/fonts";
import { ImageType } from "@/types/Image";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { Images_Projects } from "./projects_data";
import Image from "next/image";
import styles from './styles.module.css'
import { FaForward, FaHandPointLeft, FaHandPointRight, FaReply, FaShare } from "react-icons/fa";

const projects = () => {
  return (
    <>
      <div className="w-full py-3 md:py-8 md:mt-16 px-[.5px] md:pr-8">
        <CustomSlider title="Projects" images={Images_Projects} />
      </div>
    </>
  );
};

export default projects;

type Props = {
  title: string;
  images: ImageType[];
};

const CustomSlider = (props: Props) => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.matchMedia("(min-width: 900px)").matches);
    };
    const checkIsTablet = () => {
      setIsTablet(window.matchMedia("(min-width: 500px)").matches);
    };

    checkIsDesktop();
    checkIsTablet();

    const mediaQuery_desktop = window.matchMedia("(min-width: 900px)");
    const mediaQuery_tablet = window.matchMedia("(min-width: 600px)");
    const handleResize_desktop = () => {
      setIsDesktop(mediaQuery_desktop.matches);
    };
    const handleResize_tablet = () => {
      setIsTablet(mediaQuery_tablet.matches);
    };

    mediaQuery_desktop.addEventListener("change", handleResize_desktop);
    mediaQuery_tablet.addEventListener("change", handleResize_tablet);
    return () => {
      mediaQuery_desktop.removeEventListener("change", handleResize_desktop);
      mediaQuery_tablet.removeEventListener("change", handleResize_tablet);
    };
  }, []);
 
  return (
    <div className={styles.body}>
      <div className={styles.background}>
        <h1
          className={`text-5xl md:text-7xl font-extrabold text-white z-10 my-1  md:leading-3 tracking-tight ${f_alata_400.className} p-1 my-2 md:p-5 md:my-5 text-wrap`}
          style={{
            WebkitTextStroke: "2.5px black",
          }}
        >
           <span className={styles.span} style={{ '--i': 0 } as React.CSSProperties}>P</span>
          <span className={styles.span} style={{ '--i': 1} as React.CSSProperties}>R</span>
          <span className={styles.span} style={{ '--i': 2 } as React.CSSProperties}>O</span>
          <span className={styles.span} style={{ '--i': 3 } as React.CSSProperties}>J</span>
          <span className={styles.span} style={{ '--i': 4 } as React.CSSProperties}>E</span>
          <span className={styles.span} style={{ '--i': 5 } as React.CSSProperties}>C</span>
          <span className={styles.span} style={{ '--i': 6 } as React.CSSProperties}>T</span>
          <span className={styles.span} style={{ '--i': 7 } as React.CSSProperties}>S</span>
          {/* {props.title} */}
        </h1>
        <div>
          
          <div className={styles.newsslider}>
            <Swiper
              lazyPreloadPrevNext={3}
              mousewheel={
                {thresholdDelta: 50}
              }
              effect={'fade'}
              grabCursor={true}
              centeredSlides={isDesktop?true : isTablet? false:true}
              slidesPerView={isDesktop ? 3 : isTablet ? 2 : 1}
              spaceBetween={30}
              autoplay={{ delay: 2000 }}
              loop={true}
              zoom={{maxRatio:2}}       
              pagination={{
                el: ".swiper-pagination",
                clickable: true,
                bulletClass: styles.paginationbullet,
                bulletActiveClass: styles.paginationbulletactive,
                renderBullet: function (index, className) {
                  return `${<span key={index} className={`${className} ${styles.paginationbullet}`} />}`;
                },
              }}
              
              navigation={{
                prevEl: ".prev",
                nextEl: ".next",
              }}
              modules={[Navigation, Pagination, Autoplay,Mousewheel]}
              className={styles.swipercontainer}
              simulateTouch={true}
            >
              <div className={`${styles.newssliderwrp}`}>
                {props.images.map((image, i) => (
                  <SwiperSlide
                    key={i}
                    className={`${styles.newsslideritem} ${styles.swiperslide}`}
                  >
                    <div className={styles.newsitem}>
                      <h5
                        className={styles.newstitle}
                      >
                        {image.title}
                      </h5>
                      <h3 className={styles.newstxt}>{image.content}</h3>
                      <div className={styles.newsimg}>
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={500}
                          height={100}
                          className={styles.img}
                        />
                    </div>
                    </div>
                  </SwiperSlide>
                ))}
              </div>
              <SlideNavigationButtons />
            </Swiper>
            </div>
        </div>
      </div>
    </div>
  );
};

const SlideNavigationButtons = () => {
  const swiper = useSwiper();

  const btnStyles = `m-2 p-1 sm:p-2 md:p-2 w-[50px] h-[50px] rounded-full cursor-pointer  border-2 hover:md:border-4 border-solid border-black hover:scale-75 bg-white active:scale-110`;
  const iconStyles = `text-lg sm:text-sm text-black text-black  md:text-3xl`;

  return (
    <div className="flex justify-center md:flex  pt-12 md:justify-center  z-10">
      <div className={`prev ${btnStyles}`} onClick={() => swiper.slidePrev(1)}>
        <FaHandPointLeft className={`${iconStyles}`} />
      </div>
      {/* <div className={styles.pagination}   ></div> */}
      <div className={`next ${btnStyles}`} onClick={() => swiper.slideNext()}>
        <FaHandPointRight className={`${iconStyles}`} />
      </div>
    </div>
  );
};
