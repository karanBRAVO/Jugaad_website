import React from "react";
import Link from "next/link";

// icons
import {
  FaDiscord,
  FaSquareInstagram,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa6";

type Props = {};

const Sidebar = (props: Props) => {
  const links = [
    {
      name: "Instagram",
      iconName: FaSquareInstagram,
      linkTo: "https://instagram.com",
    },
    { name: "Twitter", iconName: FaTwitter, linkTo: "https://twitter.com" },
    { name: "Discord", iconName: FaDiscord, linkTo: "https://discord.com" },
    { name: "Telegram", iconName: FaTelegram, linkTo: "https://telegram.com" },
  ];

  return (
    <>
      <aside className="flex flex-col items-center justify-center bg-white py-2">
        {links.map((link, idx) => (
          <Link href={link.linkTo} key={idx} className="px-3 py-7">
            <link.iconName className="text-black text-3xl font-black hover:text-red-700 transition-all ease-linear" />
          </Link>
        ))}
      </aside>
    </>
  );
};

export default Sidebar;
