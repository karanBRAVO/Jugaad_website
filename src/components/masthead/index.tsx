"use client";
import React from "react";
import HeroParallax from "./heroparallax";

 const HeroParallaxPage = ()=>{
  return (
  <div style={{ position: "relative" }}> 
    <HeroParallax products={Products} />
  </div>);
}
export const Products = [
  {
    title: "Econveyer",
    thumbnail:
      "/projects/econveyer.jpg",
  },
  {
    title: "Moonshot (The Chandrayaan-3 Landing)",
    thumbnail:
      "/projects/moonshot.jpg",
  },
  {
    title: "Tesla Coil",
    thumbnail:
      "/projects/teslacoil.jpg",
  },
  {
    title: "Tinker@Jugaad (2023)",
    thumbnail:
      "/projects/tinker2023.jpg",
  },
  {
    title: "LFR",
    thumbnail:
      "/projects/lfr.jpg",
  },
  {
    title: "Jugaad Events in Goonj 2024-Patience Tester",
    thumbnail:
      "/projects/patiencetester.jpg",
  },
  {
    title: "RC Car",
    thumbnail:
      "/projects/rccar.jpg",
  },
  {
    title: "Tinker@Jugaad (2024)",
    thumbnail:
      "/projects/tinker2024.jpg",
  },
  {
    title: "Nano Navigator",
    thumbnail:
      "/projects/nanonavigator.jpg",
  },
  {
    title: "Faraday Station",
    thumbnail:
      "/projects/faradaystation.jpg",
  },
  {
    title: "Mechamaze Challenge",
    thumbnail:
      "/mechamaze.jpg",
  },
  {
    title: "Techzibition2023",
    thumbnail:
      "/projects/cuvisit.jpg",
  }    
];

export default HeroParallaxPage;
