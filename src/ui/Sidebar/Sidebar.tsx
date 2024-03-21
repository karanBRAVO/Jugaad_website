import React from "react";

// icons
import { FaSquareInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <>
      <h1>Sidebar</h1>
      <FaSquareInstagram />
      <FaXTwitter />
      <FaDiscord />
      <FaTelegram />
    </>
  );
};

export default Sidebar;
