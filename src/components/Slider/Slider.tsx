import React from "react";
import CustomSlider from "./CustomSlider";

type Props = {};

const Slider = (props: Props) => {
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
