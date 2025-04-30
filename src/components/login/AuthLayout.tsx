'use client';

import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Input,
  Button,
  Checkbox,
  Text,
  Link,
  Image,
  Stack,
  Tabs,
  TabsList,
} from '@chakra-ui/react';
import { RiMailLine } from 'react-icons/ri';

// Define TypeScript types for props (if needed in the future)
interface LoginProps { }

const AuthLayout: React.FC<LoginProps> = ({children}:any) => {
  const bgColor = 'white';
  const textColor = 'gray.900';
  const tealColor = 'teal.700';
  const borderColor = 'gray.200';

  return (
    <Flex w="100%" bg="gray.900" color="white">
      {/* Left Section: Signup Form */}
      {children}
      <Box
        w="50%"
        bg="teal.900"
        p={10}
        display="flex"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        position="relative"
      >
        <Image
          src="/assets/images/logo.png"
          alt="DAILY Logo"
          position="absolute"
          top={10}
          left={10}
          w={20}
          h={20}
        />

        <Box position="relative" mb={6} w="full" h="250px">
          <Image
            src="/assets/images/areaChart.png"
            alt="Area Chart"
            w="full"
            h="full"
            objectFit="contain"
          />
          <Image
            src="/assets/images/lineChart.png"
            alt="Donut Chart"
            w="300px"
            h="300px"
            position="absolute"
            bottom={50}
            right={0}
            objectFit="contain"
          />
        </Box>
        <Text textAlign="center" fontSize="sm" mb={2} color={"gray.400"}>
          Very simple way you can engage
        </Text>
        <Text textAlign="center" fontSize="md" color={"gray.400"}>
          Welcome to DAILY Inventory Management System! Efficiently track and
          manage your inventory with ease.
        </Text>
      </Box>
    </Flex>
  );
};

export default AuthLayout;