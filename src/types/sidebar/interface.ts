import { IconType } from "react-icons";

export interface SidebarProps {
    isOpen: boolean;
    toggleSidebar: () => void;
    menuItems: MenuItem[];
}
export interface MenuItem {
    // id: number;
    name: string;
    location: string; // For the href prop in Link
    Icon: IconType; // For the Icon component
  }