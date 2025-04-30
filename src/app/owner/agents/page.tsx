// "use client";

// import Layout from "@/components/layout/layout";
// import React, { useState } from "react";
// import {
//     Badge,
//     Box,
//     Button,
//     Card,
//     Flex,
//     HStack,
//     Image,
//     Input,
//     Select,
//     Text,
//     Heading,
//     Tooltip,
//     IconButton,
//     Portal,
//     createListCollection,
// } from "@chakra-ui/react";
// import { FaCopy, FaEdit } from "react-icons/fa";
// import { IoMdCopy } from "react-icons/io";

// // Static data for brand admins
// const brandAdmins = [
//     {
//         id: "ADM001",
//         name: "John Doe",
//         email: "john.doe@example.com",
//         phone: "+1-555-123-4567",
//         status: "Active",
//         role: "Admin",
//         lastLogin: "2025-04-29 14:30",
//         image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=60",
//     },
//     {
//         id: "ADM002",
//         name: "Jane Smith",
//         email: "jane.smith@example.com",
//         phone: "+1-555-987-6543",
//         status: "Inactive",
//         role: "Moderator",
//         lastLogin: "2025-04-28 09:15",
//         image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=60",
//     },
//     {
//         id: "ADM003",
//         name: "Alex Johnson",
//         email: "alex.johnson@example.com",
//         phone: "+1-555-456-7890",
//         status: "Active",
//         role: "Admin",
//         lastLogin: "2025-04-30 08:45",
//         image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=60",
//     },
//     {
//         id: "ADM004",
//         name: "Emily Davis",
//         email: "emily.davis@example.com",
//         phone: "+1-555-321-6547",
//         status: "Active",
//         role: "Moderator",
//         lastLogin: "2025-04-29 16:20",
//         image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=60",
//     },
//     {
//         id: "ADM005",
//         name: "Michael Brown",
//         email: "michael.brown@example.com",
//         phone: "+1-555-654-3210",
//         status: "Inactive",
//         role: "Admin",
//         lastLogin: "2025-04-27 12:00",
//         image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=60",
//     },
// ];

// // Define static color scheme
// const colors = {
//     background: "white",
//     text: "gray.700",
//     headerBg: "gray.50",
//     accent: "blue.500",
//     success: "green.500",
//     inactive: "gray.500",
//     border: "gray.300",
// };
// const statusOptions = createListCollection({
//     items: [
//         "Active",
//         "Inactive"
//     ]
// })

// function Team() {
//     // State for search and filter
//     const [searchTerm, setSearchTerm] = useState("");
//     const [statusFilter, setStatusFilter] = useState("All");

//     // Filter admins based on search and status
//     const filteredAdmins = brandAdmins.filter((admin) => {
//         const matchesSearch =
//             admin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//             admin.email.toLowerCase().includes(searchTerm.toLowerCase());
//         const matchesStatus = statusFilter === "All" || admin.status === statusFilter;
//         return matchesSearch && matchesStatus;
//     });

//     // Copy ID to clipboard
//     const handleCopyId = (id: string) => {
//         navigator.clipboard.writeText(id);
//         alert(`Admin ID ${id} copied to clipboard.`);
//     };

//     return (
//         <Layout>
//             {/* Header Section */}
//             <Box p={6} bg={colors.headerBg} borderBottomWidth="1px">
//                 <Flex justifyContent="space-between" alignItems="center" flexWrap="wrap" gap={4}>
//                     <Heading size="lg" color={colors.text}>
//                         Teams
//                     </Heading>
//                     <HStack gap="4" flexShrink={0}>
//                         <Select.Root collection={statusOptions}>
//                             {/* <Select.HiddenSelect />
//                     <Select.Label>Select framework</Select.Label> */}
//                             <Select.Control>
//                                 <Select.Trigger>
//                                     <Select.ValueText placeholder="Status" />
//                                 </Select.Trigger>
//                                 <Select.IndicatorGroup>
//                                     <Select.Indicator />
//                                 </Select.IndicatorGroup>
//                             </Select.Control>
//                             <Portal>
//                                 <Select.Positioner>
//                                     <Select.Content>
//                                         {statusOptions.items.map((item) => (
//                                             <Select.Item item={item} key={item} className='w-fit'>
//                                                 {item}
//                                                 <Select.ItemIndicator />
//                                             </Select.Item>
//                                         ))}
//                                     </Select.Content>
//                                 </Select.Positioner>
//                             </Portal>
//                         </Select.Root>
//                         <Input
//                             placeholder="Search by name or email"
//                             value={searchTerm}
//                             onChange={(e) => setSearchTerm(e.target.value)}
//                             w={{ base: "full", md: "250px" }}
//                             bg={colors.background}
//                             borderColor={colors.border}
//                         />
//                     </HStack>
//                 </Flex>
//             </Box>

