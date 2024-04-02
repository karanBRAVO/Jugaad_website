"use client";

import React, { useState, useEffect } from "react";
import { NavigationLinks } from "@/types/Links";
import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./DesktopNavbar";

const Navbar = () => {
  const links: NavigationLinks[] = [
    { name: "Home", to: "/" },
    { name: "About", to: "/aboutus" },
    { name: "Activities", to: "/activities" },
  ];

  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const scrollableContainer = document.getElementById(
      "scrollable-container-parallax"
    );

    const setBG = () => {
      const isScrolled = (scrollableContainer?.scrollTop || 0) > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", setBG, true);

    return () => {
      window.removeEventListener("scroll", setBG, true);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 w-full z-10 sm:px-5 transition-all ${
        scrolled ? "bg-[#00000099]" : "bg-transparent"
      }`}
    >
      <MobileNavbar links={links} />
      <DesktopNavbar links={links} />
    </div>
  );
};

export default Navbar;
