"use client";

import React, { useState, useEffect } from "react";
import MobileNavbar from "./_nav/MobileNavbar";
import DesktopNavbar from "./_nav/DesktopNavbar";
import NavLinks from "./navlinks";

const Navbar = () => {
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
    <nav
      className={`fixed top-0 left-0 right-0 w-full z-10 sm:px-5 transition-all ${
        scrolled ? "bg-[#000000c6]" : "bg-transparent"
      }`}
    >
      <MobileNavbar links={NavLinks} />
      <DesktopNavbar links={NavLinks} />
    </nav>
  );
};

export default Navbar;