//             {/* Scrollable Admin List */}
//             <Box
//                 p={6}
//                 maxH="calc(100vh - 200px)"
//                 overflowY="auto"
//                 bg="gray.50"
//             >
//                 <Flex flexDirection="column" gap={4}>
//                     {filteredAdmins.length === 0 ? (
//                         <Text color={colors.text} textAlign="center">
//                             No admins found.
//                         </Text>
//                     ) : (
//                         filteredAdmins.map((admin) => (
//                             <Card.Root
//                                 key={admin.id}
//                                 flexDirection="row"
//                                 overflow="hidden"
//                                 bg={colors.background}
//                                 shadow="sm"
//                                 borderRadius="md"
//                                 transition="all 0.2s"
//                                 _hover={{ shadow: "md" }}
//                                 h="fit-content"
//                             >
//                                 <Flex direction="row" p={4}>
//                                     <Flex
//                                         w="200px"
//                                         alignItems="center"
//                                         justifyContent="center"
//                                         flexShrink={0}
//                                     >
//                                         <Image
//                                             objectFit="cover"
//                                             w="200px"
//                                             h="200px"
//                                             src={admin.image}
//                                             alt={`${admin.name}'s profile`}

//                                         />
//                                     </Flex>
//                                 </Flex>
//                                 <Box flex="1" p={4}>
//                                     <Card.Body>
//                                         <Flex justifyContent="space-between" alignItems="center" mb={2}>
//                                             <Heading size="md" color={colors.text}>
//                                                 {admin.name}
//                                             </Heading>
//                                             <Flex gap="2" alignItems="center">
//                                                 <Badge
//                                                     colorScheme={admin.status === "Active" ? "green" : "gray"}
//                                                     variant="subtle"
//                                                     px={4}
//                                                     py={2}
//                                                 >
//                                                     {admin.status}
//                                                 </Badge>
//                                                 <Button
//                                                     colorScheme="blue"
//                                                     variant="outline"
//                                                     size="sm"
//                                                 >
//                                                     <FaEdit /> Edit
//                                                 </Button>
//                                             </Flex>
//                                         </Flex>
//                                         <Text color={colors.text} fontSize="sm" mb={1}>
//                                             <strong>Email:</strong> {admin.email}
//                                         </Text>
//                                         <Text color={colors.text} fontSize="sm" mb={1}>
//                                             <strong>Phone:</strong> {admin.phone}
//                                         </Text>
//                                         <Text color={colors.text} fontSize="sm" mb={1}>
//                                             <strong>Role:</strong> {admin.role}
//                                         </Text>
//                                         <Text color={colors.text} fontSize="sm" mb={1}>
//                                             <strong>Last Login:</strong> {admin.lastLogin}
//                                         </Text>
//                                         <HStack gap="2" mt={2}>
//                                             <Text color={colors.text} fontSize="sm">
//                                                 <strong>ID:</strong> {admin.id}
//                                             </Text>
//                                             <Button
//                                                 size="xs"
//                                                 variant="outline"
//                                                 colorScheme="blue"
//                                                 onClick={() => handleCopyId(admin.id)}
//                                             >
//                                                 <IoMdCopy />
//                                             </Button>
//                                         </HStack>
//                                     </Card.Body>

//                                 </Box>
//                             </Card.Root>
//                         ))
//                     )}
//                 </Flex>
//             </Box>
//         </Layout>
//     );
// }

// export default Team;
























"use client";

