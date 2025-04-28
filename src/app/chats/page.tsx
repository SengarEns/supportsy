// "use client";

// import React, { useState } from "react";
// import { useSocket } from "../config/socketContext";
// import Layout from "@/components/layout/layout";
// import {
//   Box,
//   Flex,
//   IconButton,
//   Input,
//   Button,
//   Text,
//   Avatar,
//   Skeleton,
//   SkeletonCircle,
//   SkeletonText,
// } from "@chakra-ui/react";
// import { ChevronRight, ChevronLeft } from "lucide-react";

// const Chat: React.FC = () => {
//   const { messages, sendMessage, sendTypingStatus, typingStatus } = useSocket();
//   const [message, setMessage] = useState("");
//   const user = "User1"; // Replace with actual user info

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setMessage(e.target.value);
//     sendTypingStatus(user);
//   };

//   const handleSendMessage = () => {
//     if (message.trim()) {
//       sendMessage({ user, text: message, timestamp: new Date() });
//       setMessage("");
//     }
//   };

//   return (
//     <Flex direction="column" h="full" w="full" bg="white" position="relative">
//       <Box
//         flex={1}
//         overflowY="auto"
//         p={{ base: 3, md: 5 }}
//         maxH={{ base: "calc(100vh - 200px)", md: "calc(100vh - 150px)" }}
//       >
//         {messages && messages.length > 0 ? (
//           messages.map((msg, index) => (
//             <Flex key={index} mb={3} direction="column">
//               <Text fontWeight="medium" fontSize={{ base: "sm", md: "md" }}>
//                 {msg.user}
//               </Text>
//               <Text fontSize={{ base: "sm", md: "md" }} color="gray.600">
//                 {msg.text}{" "}
//                 <Text as="span" fontSize="xs" color="gray.400">
//                   ({new Date(msg.timestamp).toLocaleTimeString()})
//                 </Text>
//               </Text>
//             </Flex>
//           ))
//         ) : (
//           <Box p={{ base: 3, md: 4 }}>
//             {[...Array(5)].map((_, i) => (
//               <Flex key={i} mb={4} alignItems="center">
//                 <SkeletonCircle size={{ base: "8", md: "10" }} mr={3} />
//                 <SkeletonText noOfLines={2} w="full" />
//               </Flex>
//             ))}
//             18n: true
//           </Box>
//         )}
//         {typingStatus && (
//           <Text fontStyle="italic" color="gray.500" fontSize="sm" mt={2}>
//             {typingStatus}
//           </Text>
//         )}
//         <Flex
//           position="absolute"
//           bottom={0}
//           left={0}
//           right={0}
//           p={4}
//           borderTop="1px"
//           borderColor="gray.200"
//           alignItems="center"
//           gap={3}
//           bg="white"
//         >
//           <Input
//             value={message}
//             onChange={handleInputChange}
//             placeholder="Type a message..."
//             size="md"
//             borderRadius="md"
//             _focus={{ borderColor: "purple.500" }}
//           />
//           <Button
//             onClick={handleSendMessage}
//             colorScheme="purple"
//             size="md"
//             px={6}
//             isDisabled={!message.trim()}
//           >
//             Send
//           </Button>
//         </Flex>
//     </Flex>
//   );
// };

// const Chats: React.FC = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const chatList = [
//     { id: 1, name: "User Name", message: "This is the message" },
//     { id: 2, name: "User Name", message: "This is the message" },
//     { id: 3, name: "User Name", message: "This is the message" },
//     { id: 4, name: "User Name", message: "This is the message" },
//   ];

