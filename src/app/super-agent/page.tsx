"use client"
import Layout from "@/components/layout/layout";
import Sidebar from "@/components/layout/sidebar";
import { MenuItem } from "@/types/sidebar/interface";
import { Box } from "@chakra-ui/react"
import { BarChart2, Home, MessageSquare, Users } from "lucide-react";
import { useState } from "react";

const SuperAgentDashboard = () => {


    const [isOpen, setIsOpen] = useState<boolean>(false)

    const toggleSidebar = () => {
        setIsOpen(!isOpen)
    }

    return (
        <Box>
            <Layout >
                asd
            </Layout>
        </Box>
    )
}

export default SuperAgentDashboard;