import Layout from "@/components/layout/layout";
import React, { useState } from "react";
import {
    Badge,
    Box,
    Button,
    Card,
    Flex,
    HStack,
    Image,
    Input,
    Select,
    Text,
    Heading,
    Tooltip,
    IconButton,
    Portal,
    createListCollection,
    Table,
} from "@chakra-ui/react";
import { FaCopy, FaEdit } from "react-icons/fa";
import { IoMdCopy } from "react-icons/io";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Static data for brand admins
const brandAdmins = [
    {
        id: "ADM001",
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "+1-555-123-4567",
        status: "Active",
        role: "Admin",
        lastLogin: "2025-04-29 14:30",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM002",
        name: "Jane Smith",
        email: "jane.smith@example.com",
        phone: "+1-555-987-6543",
        status: "Inactive",
        role: "Moderator",
        lastLogin: "2025-04-28 09:15",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM003",
        name: "Alex Johnson",
        email: "alex.johnson@example.com",
        phone: "+1-555-456-7890",
        status: "Active",
        role: "Admin",
        lastLogin: "2025-04-30 08:45",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM004",
        name: "Emily Davis",
        email: "emily.davis@example.com",
        phone: "+1-555-321-6547",
        status: "Active",
        role: "Moderator",
        lastLogin: "2025-04-29 16:20",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM005",
        name: "Michael Brown",
        email: "michael.brown@example.com",
        phone: "+1-555-654-3210",
        status: "Inactive",
        role: "Admin",
        lastLogin: "2025-04-27 12:00",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM001",
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "+1-555-123-4567",
        status: "Active",
        role: "Admin",
        lastLogin: "2025-04-29 14:30",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM002",
        name: "Jane Smith",
        email: "jane.smith@example.com",
        phone: "+1-555-987-6543",
        status: "Inactive",
        role: "Moderator",
        lastLogin: "2025-04-28 09:15",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM003",
        name: "Alex Johnson",
        email: "alex.johnson@example.com",
        phone: "+1-555-456-7890",
        status: "Active",
        role: "Admin",
        lastLogin: "2025-04-30 08:45",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM004",
        name: "Emily Davis",
        email: "emily.davis@example.com",
        phone: "+1-555-321-6547",
        status: "Active",
        role: "Moderator",
        lastLogin: "2025-04-29 16:20",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM005",
        name: "Michael Brown",
        email: "michael.brown@example.com",
        phone: "+1-555-654-3210",
        status: "Inactive",
        role: "Admin",
        lastLogin: "2025-04-27 12:00",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM001",
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "+1-555-123-4567",
        status: "Active",
        role: "Admin",
        lastLogin: "2025-04-29 14:30",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM002",
        name: "Jane Smith",
        email: "jane.smith@example.com",
        phone: "+1-555-987-6543",
        status: "Inactive",
        role: "Moderator",
        lastLogin: "2025-04-28 09:15",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM003",
        name: "Alex Johnson",
        email: "alex.johnson@example.com",
        phone: "+1-555-456-7890",
        status: "Active",
        role: "Admin",
        lastLogin: "2025-04-30 08:45",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM004",
        name: "Emily Davis",
        email: "emily.davis@example.com",
        phone: "+1-555-321-6547",
        status: "Active",
        role: "Moderator",
        lastLogin: "2025-04-29 16:20",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM005",
        name: "Michael Brown",
        email: "michael.brown@example.com",
        phone: "+1-555-654-3210",
        status: "Inactive",
        role: "Admin",
        lastLogin: "2025-04-27 12:00",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM001",
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "+1-555-123-4567",
        status: "Active",
        role: "Admin",
        lastLogin: "2025-04-29 14:30",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM002",
        name: "Jane Smith",
        email: "jane.smith@example.com",
        phone: "+1-555-987-6543",
        status: "Inactive",
        role: "Moderator",
        lastLogin: "2025-04-28 09:15",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM003",
        name: "Alex Johnson",
        email: "alex.johnson@example.com",
        phone: "+1-555-456-7890",
        status: "Active",
        role: "Admin",
        lastLogin: "2025-04-30 08:45",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM004",
        name: "Emily Davis",
        email: "emily.davis@example.com",
        phone: "+1-555-321-6547",
        status: "Active",
        role: "Moderator",
        lastLogin: "2025-04-29 16:20",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM005",
        name: "Michael Brown",
        email: "michael.brown@example.com",
        phone: "+1-555-654-3210",
        status: "Inactive",
        role: "Admin",
        lastLogin: "2025-04-27 12:00",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM001",
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "+1-555-123-4567",
        status: "Active",
        role: "Admin",
        lastLogin: "2025-04-29 14:30",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM002",
        name: "Jane Smith",
        email: "jane.smith@example.com",
        phone: "+1-555-987-6543",
        status: "Inactive",
        role: "Moderator",
        lastLogin: "2025-04-28 09:15",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM003",
        name: "Alex Johnson",
        email: "alex.johnson@example.com",
        phone: "+1-555-456-7890",
        status: "Active",
        role: "Admin",
        lastLogin: "2025-04-30 08:45",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM004",
        name: "Emily Davis",
        email: "emily.davis@example.com",
        phone: "+1-555-321-6547",
        status: "Active",
        role: "Moderator",
        lastLogin: "2025-04-29 16:20",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM005",
        name: "Michael Brown",
        email: "michael.brown@example.com",
        phone: "+1-555-654-3210",
        status: "Inactive",
        role: "Admin",
        lastLogin: "2025-04-27 12:00",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM001",
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "+1-555-123-4567",
        status: "Active",
        role: "Admin",
        lastLogin: "2025-04-29 14:30",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM002",
        name: "Jane Smith",
        email: "jane.smith@example.com",
        phone: "+1-555-987-6543",
        status: "Inactive",
        role: "Moderator",
        lastLogin: "2025-04-28 09:15",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM003",
        name: "Alex Johnson",
        email: "alex.johnson@example.com",
        phone: "+1-555-456-7890",
        status: "Active",
        role: "Admin",
        lastLogin: "2025-04-30 08:45",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM004",
        name: "Emily Davis",
        email: "emily.davis@example.com",
        phone: "+1-555-321-6547",
        status: "Active",
        role: "Moderator",
        lastLogin: "2025-04-29 16:20",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM005",
        name: "Michael Brown",
        email: "michael.brown@example.com",
        phone: "+1-555-654-3210",
        status: "Inactive",
        role: "Admin",
        lastLogin: "2025-04-27 12:00",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM001",
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "+1-555-123-4567",
        status: "Active",
        role: "Admin",
        lastLogin: "2025-04-29 14:30",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM002",
        name: "Jane Smith",
        email: "jane.smith@example.com",
        phone: "+1-555-987-6543",
        status: "Inactive",
        role: "Moderator",
        lastLogin: "2025-04-28 09:15",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM003",
        name: "Alex Johnson",
        email: "alex.johnson@example.com",
        phone: "+1-555-456-7890",
        status: "Active",
        role: "Admin",
        lastLogin: "2025-04-30 08:45",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM004",
        name: "Emily Davis",
        email: "emily.davis@example.com",
        phone: "+1-555-321-6547",
        status: "Active",
        role: "Moderator",
        lastLogin: "2025-04-29 16:20",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM005",
        name: "Michael Brown",
        email: "michael.brown@example.com",
        phone: "+1-555-654-3210",
        status: "Inactive",
        role: "Admin",
        lastLogin: "2025-04-27 12:00",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM001",
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "+1-555-123-4567",
        status: "Active",
        role: "Admin",
        lastLogin: "2025-04-29 14:30",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM002",
        name: "Jane Smith",
        email: "jane.smith@example.com",
        phone: "+1-555-987-6543",
        status: "Inactive",
        role: "Moderator",
        lastLogin: "2025-04-28 09:15",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM003",
        name: "Alex Johnson",
        email: "alex.johnson@example.com",
        phone: "+1-555-456-7890",
        status: "Active",
        role: "Admin",
        lastLogin: "2025-04-30 08:45",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM004",
        name: "Emily Davis",
        email: "emily.davis@example.com",
        phone: "+1-555-321-6547",
        status: "Active",
        role: "Moderator",
        lastLogin: "2025-04-29 16:20",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM005",
        name: "Michael Brown",
        email: "michael.brown@example.com",
        phone: "+1-555-654-3210",
        status: "Inactive",
        role: "Admin",
        lastLogin: "2025-04-27 12:00",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM001",
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "+1-555-123-4567",
        status: "Active",
        role: "Admin",
        lastLogin: "2025-04-29 14:30",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM002",
        name: "Jane Smith",
        email: "jane.smith@example.com",
        phone: "+1-555-987-6543",
        status: "Inactive",
        role: "Moderator",
        lastLogin: "2025-04-28 09:15",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM003",
        name: "Alex Johnson",
        email: "alex.johnson@example.com",
        phone: "+1-555-456-7890",
        status: "Active",
        role: "Admin",
        lastLogin: "2025-04-30 08:45",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM004",
        name: "Emily Davis",
        email: "emily.davis@example.com",
        phone: "+1-555-321-6547",
        status: "Active",
        role: "Moderator",
        lastLogin: "2025-04-29 16:20",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM005",
        name: "Michael Brown",
        email: "michael.brown@example.com",
        phone: "+1-555-654-3210",
        status: "Inactive",
        role: "Admin",
        lastLogin: "2025-04-27 12:00",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM001",
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "+1-555-123-4567",
        status: "Active",
        role: "Admin",
        lastLogin: "2025-04-29 14:30",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM002",
        name: "Jane Smith",
        email: "jane.smith@example.com",
        phone: "+1-555-987-6543",
        status: "Inactive",
        role: "Moderator",
        lastLogin: "2025-04-28 09:15",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM003",
        name: "Alex Johnson",
        email: "alex.johnson@example.com",
        phone: "+1-555-456-7890",
        status: "Active",
        role: "Admin",
        lastLogin: "2025-04-30 08:45",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM004",
        name: "Emily Davis",
        email: "emily.davis@example.com",
        phone: "+1-555-321-6547",
        status: "Active",
        role: "Moderator",
        lastLogin: "2025-04-29 16:20",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM005",
        name: "Michael Brown",
        email: "michael.brown@example.com",
        phone: "+1-555-654-3210",
        status: "Inactive",
        role: "Admin",
        lastLogin: "2025-04-27 12:00",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM001",
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "+1-555-123-4567",
        status: "Active",
        role: "Admin",
        lastLogin: "2025-04-29 14:30",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM002",
        name: "Jane Smith",
        email: "jane.smith@example.com",
        phone: "+1-555-987-6543",
        status: "Inactive",
        role: "Moderator",
        lastLogin: "2025-04-28 09:15",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM003",
        name: "Alex Johnson",
        email: "alex.johnson@example.com",
        phone: "+1-555-456-7890",
        status: "Active",
        role: "Admin",
        lastLogin: "2025-04-30 08:45",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM004",
        name: "Emily Davis",
        email: "emily.davis@example.com",
        phone: "+1-555-321-6547",
        status: "Active",
        role: "Moderator",
        lastLogin: "2025-04-29 16:20",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM005",
        name: "Michael Brown",
        email: "michael.brown@example.com",
        phone: "+1-555-654-3210",
        status: "Inactive",
        role: "Admin",
        lastLogin: "2025-04-27 12:00",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM001",
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "+1-555-123-4567",
        status: "Active",
        role: "Admin",
        lastLogin: "2025-04-29 14:30",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM002",
        name: "Jane Smith",
        email: "jane.smith@example.com",
        phone: "+1-555-987-6543",
        status: "Inactive",
        role: "Moderator",
        lastLogin: "2025-04-28 09:15",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM003",
        name: "Alex Johnson",
        email: "alex.johnson@example.com",
        phone: "+1-555-456-7890",
        status: "Active",
        role: "Admin",
        lastLogin: "2025-04-30 08:45",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM004",
        name: "Emily Davis",
        email: "emily.davis@example.com",
        phone: "+1-555-321-6547",
        status: "Active",
        role: "Moderator",
        lastLogin: "2025-04-29 16:20",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM005",
        name: "Michael Brown",
        email: "michael.brown@example.com",
        phone: "+1-555-654-3210",
        status: "Inactive",
        role: "Admin",
        lastLogin: "2025-04-27 12:00",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM001",
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "+1-555-123-4567",
        status: "Active",
        role: "Admin",
        lastLogin: "2025-04-29 14:30",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM002",
        name: "Jane Smith",
        email: "jane.smith@example.com",
        phone: "+1-555-987-6543",
        status: "Inactive",
        role: "Moderator",
        lastLogin: "2025-04-28 09:15",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM003",
        name: "Alex Johnson",
        email: "alex.johnson@example.com",
        phone: "+1-555-456-7890",
        status: "Active",
        role: "Admin",
        lastLogin: "2025-04-30 08:45",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM004",
        name: "Emily Davis",
        email: "emily.davis@example.com",
        phone: "+1-555-321-6547",
        status: "Active",
        role: "Moderator",
        lastLogin: "2025-04-29 16:20",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM005",
        name: "Michael Brown",
        email: "michael.brown@example.com",
        phone: "+1-555-654-3210",
        status: "Inactive",
        role: "Admin",
        lastLogin: "2025-04-27 12:00",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM001",
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "+1-555-123-4567",
        status: "Active",
        role: "Admin",
        lastLogin: "2025-04-29 14:30",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM002",
        name: "Jane Smith",
        email: "jane.smith@example.com",
        phone: "+1-555-987-6543",
        status: "Inactive",
        role: "Moderator",
        lastLogin: "2025-04-28 09:15",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM003",
        name: "Alex Johnson",
        email: "alex.johnson@example.com",
        phone: "+1-555-456-7890",
        status: "Active",
        role: "Admin",
        lastLogin: "2025-04-30 08:45",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM004",
        name: "Emily Davis",
        email: "emily.davis@example.com",
        phone: "+1-555-321-6547",
        status: "Active",
        role: "Moderator",
        lastLogin: "2025-04-29 16:20",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM005",
        name: "Michael Brown",
        email: "michael.brown@example.com",
        phone: "+1-555-654-3210",
        status: "Inactive",
        role: "Admin",
        lastLogin: "2025-04-27 12:00",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM001",
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "+1-555-123-4567",
        status: "Active",
        role: "Admin",
        lastLogin: "2025-04-29 14:30",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM002",
        name: "Jane Smith",
        email: "jane.smith@example.com",
        phone: "+1-555-987-6543",
        status: "Inactive",
        role: "Moderator",
        lastLogin: "2025-04-28 09:15",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM003",
        name: "Alex Johnson",
        email: "alex.johnson@example.com",
        phone: "+1-555-456-7890",
        status: "Active",
        role: "Admin",
        lastLogin: "2025-04-30 08:45",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM004",
        name: "Emily Davis",
        email: "emily.davis@example.com",
        phone: "+1-555-321-6547",
        status: "Active",
        role: "Moderator",
        lastLogin: "2025-04-29 16:20",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM005",
        name: "Michael Brown",
        email: "michael.brown@example.com",
        phone: "+1-555-654-3210",
        status: "Inactive",
        role: "Admin",
        lastLogin: "2025-04-27 12:00",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM001",
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "+1-555-123-4567",
        status: "Active",
        role: "Admin",
        lastLogin: "2025-04-29 14:30",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM002",
        name: "Jane Smith",
        email: "jane.smith@example.com",
        phone: "+1-555-987-6543",
        status: "Inactive",
        role: "Moderator",
        lastLogin: "2025-04-28 09:15",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM003",
        name: "Alex Johnson",
        email: "alex.johnson@example.com",
        phone: "+1-555-456-7890",
        status: "Active",
        role: "Admin",
        lastLogin: "2025-04-30 08:45",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM004",
        name: "Emily Davis",
        email: "emily.davis@example.com",
        phone: "+1-555-321-6547",
        status: "Active",
        role: "Moderator",
        lastLogin: "2025-04-29 16:20",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM005",
        name: "Michael Brown",
        email: "michael.brown@example.com",
        phone: "+1-555-654-3210",
        status: "Inactive",
        role: "Admin",
        lastLogin: "2025-04-27 12:00",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM001",
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "+1-555-123-4567",
        status: "Active",
        role: "Admin",
        lastLogin: "2025-04-29 14:30",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM002",
        name: "Jane Smith",
        email: "jane.smith@example.com",
        phone: "+1-555-987-6543",
        status: "Inactive",
        role: "Moderator",
        lastLogin: "2025-04-28 09:15",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM003",
        name: "Alex Johnson",
        email: "alex.johnson@example.com",
        phone: "+1-555-456-7890",
        status: "Active",
        role: "Admin",
        lastLogin: "2025-04-30 08:45",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM004",
        name: "Emily Davis",
        email: "emily.davis@example.com",
        phone: "+1-555-321-6547",
        status: "Active",
        role: "Moderator",
        lastLogin: "2025-04-29 16:20",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM005",
        name: "Michael Brown",
        email: "michael.brown@example.com",
        phone: "+1-555-654-3210",
        status: "Inactive",
        role: "Admin",
        lastLogin: "2025-04-27 12:00",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM001",
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "+1-555-123-4567",
        status: "Active",
        role: "Admin",
        lastLogin: "2025-04-29 14:30",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM002",
        name: "Jane Smith",
        email: "jane.smith@example.com",
        phone: "+1-555-987-6543",
        status: "Inactive",
        role: "Moderator",
        lastLogin: "2025-04-28 09:15",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM003",
        name: "Alex Johnson",
        email: "alex.johnson@example.com",
        phone: "+1-555-456-7890",
        status: "Active",
        role: "Admin",
        lastLogin: "2025-04-30 08:45",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM004",
        name: "Emily Davis",
        email: "emily.davis@example.com",
        phone: "+1-555-321-6547",
        status: "Active",
        role: "Moderator",
        lastLogin: "2025-04-29 16:20",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM005",
        name: "Michael Brown",
        email: "michael.brown@example.com",
        phone: "+1-555-654-3210",
        status: "Inactive",
        role: "Admin",
        lastLogin: "2025-04-27 12:00",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM001",
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "+1-555-123-4567",
        status: "Active",
        role: "Admin",
        lastLogin: "2025-04-29 14:30",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM002",
        name: "Jane Smith",
        email: "jane.smith@example.com",
        phone: "+1-555-987-6543",
        status: "Inactive",
        role: "Moderator",
        lastLogin: "2025-04-28 09:15",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM003",
        name: "Alex Johnson",
        email: "alex.johnson@example.com",
        phone: "+1-555-456-7890",
        status: "Active",
        role: "Admin",
        lastLogin: "2025-04-30 08:45",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM004",
        name: "Emily Davis",
        email: "emily.davis@example.com",
        phone: "+1-555-321-6547",
        status: "Active",
        role: "Moderator",
        lastLogin: "2025-04-29 16:20",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM005",
        name: "Michael Brown",
        email: "michael.brown@example.com",
        phone: "+1-555-654-3210",
        status: "Inactive",
        role: "Admin",
        lastLogin: "2025-04-27 12:00",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM001",
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "+1-555-123-4567",
        status: "Active",
        role: "Admin",
        lastLogin: "2025-04-29 14:30",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM002",
        name: "Jane Smith",
        email: "jane.smith@example.com",
        phone: "+1-555-987-6543",
        status: "Inactive",
        role: "Moderator",
        lastLogin: "2025-04-28 09:15",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM003",
        name: "Alex Johnson",
        email: "alex.johnson@example.com",
        phone: "+1-555-456-7890",
        status: "Active",
        role: "Admin",
        lastLogin: "2025-04-30 08:45",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM004",
        name: "Emily Davis",
        email: "emily.davis@example.com",
        phone: "+1-555-321-6547",
        status: "Active",
        role: "Moderator",
        lastLogin: "2025-04-29 16:20",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM005",
        name: "Michael Brown",
        email: "michael.brown@example.com",
        phone: "+1-555-654-3210",
        status: "Inactive",
        role: "Admin",
        lastLogin: "2025-04-27 12:00",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM001",
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "+1-555-123-4567",
        status: "Active",
        role: "Admin",
        lastLogin: "2025-04-29 14:30",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM002",
        name: "Jane Smith",
        email: "jane.smith@example.com",
        phone: "+1-555-987-6543",
        status: "Inactive",
        role: "Moderator",
        lastLogin: "2025-04-28 09:15",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM003",
        name: "Alex Johnson",
        email: "alex.johnson@example.com",
        phone: "+1-555-456-7890",
        status: "Active",
        role: "Admin",
        lastLogin: "2025-04-30 08:45",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM004",
        name: "Emily Davis",
        email: "emily.davis@example.com",
        phone: "+1-555-321-6547",
        status: "Active",
        role: "Moderator",
        lastLogin: "2025-04-29 16:20",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "ADM005",
        name: "Michael Brown",
        email: "michael.brown@example.com",
        phone: "+1-555-654-3210",
        status: "Inactive",
        role: "Admin",
        lastLogin: "2025-04-27 12:00",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=60",
    },
];

