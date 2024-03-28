import React from "react";
import Link from "next/link";
import { IconType } from "react-icons";
import {
  FaDiscord,
  FaSquareInstagram,
  FaTelegram,
  FaSquareWhatsapp,
} from "react-icons/fa6";

type Props = {};

interface SidebarLinks {
  name: string;
  iconName: IconType;
  linkTo: string;
}

const Sidebar = (props: Props) => {
  const links: SidebarLinks[] = [
    {
      name: "Whatsapp",
      iconName: FaSquareWhatsapp,
      linkTo: "https://whatsapp.com",
    },
    { name: "Telegram", iconName: FaTelegram, linkTo: "https://telegram.com" },
    {
      name: "Instagram",
      iconName: FaSquareInstagram,
      linkTo: "https://instagram.com",
    },
    { name: "Discord", iconName: FaDiscord, linkTo: "https://discord.com" },
  ];

  return (
    <>
      <aside className="flex flex-col items-center justify-center bg-white py-2">
        {links.map((link, idx) => (
          <Link href={link.linkTo} key={idx} className="px-3 py-7">
            <link.iconName
              className="text-black text-2xl font-black hover:text-red-700 transition-all ease-linear"
              title={link.name}
            />
          </Link>
        ))}
      </aside>
    </>
  );
};

export default Sidebar;
