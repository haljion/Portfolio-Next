import { Box, Center, Flex, HStack, Spacer } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>HOME</title>
      </Head>

      <Flex bg="black" color="#ff00aa" h={100} w="100%" fontSize={20}>
        <Center bg="white">
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

      <Center>haljion's portfolio</Center>
    </>
  );
};

export default Home;
