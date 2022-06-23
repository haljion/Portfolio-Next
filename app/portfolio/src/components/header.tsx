import { Flex, Center, Spacer, HStack } from "@chakra-ui/react";
import { NextPage } from "next";
import Link from "next/link";

const Header: NextPage = () => {
  return (
    <Flex color="#6d7d7f" h="5vh" w="100vw" fontSize="2rem">
      <Center>
        <Link href="/" as="/">
          <a>haljion's portfolio</a>
        </Link>
      </Center>
      <Spacer />
      <HStack>
        <Link href="/aboutme" as="/aboutme">
          <a>ABOUTME</a>
        </Link>

        <Link href="/skill" as="/skill">
          <a>SKILL</a>
        </Link>

        <Link href="/portfolio" as="/portfolio">
          <a>PORTFOLIO</a>
        </Link>
      </HStack>
    </Flex>
  );
};

export default Header;
