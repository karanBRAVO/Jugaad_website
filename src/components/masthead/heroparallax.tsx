"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    thumbnail: string;
  }[];

}) => {
  const firstRow = products.slice(0, 7);
  const secondRow = products.slice(5, 12);
  const thirdRow = products.slice(3,9);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 50 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [10, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.25], [0.25, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [18, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-650,150]),
    springConfig
  );
  return (
    <div
      ref={ref}
      style={{ position: "relative" }} 
      className="h-[250vh] sm:h-[220vh] pt-52 sm:pt-36 overflow-hidden antialiased relative flex flex-col  [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-5 mb-10 md:mb-16  border-solid border-slate-100 border-2">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-10 md:mb-20 space-x-5 border-solid border-slate-100 border-2 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex md:hidden flex-row-reverse space-x-reverse space-x-5 mb-16  border-solid border-slate-100 border-2">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-16 sm:py-28 md:py-40 px-4 w-full left-0 top-0 ">
      <div>
      <h1 className="text-7xl sm:text-8xl font-bold opacity-100 dark:text-white pb-10 px-8 lg:px-8 xl:px-0"  style={{
              WebkitTextStroke: "1.15px #4a4949",
              textShadow: "0 1px 0 #ccc, \
              0 2px 0 #c9c9c9, \
              0 3px 0 #bbb, \
              0 4px 0 #b9b9b9, \
              0 5px 0 #aaa, \
              0 6px 1px rgba(0,0,0,.1), \
              0 1px 3px rgba(0,0,0,.3), \
              0 3px 5px rgba(0,0,0,.2), \
              0 5px 10px rgba(0,0,0,.25), \
              0 10px 10px rgba(0,0,0,.2), \
              0 20px 20px rgba(0,0,0,.15), \
              0 30px 20px rgba(0,0,0,.1)" 
            }} >Jugaad</h1>
        </div>
      <div>
        <h1 className="text-4xl md:text-5xl font-bold dark:text-white flex gap-10 px-8 lg:px-8 xl:px-0" 
            style={{textShadow:" 0px 4px 3px rgba(0,0,0,0.4),\
              0px 8px 13px rgba(115,114,109,0.6),\
              0px 18px 23px rgba(115,114,109,0.6)"}} >The Robotic Club of UIET
        </h1> 
        </div>
      <p className={`text-white font-black text-xl sm:text-2xl md:text-2xl lg:text-3xl w-full gap-2 sm:gap-3 md:gap-4 capitalize mt-5  self-end  leading-6 tracking-wide px-8 lg:px-8 xl:px-0`}>
      Frugal • Inclusive • Flexible
      </p>
      <p className="max-w-5xl text-sm md:text-xl sm:text-lg  mt-2 md:mt-2 dark:text-neutral-200 px-8 lg:px-8 xl:px-0"> 
          At Jugaad, we believe in the limitless possibilities that emerge when
          creativity meets technology. As the premier robotic club of UIET
          College, we are dedicated to fostering a dynamic community of students
          passionate about robotics, embedded systems, programming, 3D
          designing, 3D printing, and various other cutting-edge technologies.
          Our club serves as a hub for innovation, collaboration, and hands-on
          learning, where students come together to explore, create, and push
          the boundaries of what is possible in the world of technology.
      </p>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-52 w-[10rem] sm:h-[15rem] sm:w-[22rem]  relative flex-shrink-0 hover:border-solid hover:border-stone-500 hover:border-4 border-solid border-slate-100 border-2"
    >
        <Image
          src={product.thumbnail}
          height="500"
          width="500"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
        <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 text-wrap bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4  text-xl md:text-3xl opacity-0 group-hover/product:opacity-100 text-white text-wrap">
        {product.title}
      </h2>
    </motion.div>
  );
};
export default HeroParallax;
