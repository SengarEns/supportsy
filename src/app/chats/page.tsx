"use client";

import React, { useState, useEffect, useRef } from "react";
import Layout from "@/components/layout/layout";
import {
  Box,
  Flex,
  Input,
  Text,
  HStack,
  VStack,
  Icon,
  Button,
  IconButton,
  Image,
  Dialog,
  Portal,
  CloseButton,
  Textarea,
  Select,
  createListCollection,
  Field,
} from "@chakra-ui/react";
import { FaFileExcel, FaPaperPlane, FaPaperclip, FaFilePdf, FaFile } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import EmailPopup from "@/components/common/EmailPopup/EmailPopup";

interface ChatProps {
  selectedChat: { id: number; name: string } | null;
  messages: Record<
    number,
    { user: string; text: string; timestamp: Date; attachment?: string; files?: { name: string; type: string; url?: string }[] }[]
  >;
  onSendMessage: (chatId: number, messageText: string, files?: { name: string; type: string; url?: string }[]) => void;
}

const Chat: React.FC<ChatProps> = ({ selectedChat, messages, onSendMessage }) => {
  const [message, setMessage] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [lastCustomerMessageTime, setLastCustomerMessageTime] = useState<Date | null>(null);
  const [elapsedTime, setElapsedTime] = useState<number | null>(null);

  const [openChatTransfer, setOpenChatTransfer] = useState(false);
  const [openCallTransfer, setOpenCallTransfer] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [querySummary, setQuerySummary] = useState("");
  const [callTransferPhoneNumber, setCallTransferPhoneNumber] = useState("");
  const [openEmailPopup, setOpenEmailPopup] = useState(false);


  console.log("openChatTransfer", openChatTransfer)

  const departments = createListCollection({
    items: [
      "Technical Support",
      "Billing",
      "Sales",
      "Customer Success",
      "Human Resources",
      "Product Management",
      "Quality Assurance",
      "Legal",
      "IT Support",
    ]
  })

  // const departments = [
  //   "Technical Support",
  //   "Billing",
  //   "Sales",
  //   "Customer Success",
  //   "Human Resources",
  //   "Product Management",
  //   "Quality Assurance",
  //   "Legal",
  //   "IT Support",
  // ];


  const handleTransfer = () => {
    if (!selectedDepartment || !querySummary) {
      alert("Please fill in all fields before transferring.");
      return;
    }

    console.log("Transfer Details:", {
      department: selectedDepartment,
      summary: querySummary,
    });

    alert(`Chat transferred to ${selectedDepartment}.`);
    setOpenChatTransfer(false);
    setSelectedDepartment("");
    setQuerySummary("");
  };
  const handleCallTransfer = () => {
    if (!selectedDepartment || !querySummary) {
      alert("Please fill in all fields before transferring.");
      return;
    }

    console.log("Transfer Details:", {
      department: selectedDepartment,
      summary: querySummary,
    });

    alert(`Chat transferred to ${selectedDepartment}.`);
    setOpenCallTransfer(false);
    setSelectedDepartment("");
    setQuerySummary("");
  };


  console.log("elapsedTime", elapsedTime)

  const user = "You"; // Current user

  // Track last customer message and timer
  useEffect(() => {
    if (!selectedChat) return;

    const chatMessages = messages[selectedChat.id] || [];
    const lastCustomerMessage = chatMessages
      .filter((msg) => msg.user !== user)
      .slice(-1)[0];

    if (lastCustomerMessage) {
      setLastCustomerMessageTime(lastCustomerMessage.timestamp);
    } else {
      setLastCustomerMessageTime(null);
      setElapsedTime(null);
    }
  }, [messages, selectedChat, user]);

  // Timer logic: Check elapsed time after 2 minutes
  useEffect(() => {
    if (!lastCustomerMessageTime) return;

    const interval = setInterval(() => {
      const now = new Date();
      const diffMs = now.getTime() - lastCustomerMessageTime.getTime();
      const diffSec = Math.floor(diffMs / 1000);

      if (diffSec >= 10) { // 2 minutes = 120 seconds
        setElapsedTime(diffSec - 10); // Time elapsed after 2 minutes
      } else {
        setElapsedTime(null);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [lastCustomerMessageTime]);

  const formatElapsedTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles((prev) => [...prev, ...newFiles]);
    }
  };

  const handleSendMessage = () => {
    if (!selectedChat) return;

    const hasMessage = message.trim();
    const hasFiles = files.length > 0;

    if (!hasMessage && !hasFiles) return;

    const fileData = files.map((file) => ({
      name: file.name,
      type: file.type,
      url: file.type.startsWith("image/") ? URL.createObjectURL(file) : undefined,
    }));

    onSendMessage(selectedChat.id, hasMessage ? message.trim() : "", hasFiles ? fileData : undefined);
    setMessage("");
    setFiles([]);
    if (fileInputRef.current) fileInputRef.current.value = ""; // Reset file input
  };

  const handleEscalateChat = () => {
    alert(`Escalating chat with ${selectedChat?.name}`);
    // Add escalation logic here (e.g., API call)
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

      <Dialog.Root lazyMount open={openChatTransfer} modal={true} >
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content className="max-w-md w-full bg-red p-6 rounded-xl shadow-lg">
              <Dialog.Header>
                <Dialog.Title className="text-lg font-semibold">Transfer Chat</Dialog.Title>
              </Dialog.Header>
              <Dialog.Body className="flex flex-col gap-4">
                <Box>

                  <Select.Root collection={departments} size="sm" width="" zIndex={10}>
                    <Select.HiddenSelect />
                    <Select.Label>Select Department</Select.Label>
                    <Select.Control>
                      <Select.Trigger>
                        <Select.ValueText placeholder="Select framework" />
                      </Select.Trigger>
                      <Select.IndicatorGroup>
                        <Select.Indicator />
                      </Select.IndicatorGroup>
                    </Select.Control>
                    <Portal>
                      <Select.Positioner>
                        <Select.Content>
                          {departments.items.map((dept) => (
                            <Select.Item item={dept} key={dept}>
                              {dept}
                              <Select.ItemIndicator />
                            </Select.Item>
                          ))}
                        </Select.Content>
                      </Select.Positioner>
                    </Portal>
                  </Select.Root>
                </Box>


                <Field.Root>
                  <Field.Label>Query Summary</Field.Label>
                  <Textarea
                    className="w-full border rounded px-3 py-2 text-sm resize-none"
                    rows={4}
                    placeholder="Write a brief summary..."
                    value={querySummary}
                    onChange={(e) => setQuerySummary(e.target.value)}
                  />
                </Field.Root>
              </Dialog.Body>
              <Dialog.Footer className="flex justify-end gap-2 mt-4">
                <Dialog.ActionTrigger asChild >
                  <Button variant="outline" onClick={() => setOpenChatTransfer(false)}>Cancel</Button>
                </Dialog.ActionTrigger>
                <Button colorScheme="blue" onClick={handleTransfer}>
                  Transfer
                </Button>
              </Dialog.Footer>
              <Dialog.CloseTrigger asChild>
                <CloseButton size="sm" className="absolute top-2 right-2" />
              </Dialog.CloseTrigger>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>

      <Dialog.Root lazyMount open={openCallTransfer}>
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content className="max-w-md w-full bg-red p-6 rounded-xl shadow-lg">
              <Dialog.Header>
                <Dialog.Title className="text-lg font-semibold">Transfer Chat on call</Dialog.Title>
              </Dialog.Header>
              <Dialog.Body className="flex flex-col gap-4">
                <Field.Root>
                  <Field.Label>Phone Number</Field.Label>
                  <Input
                    className="w-full border rounded px-3 py-2 text-sm resize-none"
                    placeholder="Enter a number..."
                    value={callTransferPhoneNumber}
                    onChange={(e) => setCallTransferPhoneNumber(e.target.value)}
                  />
                </Field.Root>
                <Select.Root collection={departments} size="sm" width="320px">
                  <Select.HiddenSelect />
                  <Select.Label>Select Department</Select.Label>
                  <Select.Control>
                    <Select.Trigger>
                      <Select.ValueText placeholder="Select framework" />
                    </Select.Trigger>
                    <Select.IndicatorGroup>
                      <Select.Indicator />
                    </Select.IndicatorGroup>
                  </Select.Control>
                  <Portal>
                    <Select.Positioner>
                      <Select.Content>
                        {departments.items.map((dept) => (
                          <Select.Item item={dept} key={dept}>
                            {dept}
                            <Select.ItemIndicator />
                          </Select.Item>
                        ))}
                      </Select.Content>
                    </Select.Positioner>
                  </Portal>
                </Select.Root>
                <Field.Root>
                  <Field.Label>Query Summary</Field.Label>
                  <Textarea
                    className="w-full border rounded px-3 py-2 text-sm resize-none"
                    rows={4}
                    placeholder="Write a brief summary..."
                    value={querySummary}
                    onChange={(e) => setQuerySummary(e.target.value)}
                  />
                </Field.Root>
              </Dialog.Body>
              <Dialog.Footer className="flex justify-end gap-2 mt-4">
                <Dialog.ActionTrigger asChild >
                  <Button variant="outline" onClick={() => setOpenCallTransfer(false)}>Cancel</Button>
                </Dialog.ActionTrigger>
                <Button colorScheme="blue" onClick={handleCallTransfer}>
                  Transfer
                </Button>
              </Dialog.Footer>
              <Dialog.CloseTrigger asChild>
                <CloseButton size="sm" className="absolute top-2 right-2" />
              </Dialog.CloseTrigger>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>

      {/* Email Popup */}
      <EmailPopup
        isOpen={openEmailPopup}
        onClose={() => setOpenEmailPopup(false)}
        // customerEmail={customerEmail}
        customerEmail={"sharmadeepak0939@gmail.com"}
      />

      {/* Chat Header */}
      <Box
        bg="white"
        shadow="sm"
        p={4}
        position="sticky"
        top={0}
        zIndex={10}
        borderBottom="1px solid"
        borderColor="gray.200"
      >
        <Flex justify="space-between" align="center">
          <VStack align="flex-start" gap="1">
            <HStack>
              <Text fontSize="lg" fontWeight="bold">
                {selectedChat.name}
              </Text>
              {/* <Box w={2} h={2} bg="green.400" borderRadius="full" /> */}
            </HStack>
            {elapsedTime !== null ? (
              <HStack>
                <Text fontSize="xs" color="red.500">
                  Inactive: {formatElapsedTime(elapsedTime)}
                </Text>
              </HStack>
            ) : <HStack>
              <Text fontSize="xs" color="green.500">
                Idle
              </Text>
            </HStack>}
          </VStack>
          <HStack>
            {elapsedTime !== null && elapsedTime >= 60 && (
              <Button
                size="sm"
                colorScheme="red"
                variant="outline"
                onClick={handleEscalateChat}
              >
                Escalate Chat
              </Button>
            )}
            <Button
              size="sm"
              colorScheme="red"
              variant="solid"
              onClick={() => setOpenChatTransfer(true)}
            >
              Transfer Chat
            </Button>
            <Button
              size="sm"
              colorScheme="red"
              variant="solid"
              onClick={() => setOpenEmailPopup(true)}
            >
              <BiLogoGmail />
            </Button>
            <Button
              size="sm"
              colorScheme="red"
              variant="solid"
              onClick={() => setOpenCallTransfer(true)}
            >
              Transfer On Call
            </Button>
            <Button
              size="sm"
              colorScheme="red"
              variant="solid"
            >
              End Chat
            </Button>

          </HStack>
        </Flex>
      </Box>

      {/* Messages */}
      <Box flex={1} overflowY="auto" p={6} bg="gray.50">
        {chatMessages.length > 0 ? (
          chatMessages.map((msg, index) => {
            const isCurrentUser = msg.user === user;
            const showUserName =
              index === 0 || chatMessages[index - 1].user !== msg.user;

            return (
              <VStack
                key={index}
                align={isCurrentUser ? "flex-end" : "flex-start"}
                mb={4}
              >
                {showUserName && (
                  <Text fontWeight="bold" fontSize="sm" color="gray.600" mb={1}>
                    {msg.user}
                  </Text>
                )}
                <Box
                  maxW="70%"
                  bg={isCurrentUser ? "purple.400" : "gray.200"}
                  color={isCurrentUser ? "white" : "black"}
                  px={4}
                  py={2}
                  borderRadius="lg"
                  borderBottomRightRadius={isCurrentUser ? 0 : "lg"}
                  borderBottomLeftRadius={isCurrentUser ? "lg" : 0}
                >
                  {msg.text && <Text fontSize="sm">{msg.text}</Text>}
                  {msg.attachment && (
                    <HStack mt={msg.text ? 2 : 0} gap="2">
                      <Icon as={FaFileExcel} color={isCurrentUser ? "white" : "gray.600"} />
                      <Text fontSize="xs">{msg.attachment}</Text>
                    </HStack>
                  )}
                  {msg.files && msg.files.length > 0 && (
                    <VStack mt={msg.text || msg.attachment ? 2 : 0} align="start" gap="2">
                      {msg.files.map((file, fileIndex) => (
                        <HStack key={fileIndex} gap="2">
                          {file.type.startsWith("image/") && file.url ? (
                            <Image
                              src={file.url}
                              alt={file.name}
                              maxW="200px"
                              borderRadius="md"
                              mt={1}
                            />
                          ) : file.type === "application/pdf" ? (
                            <>
                              <Icon as={FaFilePdf} color={isCurrentUser ? "white" : "gray.600"} />
                              <Text fontSize="xs">{file.name}</Text>
                            </>
                          ) : (
                            <>
                              <Icon as={FaFile} color={isCurrentUser ? "white" : "gray.600"} />
                              <Text fontSize="xs">{file.name}</Text>
                            </>
                          )}
                        </HStack>
                      ))}
                    </VStack>
                  )}
                </Box>
                <Text fontSize="xs" color="gray.400" mt={1}>
                  {msg.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                </Text>
              </VStack>
            );
          })
        ) : (
          <Text color="gray.400" textAlign="center">No messages yet.</Text>
        )}
      </Box>

      {/* Input Area */}
      <Box p={6} bg="white" borderTop="1px solid" borderColor="gray.200">
        <Flex align="center" gap={3}>
          <IconButton
            aria-label="Attach files"

            size="md"
            variant="ghost"
            rounded="full"
            onClick={() => fileInputRef.current?.click()}
          ><FaPaperclip /></IconButton>
          <Input
            type="file"
            multiple
            onChange={handleFileChange}
            ref={fileInputRef}
            display="none"
          />
          <Input
            value={message}
            onChange={handleInputChange}
            placeholder="Type new message (Ctrl + send)"
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            borderRadius="full"
            bg="white"
            borderColor="gray.300"
            px={4}
            py={5}
            _focus={{ borderColor: "gray.400", boxShadow: "0 0 0 1px gray.400" }}
            flex={1}
          />
          <Button
            onClick={handleSendMessage}
            colorScheme="green"
            size="md"
            borderRadius="full"
            px={4}
          // isDisabled={!message.trim() && files.length === 0}
          >
            <FaPaperPlane />Send
          </Button>
        </Flex>
        {files.length > 0 && (
          <HStack mt={2} gap="2" wrap="wrap">
            {files.map((file, index) => (
              <Text key={index} fontSize="xs" color="gray.600">
                {file.name}
              </Text>
            ))}
          </HStack>
        )}
      </Box>
    </Flex>
  );
};

const Chats: React.FC = () => {
  const [selectedChat, setSelectedChat] = useState<{ id: number; name: string } | null>(null);

  const [messages, setMessages] = useState<
    Record<
      number,
      { user: string; text: string; timestamp: Date; attachment?: string; files?: { name: string; type: string; url?: string }[] }[]
    >
  >({
    1: [
      { user: "Alice", text: "Hey there!", timestamp: new Date() },
      { user: "You", text: "Hello Alice! 😊", timestamp: new Date() },
      { user: "Alice", text: "Here's the budget file", timestamp: new Date(), attachment: "MONTHLY_BGT.xlsx" },
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

  const handleSendMessage = (
    chatId: number,
    messageText: string,
    files?: { name: string; type: string; url?: string }[]
  ) => {
    const newMessage = {
      user: "You",
      text: messageText,
      timestamp: new Date(),
      files,
    };
    setMessages((prev) => ({
      ...prev,
      [chatId]: [...(prev[chatId] || []), newMessage],
    }));
  };

  return (
    <Layout>
      <Flex h="100%" overflow="hidden">
        {/* Chat List (Unchanged) */}
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