import Layout from "@/components/layout/layout";
import { theme } from "@/styles/theme";
import { Button, HStack } from "@chakra-ui/react";
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      <div>
        <HStack>
          <Button bg={theme.light.interactive.background} color="green.600">
            Click me
          </Button>
          <Button>Click me</Button>
        </HStack>
      </div>
    </Layout>
  );
}
