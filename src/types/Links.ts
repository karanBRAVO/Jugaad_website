import { IconType } from "react-icons";

export interface NavigationLinks {
  name: string;
  to: string;
}

export interface SidebarLinks extends NavigationLinks {
  iconName: IconType;
}
