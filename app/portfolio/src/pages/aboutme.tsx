import { Box, Center, VStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/header";
import PageTitle from "../components/pageTitle";

const AboutMe: NextPage = () => {
  return (
    <>
      <Head>
        <title>about me</title>
      </Head>
      <Box bgColor="#b5d2dd" h="100vh" w="100vw">
        <Header />
        <VStack h="95vh" w="100vw" color="#6d7d7f" fontSize="3rem">
          <PageTitle text="ABOUT ME" />
        </VStack>
      </Box>
    </>
  );
};

export default AboutMe;
