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
// import { useRouter } from "next/navigation";
// import { GoPlus } from "react-icons/go";


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

// function Brands() {
//     const router = useRouter();
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
//                         Brands
//                     </Heading>
//                     <HStack gap="4" flexShrink={0}>
//                         <Button
//                             colorScheme="blue"
//                             // variant="outline"
//                             size="sm"
//                         >
//                             <GoPlus /> Create
//                         </Button>
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
//                                 cursor="pointer"
//                                 onClick={() => router.push(`/master/brands/${admin.id}`)}
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

// export default Brands;
















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
    Alert,
    SimpleGrid,
} from "@chakra-ui/react";
import { FaEdit, FaCopy } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { useRouter } from "next/navigation";
import { RiDeleteBinLine } from "react-icons/ri";

const Demo = () => {
    return (
        <Alert.Root status="info" title="This is the alert title">
            <Alert.Indicator />
            <Alert.Title>This is the alert title</Alert.Title>
        </Alert.Root>
    )
}


// Define brand type for TypeScript
interface Brand {
    id: string;
    name: string;
    website: string;
    category: string;
    createdAt: string;
    status: "Active" | "Inactive";
    logo: string;
}

// Static data for brands
const brands: Brand[] = [
    {
        id: "BRD001",
        name: "Trendy Threads",
        website: "https://trendythreads.com",
        category: "Fashion",
        createdAt: "2024-01-15",
        status: "Active",
        logo: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "BRD002",
        name: "TechTrend Innovations",
        website: "https://techtrend.com",
        category: "Technology",
        createdAt: "2023-11-20",
        status: "Inactive",
        logo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "BRD003",
        name: "Gourmet Delights",
        website: "https://gourmetdelights.com",
        category: "Food & Beverage",
        createdAt: "2024-03-10",
        status: "Active",
        logo: "https://images.unsplash.com/photo-1542827478-4b285b3b8a9b?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "BRD004",
        name: "Eco Living",
        website: "https://ecoliving.com",
        category: "Sustainability",
        createdAt: "2023-09-05",
        status: "Active",
        logo: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=200&q=60",
    },
    {
        id: "BRD005",
        name: "FitGear",
        website: "https://fitgear.com",
        category: "Fitness",
        createdAt: "2024-02-25",
        status: "Inactive",
        logo: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=200&q=60",
    },
];

// Define static color scheme
const colors = {
    background: "white",
    text: "gray.800",
    headerBg: "gray.100",
    accent: "blue.600",
    success: "green.600",
    inactive: "gray.600",
    border: "gray.200",
};

// Reusable CardList component
interface CardListProps {
    brands: Brand[];
    handleCopyId: (id: string) => void;
    handleCardClick: (id: string) => void;
}

