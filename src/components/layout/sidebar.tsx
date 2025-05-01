"use client";

import React from 'react';
import { Box, Flex, IconButton, Text } from '@chakra-ui/react';
import { Home, BarChart2, MessageSquare, Users, ChevronRight, ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { IconType } from 'react-icons'; // Import IconType for the Icon property
import { SidebarProps } from '@/types/sidebar/interface';


const Sidebar: React.FC<SidebarProps> = ({ menuItems,isOpen, toggleSidebar }) => {
    // const menuItems = [
    //     { name: 'Dashboard', Icon: Home, location: '/owner/dashboard' },
    //     { name: 'Analytics', Icon: BarChart2, location: '/dashboard' },
    //     { name: 'Chats', Icon: MessageSquare, location: '/chats' },
    //     { name: 'Team', Icon: Users, location: '/owner/agents' },
    // ];

    return (
        <Box
            as="aside"
            bg="white"
            boxShadow={{ base: 'none', md: 'md' }}
            h={{ base: 'auto', md: '100vh' }}
            w={{ base: '100%', md: isOpen ? '200px' : '60px' }}
            transition="width 0.3s ease"
            position={{ base: 'static', md: 'fixed' }}
            top={0}
            left={0}
            zIndex={20}
            _dark={{ bg: "black" }}
        >
            <Flex direction="column" h="full">
                <Flex p={{ base: 2, md: 4 }} justifyContent="space-between">
                    <IconButton
                        aria-label="Toggle Sidebar"
                        onClick={toggleSidebar}
                        variant="ghost"
                        color="gray.600"
                        _hover={{ bg: 'transparent' }}
                        size={{ base: 'sm', md: 'md' }}
                    >
                        {isOpen ? <ChevronLeft className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
                    </IconButton>
                </Flex>
                <Box flex={1} overflowY="auto">
                {menuItems && menuItems.map((item, index) => {
                        const { Icon } = item;
                        return (
                            <Link href={item.location} key={index}>
                                <Flex
                                    alignItems="center"
                                    p={{ base: 3, md: 4 }}
                                    _hover={{ bg: 'purple.50' }}
                                    cursor="pointer"
                                    transition="background-color 0.2s"
                                >
                                    <Box color="gray.600">
                                        <Icon className="w-5 h-5" />
                                    </Box>
                                    {isOpen && (
                                        <Text ml={4} color="gray.600" fontSize={{ base: 'sm', md: 'md' }}>
                                            {item.name}
                                        </Text>
                                    )}
                                </Flex>
                            </Link>
                        );
                    })}
                </Box>
            </Flex>
        </Box>
    );
};

export default Sidebar;

