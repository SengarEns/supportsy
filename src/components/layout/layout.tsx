"use client";

import React, { useEffect, useState } from 'react';
import { Box, Flex, IconButton, Input, Avatar, Text } from '@chakra-ui/react';
import { Home, BarChart2, MessageSquare, Users, ChevronRight, ChevronLeft, Moon, Sun } from 'lucide-react';

const Header: React.FC = () => {

    const [isDarkMode, setIsDarkMode] = useState(false);


    const toggleDarkMode = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        localStorage.setItem('darkMode', JSON.stringify(newMode));
        if (newMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    // Initialize dark mode based on localStorage or system preference
    useEffect(() => {
        const savedMode = localStorage.getItem('darkMode');
        if (savedMode !== null) {
            const parsedMode = JSON.parse(savedMode);
            setIsDarkMode(parsedMode);
            if (parsedMode) {
                document.documentElement.classList.add('dark');
            }
        } else {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            setIsDarkMode(prefersDark);
            if (prefersDark) {
                document.documentElement.classList.add('dark');
            }
        }
    }, []);


    return (
        <Flex
            as="header"
            bg="white"
            boxShadow="sm"
            p={4}
            justifyContent="space-between"
            alignItems="center"
            position="sticky"
            top={0}
            zIndex={10}
        >
            <Flex alignItems="center" gap={2}>
                <Box w={8} h={8} bg="purple.600" borderRadius="full" display="flex" alignItems="center" justifyContent="center">
                    <Text color="white" fontWeight="bold">S</Text>
                </Box>
                <Text fontSize="xl" fontWeight="semibold" color="gray.800">Supportsy</Text>
            </Flex>
            <Flex alignItems="center" gap={4}>
                <Input
                    placeholder="Search..."
                    size="sm"
                    borderRadius="lg"
                    maxW="200px"
                    variant="outline"
                    _focus={{ borderColor: 'purple.500' }}
                />
                <Flex alignItems="center" gap={2}>
                    <Text fontSize="sm" color="gray.600">ExpertCSV</Text>
                    {/* <Avatar size="sm" bg="gray.200" /> */}
                </Flex>
                {/* <button onClick={toggleDarkMode} className="text-light-text-primary dark:text-dark-text-primary">
                    {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button> */}

                <IconButton
                        aria-label="Toggle Sidebar"
                        onClick={toggleDarkMode}
                        variant="ghost"
                        color="gray.600"
                        _hover={{ bg: 'transparent' }}
                    >
                        {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}

                    </IconButton>
            </Flex>
        </Flex>
    );
};

interface SidebarProps {
    isOpen: boolean;
    toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
    const menuItems = [
        { name: 'Dashboard', Icon: Home },
        { name: 'Analytics', Icon: BarChart2 },
        { name: 'Messages', Icon: MessageSquare },
        { name: 'Team', Icon: Users },
    ];

    return (
        <Box
            as="aside"
            bg="white"
            boxShadow="md"
            h="100vh"
            w={isOpen ? '200px' : '60px'}
            transition="width 0.3s ease"
            position="fixed"
            top={0}
            left={0}
        >
            <Flex direction="column" h="full">
                <Flex p={4}>
                    <IconButton
                        aria-label="Toggle Sidebar"
                        onClick={toggleSidebar}
                        variant="ghost"
                        color="gray.600"
                        _hover={{ bg: 'transparent' }}
                    >
                        {isOpen ? <ChevronLeft className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}

                    </IconButton>
                </Flex>
                <Box flex={1} overflowY="auto">
                    {menuItems.map((item, index) => {
                        const { Icon } = item;
                        return (
                            <Flex
                                key={index}
                                alignItems="center"
                                p={4}
                                _hover={{ bg: 'purple.50' }}
                                cursor="pointer"
                                transition="background-color 0.2s"
                            >
                                <Box color="gray.600">
                                    <Icon className="w-5 h-5" />
                                </Box>
                                {isOpen && <Text ml={4} color="gray.600">{item.name}</Text>}
                            </Flex>
                        );
                    })}
                </Box>
            </Flex>
        </Box>
    );
};

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <Flex h="100vh">
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <Box ml={isSidebarOpen ? '200px' : '60px'} transition="margin-left 0.3s ease" flex={1}>
                <Header />
                <Box
                    as="main"
                    flex={1}
                    overflowY="auto"
                    bg="gray.100"
                    p={6}
                    minH="calc(100vh - 64px)"
                >
                    {children}
                </Box>
            </Box>
        </Flex>
    );
};

export default Layout;