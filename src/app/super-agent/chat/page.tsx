"use client"
import Layout from "@/components/layout/layout";
import Sidebar from "@/components/layout/sidebar";
import { MenuItem } from "@/types/sidebar/interface";
import { Box } from "@chakra-ui/react"
import { BarChart2, Home, MessageSquare, Users } from "lucide-react";
import { useState } from "react";

const mockMessages = {
    1: [
      { id: 1, sender: "User 1", text: "Hello, need help!", timestamp: "10:00 AM" },
      { id: 2, sender: "Agent", text: "Sure, how can I assist?", timestamp: "10:01 AM" },
    ],
    2: [
      { id: 1, sender: "User 2", text: "Can you assist?", timestamp: "9:50 AM" },
      { id: 2, sender: "Agent", text: "Of course! What's the issue?", timestamp: "9:51 AM" },
    ],
    3: [
      { id: 1, sender: "User 3", text: "Thanks for the info!", timestamp: "9:30 AM" },
      { id: 2, sender: "Agent", text: "You're welcome!", timestamp: "9:31 AM" },
    ],
  };

const ChatSuperAgent = () => {

    const [selectedUser, setSelectedUser] = useState<number | null>(null);
    const [messages, setMessages] = useState(mockMessages);
    const [inputText, setInputText] = useState("");

    const handleSelectUser = (userId: number) => {
        setSelectedUser(userId);
      };
      
    return (
        <Layout>
            CHAT BOT
        </Layout>
    )
}

export default ChatSuperAgent;