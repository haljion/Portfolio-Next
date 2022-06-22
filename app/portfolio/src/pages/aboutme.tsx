import { Box, Center, VStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/header";

const AboutMe: NextPage = () => {
  return (
    <>
      <Head>
        <title>about me</title>
      </Head>
      <Box bgColor="#b5d2dd" h="100vh" w="100vw">
        <Header />
        <VStack h="95vh" w="100vw" color="#6d7d7f" fontSize="3rem">
          <Center
            id="pageTitle"
            borderWidth="medium"
            borderColor="#6d7d7f"
            borderStyle="double"
            bg="#f1f0dd"
            w="80vw"
          >
            ABOUT ME
          </Center>
        </VStack>
      </Box>
    </>
  );
};

export default AboutMe;
