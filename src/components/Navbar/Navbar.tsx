import React from "react";
import { NavigationLinks } from "@/types/Links";
import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./DesktopNavbar";

type Props = {};

const Navbar = (props: Props) => {
  const links: NavigationLinks[] = [
    { name: "Home", to: "/" },
    { name: "About", to: "/aboutus" },
    { name: "Activities", to: "/activities" },
  ];

  return (
    <>
      <MobileNavbar links={links} />
      <DesktopNavbar links={links} />
    </>
  );
};

export default Navbar;
