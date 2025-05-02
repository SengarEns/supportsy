import { MenuItem, MenuItems } from "@/types/sidebar/interface";
import { BarChart2, Home, MessageSquare, Users } from "lucide-react";

export const Organisation = {
    // logo: "https://firebasestorage.googleapis.com/v0/b/inspiration-gallery.appspot.com/o/reportImages%2FFrame%201%20(1).png?alt=media&token=0dc1c7c1-8948-406d-9610-45e571db621d"
    // logo:"https://firebasestorage.googleapis.com/v0/b/inspiration-gallery.appspot.com/o/reportImages%2Fsupportsy-high-resolution-logo.png?alt=media&token=4e567864-16d2-438d-8f51-3f5ff77ebfd5"
    logo:"https://firebasestorage.googleapis.com/v0/b/inspiration-gallery.appspot.com/o/reportImages%2FFrame%201%20(2).png?alt=media&token=4efdda2e-b231-4569-a98f-2e92492fcda1"
}



  export const menuItems: MenuItems = {
    master: [
      { name: 'Dashboard', Icon: Home, location: '/owner/dashboard' },
      { name: 'Analytics', Icon: BarChart2, location: '/dashboard' },
      { name: 'Chats', Icon: MessageSquare, location: '/chats' },
      { name: 'Team', Icon: Users, location: '/owner/agents' },
    ],
    brand:[
        { name: 'Dashboard', Icon: Home, location: '/owner/dashboard' },
        { name: 'Analytics', Icon: BarChart2, location: '/dashboard' },
        { name: 'Chats', Icon: MessageSquare, location: '/chats' },
        { name: 'Team', Icon: Users, location: '/owner/agents' },
    ],
    superAgent: [
      { name: 'Dashboard', Icon: Home, location: '/owner/dashboard' },
      { name: 'Analytics', Icon: BarChart2, location: '/dashboard' },
      { name: 'Chats', Icon: MessageSquare, location: '/chats' },
      { name: 'Team', Icon: Users, location: '/owner/agents' },
    ],
    agent:[
        { name: 'Dashboard', Icon: Home, location: '/owner/dashboard' },
      { name: 'Analytics', Icon: BarChart2, location: '/dashboard' },
      { name: 'Chats', Icon: MessageSquare, location: '/chats' },
      { name: 'Team', Icon: Users, location: '/owner/agents' },
    ]
  };