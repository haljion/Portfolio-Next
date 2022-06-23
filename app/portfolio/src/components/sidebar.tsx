import { Flex, Center, Spacer, HStack, VStack } from "@chakra-ui/react";
import { NextPage } from "next";
import Link from "next/link";

const Sidebar: NextPage = () => {
  return (
    <Flex color="#6d7d7f" bg="#b5d2dd" h="100vh" w="15vw" fontSize="2rem">
      <VStack>
        <Link href="/" as="/">
          <a>TOP</a>
        </Link>

        <Link href="/aboutme" as="/aboutme">
          <a>ABOUTME</a>
        </Link>

        <Link href="/skill" as="/skill">
          <a>SKILL</a>
        </Link>

        <Link href="/portfolio" as="/portfolio">
          <a>PORTFOLIO</a>
        </Link>
      </VStack>
    </Flex>
  );
};

export default Sidebar;
