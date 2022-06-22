import { Box, Center, VStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/header";

const Portfolio: NextPage = () => {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <Box
        bg="linear-gradient(120deg, #b5d2dd 0 65%, #f1f0dd 65% 100%)"
        h="100vh"
        w="100vw"
      >
        <Header />
        <VStack h="95vh" w="100vw" color="#6d7d7f" fontSize="3rem">
          <Center
            id="pageTitle"
            borderWidth="medium"
            borderColor="#6d7d7f"
            borderStyle="double"
            w="80vw"
          >
            PORTFOLIO
          </Center>
        </VStack>
      </Box>
    </>
  );
};

export default Portfolio;
