"use client";

import React, { useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Sidebar from './sidebar';
import Header from './header';
import { menuItems } from '@/config/Global';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

       
    return (
        <Flex h="100vh" direction={{ base: 'column', md: 'row' }}>
            <Sidebar menuItems={menuItems} isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <Box
                ml={{ base: 0, md: isSidebarOpen ? '200px' : '60px' }}
                w={{ base: '100%', md: 'auto' }}
                transition="margin-left 0.3s ease"
                flex={1}
                
            >
                <Header />
                <Box
                    as="main"
                    flex={1}
                    overflowY="auto"
                    bg="gray.100"
                    p={{ base: 4, md: 6 }}
                    minH={{ base: 'auto', md: 'calc(100vh - 64px)' }}
                    _dark={{ bg: "black" }}
                >
                    {children}
                </Box>
            </Box>
        </Flex>
    );
};

export default Layout;