const CardList: React.FC<CardListProps> = ({ brands, handleCopyId, handleCardClick }) => {
    return (
        <SimpleGrid columns={{ base: 1, md: 2 }} gap="6">
            {brands.length === 0 ? (
                <Text color={colors.text} textAlign="center" fontSize="lg" py={4}>
                    No brands found.
                </Text>
            ) : (
                brands.map((brand) => (
                    <Card.Root
                        key={brand.id}
                        bg={colors.background}
                        shadow="md"
                        borderRadius="lg"
                        overflow="hidden"
                        transition="all 0.3s"
                        _hover={{ shadow: "lg", transform: "scale(1.02)" }}
                        cursor="pointer"
                        onClick={() => handleCardClick(brand.id)}


                    >
                        <Flex direction={{ base: "column", md: "row" }} p={6}>
                            <Flex
                                w={{ base: "full", md: "120px" }}
                                alignItems="center"
                                justifyContent="center"
                                flexShrink={0}
                                mb={{ base: 4, md: 0 }}
                            >
                                <Image
                                    objectFit="cover"
                                    w="120px"
                                    h="120px"
                                    src={brand.logo}
                                    alt={`${brand.name} logo`}
                                    borderRadius="full"
                                />
                            </Flex>
                            <Box flex="1" p={{ base: 0, md: 4 }}>
                                <Flex justifyContent="space-between" alignItems="center" mb={3}>
                                    <Heading size="md" color={colors.text} fontWeight="bold">
                                        {brand.name}
                                    </Heading>
                                    <HStack gap={2}>
                                        <Badge
                                            colorScheme={brand.status === "Active" ? "green" : "gray"}
                                            variant="solid"
                                            px={3}
                                            py={2}
                                            fontSize="sm"
                                        >
                                            {brand.status}
                                        </Badge>
                                        <Button
                                            colorScheme="blue"
                                            variant="outline"
                                            size="sm"
                                            onClick={(e) => {
                                                e.stopPropagation(); // Prevent card click navigation
                                                // Add edit logic here
                                            }}
                                        >
                                            <RiDeleteBinLine />
                                            Delete
                                        </Button>
                                    </HStack>
                                </Flex>
                                <Text color={colors.text} fontSize="sm" mb={2} fontWeight="medium">
                                    <strong>Website:</strong>{" "}
                                    <a href={brand.website} target="_blank" rel="noopener noreferrer">
                                        {brand.website}
                                    </a>
                                </Text>
                                <Text color={colors.text} fontSize="sm" mb={2} fontWeight="medium">
                                    <strong>Category:</strong> {brand.category}
                                </Text>
                                <Text color={colors.text} fontSize="sm" mb={3} fontWeight="medium">
                                    <strong>Created:</strong> {brand.createdAt}
                                </Text>
                                <HStack gap={2}>
                                    <Text color={colors.text} fontSize="sm" fontWeight="medium">
                                        <strong>ID:</strong> {brand.id}
                                    </Text>
                                    <Button
                                        size="sm"
                                        variant="outline"
                                        colorScheme="blue"

                                        onClick={(e) => {
                                            e.stopPropagation(); // Prevent card click navigation
                                            handleCopyId(brand.id);
                                        }}
                                    >
                                        <FaCopy />
                                        Copy ID
                                    </Button>
                                </HStack>
                            </Box>
                        </Flex>
                    </Card.Root>
                ))
            )}
        </SimpleGrid>
    );
};

function Brands() {
    const router = useRouter();
    // State for search, filter, and copy feedback
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState("All");
    const [copiedId, setCopiedId] = useState<string | null>(null);

    // Filter brands based on search and status
    const filteredBrands = brands.filter((brand) => {
        const matchesSearch =
            brand.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            brand.website.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = statusFilter === "All" || brand.status === statusFilter;
        return matchesSearch && matchesStatus;
    });

    // Copy ID to clipboard
    const handleCopyId = (id: string) => {
        navigator.clipboard.writeText(id);
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000); // Clear after 2 seconds
    };

    // Handle card click navigation
    const handleCardClick = (id: string) => {
        router.push(`/master/brands/${id}`);
    };

    return (
        <Layout>
            {/* Header Section */}
            <Box
                p={6}
                bg={colors.headerBg}
                borderBottomWidth="1px"
                borderColor={colors.border}
                shadow="sm"
            >
                <Flex justifyContent="space-between" alignItems="center" flexWrap="wrap" gap={4}>
                    <Heading size="lg" color={colors.text} fontWeight="bold">
                        Brands
                    </Heading>
                    <HStack gap={4} flexShrink={0}>
                        <Button
                            colorScheme="blue"
                            size="md"
                            borderRadius="md"
                            px={4}
                            _hover={{ bg: colors.accent, color: "white" }}
                        >
                            <GoPlus />
                            Create
                        </Button>
                        {/* <Select
              w={{ base: "full", md: "200px" }}
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              bg={colors.background}
              borderColor={colors.border}
              borderRadius="md"
              fontSize="sm"
            >
              <option value="All">All Statuses</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </Select> */}
                        <Input
                            placeholder="Search by name or website"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            w={{ base: "full", md: "250px" }}
                            bg={colors.background}
                            borderColor={colors.border}
                            borderRadius="md"
                            fontSize="sm"
                        />
                    </HStack>
                </Flex>
            </Box>

            {/* Scrollable Brand List */}
            <Box
                p={6}
                maxH="calc(100vh - 200px)"
                overflowY="auto"
                bg="gray.50"
            >
                {copiedId && (
                    <Alert.Root status="info" title="This is the alert title">
                        <Alert.Indicator />
                        <Alert.Title>Brand ID {copiedId} copied to clipboard.</Alert.Title>
                    </Alert.Root>
                )}
                <CardList
                    brands={filteredBrands}
                    handleCopyId={handleCopyId}
                    handleCardClick={handleCardClick}
                />
            </Box>
        </Layout>
    );
}

export default Brands;