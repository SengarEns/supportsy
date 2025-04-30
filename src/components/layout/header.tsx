"use client";

import React, { useEffect, useState } from 'react';
import { Box, createListCollection, Flex, IconButton, Input, Portal, Select, Text } from '@chakra-ui/react';
import { AlertTriangle, Ban, Book, CheckCircle, Clock, Coffee, Headphones, Hourglass, LogOut, Moon, Phone, Plane, Sun, XCircle } from 'lucide-react';

const Header: React.FC = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [agentStatus, setAgentStatus] = useState('');



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

    const statusOptions = createListCollection({
        items: [
            "Available",
            "Offline",
            "Away",
            "In a Meeting",
            "On a Call",
            "Busy",
            "Break",
            "Training",
            "After Call Work",
            "Do Not Disturb",
            "Vacation",
            "Pending Logout",
            "Technical Issues"
        ]
    })

    // const statusOptions = createListCollection({
    //     items: [
    //         { label: "Available", icon: CheckCircle },
    //         { label: "Offline", icon: XCircle },
    //         { label: "Away", icon: Clock },
    //         { label: "In a Meeting", icon: Headphones },
    //         { label: "On a Call", icon: Phone },
    //         { label: "Busy", icon: Ban },
    //         { label: "Break", icon: Coffee },
    //         { label: "Training", icon: Book },
    //         { label: "After Call Work", icon: Hourglass },
    //         { label: "Do Not Disturb", icon: Moon },
    //         { label: "Vacation", icon: Plane },
    //         { label: "Pending Logout", icon: LogOut },
    //         { label: "Technical Issues", icon: AlertTriangle }
    //     ]
    // });


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
            _dark={{ bg: "black" }}
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


                <Select.Root collection={statusOptions}>
                    {/* <Select.HiddenSelect />
                    <Select.Label>Select framework</Select.Label> */}
                    <Select.Control>
                        <Select.Trigger>
                            <Select.ValueText placeholder="Status" />
                        </Select.Trigger>
                        <Select.IndicatorGroup>
                            <Select.Indicator />
                        </Select.IndicatorGroup>
                    </Select.Control>
                    <Portal>
                        <Select.Positioner>
                            <Select.Content>
                                {statusOptions.items.map((item) => (
                                    <Select.Item item={item} key={item} className='w-fit'>
                                        {item}
                                        <Select.ItemIndicator />
                                    </Select.Item>
                                ))}
                            </Select.Content>
                        </Select.Positioner>
                    </Portal>
                    {/* <Portal>
                        <Select.Positioner>
                            <Select.Content>
                                {statusOptions.items.map((item) => (
                                    <Select.Item
                                        item={item}
                                        key={item.label}
                                        className="flex items-center gap-2 w-fit"
                                    >
                                        <item.icon size={20} aria-hidden="true" />
                                        <span>{item.label}</span>
                                        <Select.ItemIndicator />
                                    </Select.Item>
                                ))}
                            </Select.Content>
                        </Select.Positioner>
                    </Portal> */}
                </Select.Root>

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