
"use client";

import React, { useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Sidebar from './sidebar';
import Header from './header';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children , ...props}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <Flex h="100vh" direction={{ base: 'column', md: 'row' }}>
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <Box
                ml={{ base: 0, md: isSidebarOpen ? '200px' : '60px' }}
                w={{ base: '100%', md: 'auto' }}
                transition="margin-left 0.3s ease"
                flex={1}
                h={"100%"}
            >
                <Box h={"60px"} >

                    <Header />
                </Box>

                <Box
                    as="div"
                    // flex={1}
                    overflowY="auto"
                    bg="gray.100"
                    // p={{ base: 4, md: 6 }}
                    // minH={{ base: 'auto', md: 'calc(100% - 60px)' }}
                    _dark={{ bg: "black" }}
                    h={{ md: 'calc(100% - 60px)' }}
                    
                    // background={"red.400"}
                >


                    {children}

                </Box>

            </Box>
        </Flex>
    );
};

export default Layout;