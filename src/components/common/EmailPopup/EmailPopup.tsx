"use client"

import React, { useState, useRef } from "react";
import {
  Box,
  Flex,
  Input,
  Text,
  Textarea,
  Button,
  IconButton,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { FaTimes, FaPaperclip, FaPlus, FaMinus } from "react-icons/fa";

interface EmailPopupProps {
  isOpen: boolean;
  onClose: () => void;
  customerEmail: string;
}

const EmailPopup: React.FC<EmailPopupProps> = ({ isOpen, onClose, customerEmail }) => {
  const [to, setTo] = useState(customerEmail);
  const [cc, setCc] = useState("");
  const [bcc, setBcc] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [attachments, setAttachments] = useState<File[]>([]);
  const [showCcBcc, setShowCcBcc] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setAttachments((prev) => [...prev, ...newFiles]);
    }
  };

  const handleSendEmail = () => {
    console.log("Sending email:", { to, cc, bcc, subject, body, attachments });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <Box
        position="fixed"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg="black/60"
        backdropFilter="blur(4px)"
        zIndex={50}
      />

      {/* Email Popup Content */}
      <Box
        position="fixed"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        maxW="lg"
        w="full"
        bg="white/95"
        p={8}
        borderRadius="2xl"
        shadow="2xl"
        border="1px solid"
        borderColor="gray.100"
        zIndex={100}
      >
        <VStack gap="6" align="stretch">
          {/* Header */}
          <Flex justify="space-between" align="center">
            <Text fontSize="xl" fontWeight="bold" color="gray.800">
              Compose Email
            </Text>
            <IconButton
              aria-label="Close email popup"
            
              size="sm"
              variant="ghost"
              color="gray.500"
              _hover={{ bg: "gray.100", color: "gray.700" }}
              onClick={onClose}
            ><FaTimes /></IconButton>
          </Flex>

          {/* Body */}
          <VStack gap="4" align="stretch">
            {/* To */}
            <Box>
              <label className="block mb-2 text-sm font-semibold text-gray-700">
                To
              </label>
              <Input
                value={to}
                onChange={(e) => setTo(e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200 hover:border-gray-300"
                placeholder="recipient@example.com"
              />
            </Box>

            {/* CC/BCC Toggle */}
            <Flex justify="space-between" align="center">
              <Text fontSize="sm" color="gray.600">
                {showCcBcc ? "Hide CC/BCC" : "Show CC/BCC"}
              </Text>
              <IconButton
                aria-label={showCcBcc ? "Hide CC/BCC" : "Show CC/BCC"}
                
                size="sm"
                variant="ghost"
                color="gray.500"
                _hover={{ color: "gray.700" }}
                onClick={() => setShowCcBcc(!showCcBcc)}
              >{showCcBcc ? <FaMinus /> : <FaPlus />}</IconButton>
            </Flex>

            {/* CC */}
            {showCcBcc && (
              <Box>
                <label className="block mb-2 text-sm font-semibold text-gray-700">
                  CC
                </label>
                <Input
                  value={cc}
                  onChange={(e) => setCc(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200 hover:border-gray-300"
                  placeholder="cc@example.com"
                />
              </Box>
            )}

            {/* BCC */}
            {showCcBcc && (
              <Box>
                <label className="block mb-2 text-sm font-semibold text-gray-700">
                  BCC
                </label>
                <Input
                  value={bcc}
                  onChange={(e) => setBcc(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200 hover:border-gray-300"
                  placeholder="bcc@example.com"
                />
              </Box>
            )}

            {/* Subject */}
            <Box>
              <label className="block mb-2 text-sm font-semibold text-gray-700">
                Subject
              </label>
              <Input
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200 hover:border-gray-300"
                placeholder="Email subject"
              />
            </Box>

            {/* Body */}
            <Box>
              <label className="block mb-2 text-sm font-semibold text-gray-700">
                Body
              </label>
              <Textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200 hover:border-gray-300 resize-none placeholder-gray-400"
                rows={6}
                placeholder="Write your email here..."
              />
            </Box>

            {/* Attachments */}
            <Box>
              <label className="block mb-2 text-sm font-semibold text-gray-700">
                Attachments
              </label>
              <Flex align="center" gap={3}>
                <IconButton
                  aria-label="Attach files"
                  size="sm"
                  variant="ghost"
                  onClick={() => fileInputRef.current?.click()}
                ><FaPaperclip /></IconButton>
                <Input
                  type="file"
                  multiple
                  onChange={handleFileChange}
                  ref={fileInputRef}
                  display="none"
                />
              </Flex>
              {attachments.length > 0 && (
                <HStack mt={2} gap="2" wrap="wrap">
                  {attachments.map((file, index) => (
                    <Text key={index} fontSize="xs" color="gray.600">
                      {file.name}
                    </Text>
                  ))}
                </HStack>
              )}
            </Box>
          </VStack>

          {/* Footer */}
          <Flex justify="end" gap={3}>
            <Button
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-gray-400 transition-all duration-200 rounded-lg px-4 py-2 text-sm font-medium"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              className="bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 transition-all duration-200 rounded-lg px-4 py-2 text-sm font-medium shadow-sm"
              onClick={handleSendEmail}
            >
              Send
            </Button>
          </Flex>
        </VStack>
      </Box>
    </>
  );
};

export default EmailPopup;