"use client";

import React, { useState } from "react";
import Layout from "@/components/layout/layout";
import { Box, Flex, Input, Button, Text } from "@chakra-ui/react";

interface ChatProps {
  selectedChat: { id: number; name: string } | null;
  messages: Record<number, { user: string; text: string; timestamp: Date }[]>;
  onSendMessage: (chatId: number, messageText: string) => void;
}

const Chat: React.FC<ChatProps> = ({ selectedChat, messages, onSendMessage }) => {
  const [message, setMessage] = useState("");

  const user = "You"; // Current user

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim() && selectedChat) {
      onSendMessage(selectedChat.id, message.trim());
      setMessage("");
    }
  };

  if (!selectedChat) {
    return (
      <Flex align="center" justify="center" h="full">
        <Text>Select a chat to start messaging</Text>
      </Flex>
    );
  }

  const chatMessages = messages[selectedChat.id] || [];

  return (
    <Flex direction="column" h="full">
      <Box flex={1} overflowY="auto" p={4}>
        {chatMessages.length > 0 ? (
          chatMessages.map((msg, index) => (
            <Flex key={index} direction="column" mb={3}>
              <Text fontWeight="bold">{msg.user}</Text>
              <Text color="gray.600">
                {msg.text}{" "}
                <Text as="span" fontSize="xs" color="gray.400">
                  ({msg.timestamp.toLocaleTimeString()})
                </Text>
              </Text>
            </Flex>
          ))
        ) : (
          <Text color="gray.400">No messages yet.</Text>
        )}
      </Box>

      <Flex p={4} borderTop="1px solid" borderColor="gray.200" align="center" gap={3}>
        <Input
          value={message}
          onChange={handleInputChange}
          placeholder="Type a message..."
          onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
        />
        <Button onClick={handleSendMessage} colorScheme="purple">
          Send
        </Button>
      </Flex>
    </Flex>
  );
};

const Chats: React.FC = () => {
  const [selectedChat, setSelectedChat] = useState<{ id: number; name: string } | null>(null);

  const [messages, setMessages] = useState<Record<
    number,
    { user: string; text: string; timestamp: Date }[]
  >>({
    1: [
      { user: "Alice", text: "Hey there!", timestamp: new Date() },
      { user: "You", text: "Hello Alice!", timestamp: new Date() },
    ],
    2: [
      { user: "Bob", text: "What's up?", timestamp: new Date() },
    ],
    3: [
      { user: "Charlie", text: "Long time no see!", timestamp: new Date() },
    ],
    4: [],
  });

  const chatList = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
    { id: 4, name: "David" },
  ];

  const handleSendMessage = (chatId: number, messageText: string) => {
    const newMessage = {
      user: "You",
      text: messageText,
      timestamp: new Date(),
    };
    setMessages((prev) => ({
      ...prev,
      [chatId]: [...(prev[chatId] || []), newMessage],
    }));
  };

  return (
    <Layout>
      <Flex h="100%" overflow="hidden">
        {/* Chat List */}
        <Box w="300px" bg="white" borderRight="1px solid" borderColor="gray.200" overflowY="auto">
          <Text p={4} fontSize="xl" fontWeight="bold">
            Chat List
          </Text>
          {chatList.map((chat) => (
            <Box
              key={chat.id}
              p={4}
              borderBottom="1px solid"
              borderColor="gray.100"
              cursor="pointer"
              _hover={{ bg: "purple.50" }}
              bg={selectedChat?.id === chat.id ? "purple.100" : "white"}
              onClick={() => setSelectedChat(chat)}
            >
              <Text fontWeight="medium">{chat.name}</Text>
            </Box>
          ))}
        </Box>

        {/* Chat Box */}
        <Box flex={1} bg="gray.50">
          <Chat
            selectedChat={selectedChat}
            messages={messages}
            onSendMessage={handleSendMessage}
          />
        </Box>
      </Flex>
    </Layout>
  );
};

export default Chats;
