import { Box, Center, Flex, HStack, Spacer } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/header";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>HOME</title>
      </Head>
      <Header />
      <Center
        bg="linear-gradient(120deg, #b5d2dd 0 65%, #f1f0dd 65% 100%)"
        h="95vh"
        w="100vw"
      >
        haljion's portfolio
      </Center>
    </>
  );
};

export default Home;