//   return (
//     <Layout>
//       <Flex
//         h="full"
//         w="full"
//         overflow="hidden"
//         bg="gray.50"
//         direction={{ base: "column", md: "row" }}
//       >
//         {/* Chat List Sidebar */}
//         <Box
//           bg="white"
//           boxShadow={{ base: "none", md: "md" }}
//           w={{
//             base: isMenuOpen ? "80%" : "0%",
//             sm: isMenuOpen ? "60%" : "0%",
//             md: isMenuOpen ? "300px" : "60px",
//           }}
//           h={{ base: "auto", md: "full" }}
//           transition="width 0.3s ease, transform 0.3s ease"
//           position={{ base: "absolute", md: "relative" }}
//           transform={{
//             base: isMenuOpen ? "translateX(0)" : "translateX(-100%)",
//             md: "none",
//           }}
//           zIndex={20}
//           overflow="hidden"
//           display={{ base: isMenuOpen ? "block" : "none", md: "block" }}
//         >
//           <Flex direction="column" h="full" p={{ base: 3, md: 4 }}>
//             <Text
//               fontSize={{ base: "lg", md: "xl" }}
//               fontWeight="semibold"
//               mb={4}
//               color="gray.800"
//             >
//               Chatlist
//             </Text>
//             <Box flex={1} overflowY="auto">
//               {chatList.map((chat) => (
//                 <Flex
//                   key={chat.id}
//                   alignItems="center"
//                   p={3}
//                   border="1px"
//                   borderColor="gray.200"
//                   borderRadius="md"
//                   mb={2}
//                   _hover={{ bg: "purple.50" }}
//                   cursor="pointer"
//                 >
//                   <Avatar
//                     src="/defaultprofile.png"
//                     size={{ base: "sm", md: "md" }}
//                     mr={3}
//                     border="1px"
//                     borderColor="gray.200"
//                   />
//                   {isMenuOpen && (
//                     <Box>
//                       <Text fontSize={{ base: "sm", md: "md" }} fontWeight="medium">
//                         {chat.name}
//                       </Text>
//                       <Text fontSize={{ base: "xs", md: "sm" }} color="gray.500">
//                         {chat.message}
//                       </Text>
//                     </Box>
//                   )}
//                 </Flex>
//               ))}
//             </Box>
//           </Flex>
//         </Box>

//         {/* Toggle Button */}
//         <Box
//           display={{ base: "flex", md: "none" }}
//           alignItems="center"
//           p={2}
//           bg="white"
//           borderRight="1px"
//           borderColor="gray.200"
//         >
//           <IconButton
//             aria-label={isMenuOpen ? "Close chat list" : "Open chat list"}
//             icon={
//               isMenuOpen ? (
//                 <ChevronLeft className="w-5 h-5" />
//               ) : (
//                 <ChevronRight className="w-5 h-5" />
//               )
//             }
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             variant="ghost"
//             size="sm"
//           />
//         </Box>

//         {/* Chat Window */}
//         <Box flex={1} h="full" overflow="hidden" border="1px" borderColor="gray.200">
//           {isMenuOpen && (
//             <Box
//               display={{ base: "block", md: "none" }}
//               position="fixed"
//               top={0}
//               left={0}
//               right={0}
//               bottom={0}
//               bg="blackAlpha.600"
//               zIndex={10}
//               onClick={() => setIsMenuOpen(false)}
//             />
//           )}
//           <Chat />
//         </Box>
//       </Flex>
//     </Layout>
//   );
// };

// export default Chats;















"use client";

import React, { useState } from "react";
import Layout from "@/components/layout/layout";
import {
  Box,
  Flex,
  IconButton,
  Input,
  Button,
  Text,
  Avatar,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";
import { ChevronRight, ChevronLeft } from "lucide-react";

const Chat: React.FC = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { user: "User2", text: "Hello!", timestamp: new Date() },
    { user: "User1", text: "Hi there!", timestamp: new Date() },
    { user: "User2", text: "How are you?", timestamp: new Date() },
  ]);
  const [typingStatus, setTypingStatus] = useState("");
  const user = "User1"; // Current user

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
    setTypingStatus(`${user} is typing...`);
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        user,
        text: message,
        timestamp: new Date(),
      };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setMessage("");
      setTypingStatus("");
    }
  };

  return (
    <Flex direction="column" h="full" w="full" bg="white" position="relative">
      <Box
        flex={1}
        overflowY="auto"
        p={{ base: 3, md: 5 }}
        maxH={{ base: "calc(100vh - 200px)", md: "calc(100vh - 150px)" }}
      >
        {messages && messages.length > 0 ? (
          messages.map((msg, index) => (
            <Flex key={index} mb={3} direction="column">
              <Text fontWeight="medium" fontSize={{ base: "sm", md: "md" }}>
                {msg.user}
              </Text>
              <Text fontSize={{ base: "sm", md: "md" }} color="gray.600">
                {msg.text}{" "}
                <Text as="span" fontSize="xs" color="gray.400">
                  ({new Date(msg.timestamp).toLocaleTimeString()})
                </Text>
              </Text>
            </Flex>
          ))
        ) : (
          <Box p={{ base: 3, md: 4 }}>
            {[...Array(5)].map((_, i) => (
              <Flex key={i} mb={4} alignItems="center">
                <SkeletonCircle size={{ base: "8", md: "10" }} mr={3} />
                <SkeletonText noOfLines={2} w="full" />
              </Flex>
            ))}
          </Box>
        )}
        {typingStatus && (
          <Text fontStyle="italic" color="gray.500" fontSize="sm" mt={2}>
            {typingStatus}
          </Text>
        )}
      </Box>

      {/* Input Box */}
      <Flex
        position="absolute"
        bottom={0}
        left={0}
        right={0}
        p={4}
        borderTop="1px"
        borderColor="gray.200"
        alignItems="center"
        gap={3}
        bg="white"
      >
        <Input
          value={message}
          onChange={handleInputChange}
          placeholder="Type a message..."
          size="md"
          borderRadius="md"
          _focus={{ borderColor: "purple.500" }}
        />
        <Button
          onClick={handleSendMessage}
          colorScheme="purple"
          size="md"
          px={6}
          // isDisabled={!message.trim()}
        >
          Send
        </Button>
      </Flex>
    </Flex>
  );
};

