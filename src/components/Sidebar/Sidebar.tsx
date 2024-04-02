import React from "react";
import Link from "next/link";
import {
  FaDiscord,
  FaSquareInstagram,
  FaTelegram,
  FaSquareWhatsapp,
} from "react-icons/fa6";
import { SidebarLinks } from "@/types/Links";

type Props = {};

const Sidebar = (props: Props) => {
  const links: SidebarLinks[] = [
    {
      name: "Whatsapp",
      iconName: FaSquareWhatsapp,
      to: "https://whatsapp.com",
    },
    { name: "Telegram", iconName: FaTelegram, to: "https://telegram.com" },
    {
      name: "Instagram",
      iconName: FaSquareInstagram,
      to: "https://instagram.com",
    },
    { name: "Discord", iconName: FaDiscord, to: "https://discord.com" },
  ];

  return (
    <>
      <aside
        className="flex flex-row sm:flex-col items-center justify-evenly sm:justify-center fixed z-50 bottom-0 w-full sm:w-fit right-0 h-fit sm:h-full py-1 sm:py-2 text-black"
        style={{
          background: "rgba(217, 217, 217, 0.40)",
        }}
      >
        {links.map((link, idx) => (
          <Link href={link.to} key={idx} className="px-1 md:px-3 py-2 sm:py-7">
            <link.iconName
              className="text-black text-xl md:text-2xl font-black hover:text-yellow-500 transition-all ease-linear"
              title={link.name}
            />
          </Link>
        ))}
      </aside>
    </>
  );
};

export default Sidebar;
