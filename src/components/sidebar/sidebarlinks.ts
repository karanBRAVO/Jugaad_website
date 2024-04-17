import { SidebarLinks } from "@/types/LinkTypes";
import {
  FaDiscord,
  FaSquareInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa6";

const links: SidebarLinks[] = [
  {
    name: "Linked In",
    iconName: FaLinkedin,
    to: "https://www.linkedin.com/company/jugaad-robotics-club-uiet",
  },
  { name: "Youtube", iconName: FaYoutube, to: "https://www.youtube.com/@jugaadclubuiet" },
  {
    name: "Instagram",
    iconName: FaSquareInstagram,
    to: "https://www.instagram.com/jugaadclubuiet/",
  },
  { name: "Discord", iconName: FaDiscord, to: "https://discord.com/invite/d9Ha63Yjjq" },
];

export default links;
