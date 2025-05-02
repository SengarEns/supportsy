// import Layout from '@/components/layout/layout'
// import React from 'react'

// function BrandDetails() {
//     return (
//         <Layout>
//             <div>BrandDetails</div>
//         </Layout>
//     )
// }

// export default BrandDetails













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
    Text,
    Heading,
    Alert,
    VStack,
    Link,
    Tooltip,
    IconButton,
} from "@chakra-ui/react";
import { FaCopy, FaEdit, FaArrowLeft, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useRouter, useParams } from "next/navigation";

// Define brand type for TypeScript
interface Brand {
    id: string;
    name: string;
    website: string;
    category: string;
    createdAt: string;
    status: "Active" | "Inactive";
    logo: string;
    description: string;
    contactEmail: string;
    contactPhone: string;
    socialMedia: {
        twitter?: string;
        instagram?: string;
        linkedin?: string;
    };
    foundedYear: number;
    headquarters: string;
}

// Static data for brands (mock API)
const brands: Brand[] = [
    {
        id: "BRD001",
        name: "Trendy Threads",
        website: "https://trendythreads.com",
        category: "Fashion",
        createdAt: "2024-01-15",
        status: "Active",
        logo: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=200&q=60",
        description: "Trendy Threads is a leading fashion brand offering sustainable, stylish clothing for all ages.",
        contactEmail: "contact@trendythreads.com",
        contactPhone: "+1-555-123-4567",
        socialMedia: {
            twitter: "https://twitter.com/trendythreads",
            instagram: "https://instagram.com/trendythreads",
            linkedin: "https://linkedin.com/company/trendythreads",
        },
        foundedYear: 2018,
        headquarters: "New York, NY, USA",
    },
    {
        id: "BRD002",
        name: "TechTrend Innovations",
        website: "https://techtrend.com",
        category: "Technology",
        createdAt: "2023-11-20",
        status: "Inactive",
        logo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=200&q=60",
        description: "TechTrend Innovations develops cutting-edge software solutions for businesses worldwide.",
        contactEmail: "support@techtrend.com",
        contactPhone: "+1-555-987-6543",
        socialMedia: {
            twitter: "https://twitter.com/techtrend",
            linkedin: "https://linkedin.com/company/techtrend",
        },
        foundedYear: 2020,
        headquarters: "San Francisco, CA, USA",
    },
    {
        id: "BRD003",
        name: "Gourmet Delights",
        website: "https://gourmetdelights.com",
        category: "Food & Beverage",
        createdAt: "2024-03-10",
        status: "Active",
        logo: "https://images.unsplash.com/photo-1542827478-4b285b3b8a9b?auto=format&fit=crop&w=200&q=60",
        description: "Gourmet Delights offers premium artisanal foods, crafted with love and tradition.",
        contactEmail: "info@gourmetdelights.com",
        contactPhone: "+1-555-456-7890",
        socialMedia: {
            instagram: "https://instagram.com/gourmetdelights",
        },
        foundedYear: 2015,
        headquarters: "Paris, France",
    },
    {
        id: "BRD004",
        name: "Eco Living",
        website: "https://ecoliving.com",
        category: "Sustainability",
        createdAt: "2023-09-05",
        status: "Active",
        logo: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=200&q=60",
        description: "Eco Living promotes sustainable products for a greener planet.",
        contactEmail: "hello@ecoliving.com",
        contactPhone: "+1-555-321-6547",
        socialMedia: {
            twitter: "https://twitter.com/ecoliving",
            instagram: "https://instagram.com/ecoliving",
        },
        foundedYear: 2019,
        headquarters: "Vancouver, Canada",
    },
    {
        id: "BRD005",
        name: "FitGear",
        website: "https://fitgear.com",
        category: "Fitness",
        createdAt: "2024-02-25",
        status: "Inactive",
        logo: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=200&q=60",
        description: "FitGear provides high-quality fitness equipment for home and gym use.",
        contactEmail: "support@fitgear.com",
        contactPhone: "+1-555-654-3210",
        socialMedia: {
            instagram: "https://instagram.com/fitgear",
            linkedin: "https://linkedin.com/company/fitgear",
        },
        foundedYear: 2021,
        headquarters: "London, UK",
    },
];

// Define static color scheme (refined for vibrancy)
const colors = {
    background: "white",
    text: "gray.700",
    headerBg: "gray.50",
    accent: "blue.700",
    success: "green.600",
    inactive: "gray.600",
    border: "gray.200",
};

