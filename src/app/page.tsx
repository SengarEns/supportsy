"use client"

import React, { useState } from 'react';
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
} from '@chakra-ui/react';
import { LoginInterface } from '@/types/auth/interface';
import { UserJson } from '@/config/jsonData/Dummy';
import { useAuthContext } from '@/context/authContext';

// Define Type716cript types for props (if needed in the future)
interface LoginProps { }

const Login: React.FC<LoginProps> = () => {
  const bgColor = 'white';
  const textColor = 'gray.900';
  const tealColor = 'teal.700';
  const borderColor = 'gray.200';
  const [authCredentials, setAuthCredentials] = useState<LoginInterface>({
    email: '',
    password: '',
  });

  const { user, isAuthenticated, login, logout } = useAuthContext()
  
  const InputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAuthCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const HandleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); 
    try {
      await login(authCredentials.email, authCredentials.password);
      console.log("Login successful");
      // Optionally redirect or update UI after successful login
    } catch (error) {
      console.error("Login failed:", error);
      // Optionally show error message to user (e.g., invalid credentials)
    }
  };

  return (
    <Flex h="100vh" bg="gray.900" color="white">
      {/* Left Section: Login Form */}
      <Box
        w="50%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        bg={bgColor}
        color={textColor}
        p={10}
      >
        <Stack p={4} w="full" maxW="md">
          <Heading as="h2" size="xl" mb={6}>
            Welcome Back
          </Heading>
          <form onSubmit={HandleSubmit}>
            <Stack gap={4}>
              <Box>
                <Text fontSize="sm" fontWeight="medium" mb={1}>
                  Email
                </Text>
                <Input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  bg="gray.50"
                  value={authCredentials.email}
                  borderColor={borderColor}
                  onChange={InputHandler}
                  _focus={{ borderColor: tealColor }}
                />
              </Box>
              <Box>
                <Text fontSize="sm" fontWeight="medium" mb={1}>
                  Password
                </Text>
                <Input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  bg="gray.50"
                  value={authCredentials.password}
                  onChange={InputHandler}
                  borderColor={borderColor}
                  _focus={{ borderColor: tealColor }}
                />
              </Box>
              <Checkbox.Root>
                <Checkbox.HiddenInput />
                <Checkbox.Control />
                <Checkbox.Label>Accept terms and conditions</Checkbox.Label>
              </Checkbox.Root>
              <Button colorScheme="teal" size="md" w="full" type="submit">
                Log in
              </Button>
            </Stack>
          </form>
          <Text textAlign="center" fontSize="sm" mt={4}>
            Not have an account?{' '}
            <Link
              href="#"
              color={tealColor}
              _hover={{ textDecoration: 'underline' }}
            >
              Sign up
            </Link>
          </Text>
        </Stack>
      </Box>
      {/* Right Section: Branding */}
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
        <Text textAlign="center" fontSize="sm" mb={2} color="gray.400">
          Very simple way you can engage
        </Text>
        <Text textAlign="center" fontSize="md" color="gray.400">
          Welcome to DAILY Inventory Management System! Efficiently track and
          manage your inventory with ease.
        </Text>
      </Box>
    </Flex>
  );
};

export default Login;