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
import AuthLayout from '@/components/login/AuthLayout';

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
      <AuthLayout>
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
              <Link href='/dashboard'>
                <Button colorScheme="teal" size="md" w="full">
                  Log in
                </Button>
              </Link>
            </Stack>

            <Text textAlign="center" fontSize="sm" mt={4}>
              Not have an account?            <Link
                href="#"
                color={tealColor}
                _hover={{ textDecoration: 'underline' }}
              >
                Sign up
              </Link>
            </Text>
          </Stack>
        </Box>


      </AuthLayout>
    </Flex>
  );
};

export default Login;