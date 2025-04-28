"use client";

import React, { useEffect, useState } from 'react';
import { Box, Flex, IconButton, Input, Text } from '@chakra-ui/react';
import { Moon, Sun } from 'lucide-react';

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
        // <Flex
        //     as="header"
        //     bg="white"
        //     boxShadow="sm"
        //     p={{ base: 3, md: 4 }}
        //     justifyContent="space-between"
        //     alignItems="center"
        //     position="sticky"
        //     top={0}
        //     zIndex={10}
        // >
        //     <Flex alignItems="center" gap={2}>
        //         <Box
        //             w={{ base: 6, md: 8 }}
        //             h={{ base: 6, md: 8 }}
        //             bg="purple.600"
        //             borderRadius="full"
        //             display="flex"
        //             alignItems="center"
        //             justifyContent="center"
        //         >
        //             <Text color="white" fontWeight="bold" fontSize={{ base: 'sm', md: 'md' }}>
        //                 S
        //             </Text>
        //         </Box>
        //         <Text
        //             fontSize={{ base: 'lg', md: 'xl' }}
        //             fontWeight="semibold"
        //             color="gray.800"
        //         >
        //             Supportsy
        //         </Text>
        //     </Flex>
        //     <Flex alignItems="center" gap={{ base: 2, md: 4 }} flexWrap="wrap">
        //         <Input
        //             placeholder="Search..."
        //             size="sm"
        //             borderRadius="lg"
        //             maxW={{ base: '150px', md: '200px' }}
        //             variant="outline"
        //             _focus={{ borderColor: 'purple.500' }}
        //         />
        //         <Flex alignItems="center" gap={2}>
        //             <Text fontSize={{ base: 'xs', md: 'sm' }} color="gray.600">
        //                 ExpertCSV
        //             </Text>
        //         </Flex>
        //         <IconButton
        //             aria-label="Toggle Dark Mode"
        //             onClick={toggleDarkMode}
        //             variant="ghost"
        //             color="gray.600"
        //             _hover={{ bg: 'transparent' }}
        //             size={{ base: 'sm', md: 'md' }}
        //         >
        //             {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
        //         </IconButton>
        //     </Flex>
        // </Flex>

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

export default Header;