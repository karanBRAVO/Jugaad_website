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
      linkTo: "https://LinkTo.com",
    },
    { name: "Twitter", iconName: FaTwitter, linkTo: "https://LinkTo.com" },
    { name: "Discord", iconName: FaDiscord, linkTo: "https://LinkTo.com" },
    { name: "Telegram", iconName: FaTelegram, linkTo: "https://LinkTo.com" },
  ];

  return (
    <>
      <h1 className="text-pink-600 text-9xl">k</h1>
      {links.map((link, idx) => (
        <Link href={link.linkTo} key={idx} className="bg-green-500 p-5">
          <link.iconName className="text-white font-black" />
        </Link>
      ))}
    </>
  );
};

export default Sidebar;
