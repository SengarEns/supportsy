import { IconType } from "react-icons";


export interface MenuItems {
    master: MenuItem[];
    brand: MenuItem[];
    superAgent: MenuItem[];
    agent: MenuItem[];
}

export interface SidebarProps {
    isOpen: boolean;
    toggleSidebar: () => void;
    menuItems: MenuItemsII;
}

export interface MenuItem {
    // id: number;
    name: string;
    location: string; // For the href prop in Link
    Icon: IconType; // For the Icon component
    // Icon: React.ComponentType
}


export interface MenuItemsII {
    [key: string]: MenuItem[];
  }