// Define static color scheme
const colors = {
    background: "white",
    text: "gray.700",
    headerBg: "gray.50",
    accent: "blue.500",
    success: "green.500",
    inactive: "gray.500",
    border: "gray.300",
};
const statusOptions = createListCollection({
    items: [
        "Active",
        "Inactive"
    ]
})

function Team() {
    // State for search and filter
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState("All");

    // Filter admins based on search and status
    const filteredAdmins = brandAdmins.filter((admin) => {
        const matchesSearch =
            admin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            admin.email.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = statusFilter === "All" || admin.status === statusFilter;
        return matchesSearch && matchesStatus;
    });

    // Copy ID to clipboard
    // const handleCopyId = (id: string) => {
    //     navigator.clipboard.writeText(id);
    //     alert(Admin ID ${ id } copied to clipboard.);
    // };

    const router = useRouter();
    return (
        <Layout>
            {/* Header Section */}
            <Box p={6} bg={colors.headerBg} borderBottomWidth="1px">
                <Flex justifyContent="space-between" alignItems="center" flexWrap="wrap" gap={4}>
                    <Heading size="lg" color={colors.text}>
                        Teams
                    </Heading>
                    <HStack gap="4" flexShrink={0}>
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
                        </Select.Root>
                        <Input
                            placeholder="Search by name or email"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            w={{ base: "full", md: "250px" }}
                            bg={colors.background}
                            borderColor={colors.border}
                        />
                    </HStack>
                </Flex>
            </Box>

            {/* Scrollable Admin List */}
            <Box
                p={6}
                maxH="calc(100vh - 200px)"
                overflowY="auto"
                bg="gray.50"
            >
                <Flex flexDirection="column" gap={4}>
                    {filteredAdmins.length === 0 ? (
                        <Text color={colors.text} textAlign="center">
                            No admins found.
                        </Text>
                    ) : (

                        <Table.ScrollArea borderWidth="1px" rounded="md" height="full">
                            <Table.Root size="sm" stickyHeader>
                                <Table.Header>
                                    <Table.Row bg="bg.subtle">
                                        <Table.ColumnHeader>Image</Table.ColumnHeader>
                                        <Table.ColumnHeader>Id</Table.ColumnHeader>
                                        <Table.ColumnHeader>Name</Table.ColumnHeader>
                                        <Table.ColumnHeader>Phone</Table.ColumnHeader>
                                        <Table.ColumnHeader>Role</Table.ColumnHeader>
                                        <Table.ColumnHeader>Last Login</Table.ColumnHeader>
                                        <Table.ColumnHeader textAlign="end">Status</Table.ColumnHeader>
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    {filteredAdmins.map((admin) => (
                                        // <Link href={`/owner/agents/${admin.id}`}>
                                            <Table.Row key={admin.id} onClick={() => router.push(`/owner/agents/${admin.id}`)} cursor="pointer" _hover={{ bg: "gray.50" }}>
                                                {/* <Table.Cell>{admin.image}</Table.Cell> */}
                                                <Table.Cell><Image
                                                    boxSize="30px"
                                                    borderRadius="sm"
                                                    src={admin.image}
                                                    alt={admin.name}
                                                    objectFit="cover"
                                                /></Table.Cell>
                                                <Table.Cell>{admin.id}</Table.Cell>
                                                <Table.Cell>{admin.name}</Table.Cell>
                                                <Table.Cell>{admin.phone}</Table.Cell>
                                                <Table.Cell>{admin.role}</Table.Cell>
                                                <Table.Cell>{admin.lastLogin}</Table.Cell>
                                                <Table.Cell textAlign="end">{admin.status}</Table.Cell>
                                            </Table.Row>
                                        // </Link>
                                    ))}
                                </Table.Body>
                            </Table.Root>
                        </Table.ScrollArea>
                    )}
                </Flex>
            </Box>
        </Layout>
    );
}

export default Team;