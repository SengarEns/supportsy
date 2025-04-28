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

const Login: React.FC<LoginProps> = () => {
  const bgColor = 'white';
  const textColor = 'gray.900';
  const tealColor = 'teal.700';
  const borderColor = 'gray.200';

  return (
    <Flex h="100vh" bg="gray.900" color="white">
      {/* Left Section: Signup Form */}
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
          <Stack p={4}>
            <Box>
              <Text fontSize="sm" fontWeight="medium" mb={1}>
                Name
              </Text>
              <Input
                placeholder="Enter your name"
                bg="gray.50"
                borderColor={borderColor}
                _focus={{ borderColor: tealColor }} // Use _focus variant for focus styling
              />
            </Box>
            <Box>
              <Text fontSize="sm" fontWeight="medium" mb={1}>
                Email
              </Text>
              <Input
                type="email"
                placeholder="Enter your email"
                bg="gray.50"
                borderColor={borderColor}
                _focus={{ borderColor: tealColor }} // Use _focus variant for focus styling
              />
            </Box>
            <Box>
              <Text fontSize="sm" fontWeight="medium" mb={1}>
                Password
              </Text>
              <Input
                type="password"
                placeholder="Enter your password"
                bg="gray.50"
                borderColor={borderColor}
                _focus={{ borderColor: tealColor }} // Use _focus variant for focus styling
              />
            </Box>
            {/* <Checkbox colorScheme="teal" defaultChecked>
              I agree to all the Terms & Conditions
            </Checkbox> */}
            <Checkbox.Root>
              <Checkbox.HiddenInput />
              <Checkbox.Control />
              <Checkbox.Label>Accept terms and conditions</Checkbox.Label>
            </Checkbox.Root>
            <Button colorScheme="teal" size="md" w="full">
              Log in
            </Button>
          </Stack>

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

export default Login;