function BrandDetails() {
    const router = useRouter();
    //   const { id } = useParams();
    const params = useParams();
    const slug = params.slug; // Will be a string | string[] | undefined
    console.log("ID", slug)
    const [copiedId, setCopiedId] = useState<string | null>(null);

    // Find brand by ID
    const brand = brands.find((b) => b.id === slug) || null;

    // Copy ID to clipboard
    const handleCopyId = (id: string) => {
        navigator.clipboard.writeText(id);
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000); // Clear after 2 seconds
    };

    // Toggle status (placeholder)
    const handleToggleStatus = () => {
        alert(`Toggling status for ${brand?.name}`);
    };

    // Edit brand (navigate to edit page as placeholder)
    const handleEditBrand = () => {
        router.push(`/master/brands/${slug}/edit`);
        // Alternatively, use alert: alert(`Editing ${brand?.name}`);
    };

    if (!brand) {
        return (
            <Layout>
                <Box p={8} bg="gray.50" minH="calc(100vh - 200px)">
                    <Text color={colors.text} fontSize="lg" textAlign="center">
                        Brand not found.
                    </Text>
                </Box>
            </Layout>
        );
    }

    return (
        <Layout>
            <Box px={8} py={6} bg="gray.50" minH="calc(100vh - 200px)">
                {/* Copy Feedback */}
                {copiedId && (
                    //   <Alert status="success" mb={6} borderRadius="md" maxW="500px" mx="auto">
                    //     Brand ID {copiedId} copied to clipboard.
                    //   </Alert>  
                    <Alert.Root status="info" title="This is the alert title">
                        <Alert.Indicator />
                        <Alert.Title>Brand ID {copiedId} copied to clipboard.</Alert.Title>
                    </Alert.Root>
                )}

                {/* Header (Sticky) */}
                <Box
                    bg={colors.headerBg}
                    shadow="sm"
                    borderRadius="lg"
                    p={6}
                    position="sticky"
                    top={0}
                    zIndex={10}
                    mb={8}
                >
                    <Flex justifyContent="space-between" alignItems="center" flexWrap="wrap" gap={4}>
                        <HStack gap={4}>
                            <Button
                                variant="outline"
                                colorScheme="blue"
                                onClick={() => router.push("/master/brands")}
                                size="md"
                                borderRadius="md"
                                transition="all 0.2s"
                                _hover={{ bg: colors.accent, color: "white" }}
                            >
                               <FaArrowLeft /> Back to Brands
                            </Button>
                            <Heading size="xl" color={colors.text} fontWeight="bold">
                                {brand.name}
                            </Heading>
                            <Badge
                                colorScheme={brand.status === "Active" ? "green" : "gray"}
                                variant="solid"
                                px={4}
                                py={2}
                                fontSize="sm"
                                borderRadius="md"
                            >
                                {brand.status}
                            </Badge>
                        </HStack>
                        <HStack gap={4}>
                            <Button
                                colorScheme="blue"
                                variant="outline"
                                size="md"
                                onClick={handleEditBrand}
                                borderRadius="md"
                                transition="all 0.2s"
                                _hover={{ bg: colors.accent, color: "white" }}
                            >
                               <FaEdit /> Edit Brand
                            </Button>
                            <Button
                                colorScheme={brand.status === "Active" ? "gray" : "green"}
                                variant="outline"
                                size="md"
                                onClick={handleToggleStatus}
                                borderRadius="md"
                                transition="all 0.2s"
                                _hover={{ bg: brand.status === "Active" ? colors.inactive : colors.success, color: "white" }}
                            >
                                {brand.status === "Active" ? "Deactivate" : "Activate"}
                            </Button>
                        </HStack>
                    </Flex>
                </Box>

                {/* Main Content */}
                <Card.Root
                    bg={colors.background}
                    shadow="md"
                    borderRadius="xl"
                    p={8}
                    transition="all 0.3s"
                    _hover={{ shadow: "lg" }}
                >
                    <Flex
                        direction={{ base: "column", md: "row" }}
                        gap={8}
                        alignItems={{ base: "center", md: "flex-start" }}
                    >
                        {/* Brand Logo and Overview */}
                        <VStack gap="6" align="center" flex={{ base: "1", md: "0 0 350px" }}>
                            <Image
                                objectFit="cover"
                                w="150px"
                                h="150px"
                                src={brand.logo}
                                alt={`${brand.name} logo`}
                                borderRadius="full"
                                border="2px solid"
                                borderColor={colors.border}
                                transition="all 0.3s"
                                _hover={{ transform: "scale(1.05)" }}
                            />
                            <VStack gap="3" align="start" w="full">
                                <Text fontSize="lg" fontWeight="semibold" color={colors.text}>
                                    Overview
                                </Text>
                                <Text color={colors.text} fontSize="sm" lineHeight="tall">
                                    {brand.description}
                                </Text>
                                <HStack gap={2} w="full">
                                    <Text color={colors.text} fontSize="sm" fontWeight="medium">
                                        <strong>ID:</strong> {brand.id}
                                    </Text>
                                    {/* <Tooltip label="Copy Brand ID" hasArrow>
                                        <IconButton
                                            size="sm"
                                            variant="outline"
                                            colorScheme="blue"
                                            icon={<FaCopy />}
                                            onClick={() => handleCopyId(brand.id)}
                                            aria-label="Copy Brand ID"
                                            borderRadius="md"
                                            transition="all 0.2s"
                                            _hover={{ bg: colors.accent, color: "white" }}
                                        />
                                    </Tooltip> */}
                                </HStack>
                            </VStack>
                        </VStack>

                        {/* Brand Details */}
                        <VStack gap="8" align="start" flex="1">
                            {/* General Info */}
                            <Box w="full">
                                <Text fontSize="lg" fontWeight="semibold" color={colors.text} mb={4}>
                                    General Information
                                </Text>
                                <VStack gap="3" align="start">
                                    <Text color={colors.text} fontSize="sm" fontWeight="medium">
                                        <strong>Website:</strong>{" "}
                                        <Link href={brand.website}  color={colors.accent} _hover={{ textDecor: "underline" }}>
                                            {brand.website}
                                        </Link>
                                    </Text>
                                    <Text color={colors.text} fontSize="sm" fontWeight="medium">
                                        <strong>Category:</strong> {brand.category}
                                    </Text>
                                    <Text color={colors.text} fontSize="sm" fontWeight="medium">
                                        <strong>Founded:</strong> {brand.foundedYear}
                                    </Text>
                                    <Text color={colors.text} fontSize="sm" fontWeight="medium">
                                        <strong>Created:</strong> {brand.createdAt}
                                    </Text>
                                    <Text color={colors.text} fontSize="sm" fontWeight="medium">
                                        <strong>Headquarters:</strong> {brand.headquarters}
                                    </Text>
                                </VStack>
                            </Box>

                            {/* Contact Info */}
                            <Box w="full">
                                <Text fontSize="lg" fontWeight="semibold" color={colors.text} mb={4}>
                                    Contact Information
                                </Text>
                                <VStack gap="3" align="start">
                                    <Text color={colors.text} fontSize="sm" fontWeight="medium">
                                        <strong>Email:</strong>{" "}
                                        <Link href={`mailto:${brand.contactEmail}`} color={colors.accent} _hover={{ textDecor: "underline" }}>
                                            {brand.contactEmail}
                                        </Link>
                                    </Text>
                                    <Text color={colors.text} fontSize="sm" fontWeight="medium">
                                        <strong>Phone:</strong> {brand.contactPhone}
                                    </Text>
                                </VStack>
                            </Box>

                            {/* Social Media */}
                            <Box w="full">
                                <Text fontSize="lg" fontWeight="semibold" color={colors.text} mb={4}>
                                    Social Media
                                </Text>
                                <HStack gap="4">
                                    {brand.socialMedia.twitter && (
                                        // <Tooltip label="Visit Twitter" hasArrow>
                                            <Link href={brand.socialMedia.twitter} isExternal>
                                                <IconButton
                                                    size="md"
                                                    colorScheme="twitter"
                                                    aria-label="Twitter"
                                                    borderRadius="full"
                                                    transition="all 0.2s"
                                                    _hover={{ transform: "scale(1.1)", bg: "blue.600" }}
                                                >
                                                    <FaTwitter />
                                                </IconButton>
                                            </Link>
                                        // </Tooltip>
                                    )}
                                    {brand.socialMedia.instagram && (
                                        // <Tooltip label="Visit Instagram" hasArrow>
                                            <Link href={brand.socialMedia.instagram} isExternal>
                                                <IconButton
                                                    size="md"
                                                    colorScheme="pink"
                                                    aria-label="Instagram"
                                                    borderRadius="full"
                                                    transition="all 0.2s"
                                                    _hover={{ transform: "scale(1.1)", bg: "pink.600" }}
                                                >
                                                    <FaInstagram />
                                                </IconButton>
                                            </Link>
                                        // </Tooltip>
                                    )}
                                    {brand.socialMedia.linkedin && (
                                        // <Tooltip label="Visit LinkedIn" hasArrow>
                                            <Link href={brand.socialMedia.linkedin} isExternal>
                                                <IconButton
                                                    size="md"
                                                    colorScheme="linkedin"
                                                    aria-label="LinkedIn"
                                                    borderRadius="full"
                                                    bg="linkedin.500"
                                                    transition="all 0.2s"
                                                    _hover={{ transform: "scale(1.1)", bg: "blue.600" }}
                                                ><FaLinkedin /></IconButton>
                                            </Link>
                                        // </Tooltip>
                                    )}
                                </HStack>
                            </Box>
                        </VStack>
                    </Flex>
                </Card.Root>
            </Box>
        </Layout>
    );
}

export default BrandDetails;