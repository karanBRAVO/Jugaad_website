"use client";

import React, { useState, useEffect } from "react";
import MobileNavbar from "./_nav/MobileNavbar";
import DesktopNavbar from "./_nav/DesktopNavbar";
import NavLinks from "./navlinks";

const Navbar = () => {
  

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full z-30 sm:px-5 transition-all bg-neutral-950/85 `}
    >
      <MobileNavbar links={NavLinks} />
      <DesktopNavbar/>
    </nav>
  );
};

export default Navbar;
