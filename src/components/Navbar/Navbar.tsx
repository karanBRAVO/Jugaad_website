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
      <div className="fixed top-0 left-0 right-0 w-full bg-[#00000099] z-10 sm:px-5">
        <MobileNavbar links={links} />
        <DesktopNavbar links={links} />
      </div>
    </>
  );
};

export default Navbar;