const Chats: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const chatList = [
    { id: 1, name: "User Name", message: "This is the message" },
    { id: 2, name: "User Name", message: "This is the message" },
    { id: 3, name: "User Name", message: "This is the message" },
    { id: 4, name: "User Name", message: "This is the message" },
  ];

  return (
    <Layout>
      <Flex
        h="full"
        w="full"
        overflow="hidden"
        bg="gray.50"
        direction={{ base: "column", md: "row" }}
      >
        {/* Chat List Sidebar */}
        <Box
          bg="white"
          boxShadow={{ base: "none", md: "md" }}
          w={{
            base: isMenuOpen ? "80%" : "0%",
            sm: isMenuOpen ? "60%" : "0%",
            md: isMenuOpen ? "300px" : "60px",
          }}
          h={{ base: "auto", md: "full" }}
          transition="width 0.3s ease, transform 0.3s ease"
          position={{ base: "absolute", md: "relative" }}
          transform={{
            base: isMenuOpen ? "translateX(0)" : "translateX(-100%)",
            md: "none",
          }}
          zIndex={20}
          overflow="hidden"
          display={{ base: isMenuOpen ? "block" : "none", md: "block" }}
        >
          <Flex direction="column" h="full" p={{ base: 3, md: 4 }}>
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              fontWeight="semibold"
              mb={4}
              color="gray.800"
            >
              Chatlist
            </Text>
            <Box flex={1} overflowY="auto">
              {chatList.map((chat) => (
                <Flex
                  key={chat.id}
                  alignItems="center"
                  p={3}
                  border="1px"
                  borderColor="gray.200"
                  borderRadius="md"
                  mb={2}
                  _hover={{ bg: "purple.50" }}
                  cursor="pointer"
                >
                  {/* <Avatar
                    src="/defaultprofile.png"
                    size={{ base: "sm", md: "md" }}
                    mr={3}
                    border="1px"
                    borderColor="gray.200"
                  /> */}
                  {isMenuOpen && (
                    <Box>
                      <Text fontSize={{ base: "sm", md: "md" }} fontWeight="medium">
                        {chat.name}
                      </Text>
                      <Text fontSize={{ base: "xs", md: "sm" }} color="gray.500">
                        {chat.message}
                      </Text>
                    </Box>
                  )}
                </Flex>
              ))}
            </Box>
          </Flex>
        </Box>

        {/* Toggle Button */}
        <Box
          display={{ base: "flex", md: "none" }}
          alignItems="center"
          p={2}
          bg="white"
          borderRight="1px"
          borderColor="gray.200"
        >
          <IconButton
            aria-label={isMenuOpen ? "Close chat list" : "Open chat list"}
            icon={
              isMenuOpen ? (
                <ChevronLeft className="w-5 h-5" />
              ) : (
                <ChevronRight className="w-5 h-5" />
              )
            }
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            variant="ghost"
            size="sm"
          />
        </Box>

        {/* Chat Window */}
        <Box flex={1} h="full" overflow="hidden" border="1px" borderColor="gray.200">
          {isMenuOpen && (
            <Box
              display={{ base: "block", md: "none" }}
              position="fixed"
              top={0}
              left={0}
              right={0}
              bottom={0}
              bg="blackAlpha.600"
              zIndex={10}
              onClick={() => setIsMenuOpen(false)}
            />
          )}
          <Chat />
        </Box>
      </Flex>
    </Layout>
  );
};

export default Chats;
