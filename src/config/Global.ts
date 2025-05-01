import { MenuItem } from "@/types/sidebar/interface";
import { BarChart2, Home, MessageSquare, Users } from "lucide-react";

export const Organisation = {
    logo: "https://firebasestorage.googleapis.com/v0/b/inspiration-gallery.appspot.com/o/reportImages%2FFrame%201%20(1).png?alt=media&token=0dc1c7c1-8948-406d-9610-45e571db621d"
}


export const menuItems:MenuItem[] = [
    { name: 'Dashboard', Icon: Home, location: '/owner/dashboard' },
    { name: 'Analytics', Icon: BarChart2, location: '/dashboard' },
    { name: 'Chats', Icon: MessageSquare, location: '/chats' },
    { name: 'Team', Icon: Users, location: '/owner/agents' },
];