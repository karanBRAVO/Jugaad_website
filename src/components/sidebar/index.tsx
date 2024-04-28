import React from "react";
import Link from "next/link";
import SidebarLinks from "./sidebarlinks";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <>
      <div className="h-screen flex items-center justify-center shadow-md">
        <aside
          className="flex flex-row sm:flex-col items-center justify-evenly sm:justify-center fixed z-50 bottom-0 w-full sm:w-fit right-0 h-fit sm:h-full py-1 sm:py-2 text-black bg-[#fff] sm:bg-[#ffffff8a]"
        >
          {SidebarLinks.map((link, idx) => (
            <Link
              href={link.to}
              target="_blank"
              key={idx}
              className="px-1 md:px-3 py-2 sm:py-7"
            >
              <link.iconName
                className="text-black text-xl md:text-2xl font-black hover:text-[#531c1c] transition-all ease-linear"
                title={link.name}
              />
            </Link>
          ))}
        </aside>
      </div>
    </>
  );
};

export default Sidebar;
