import { Box, Center, VStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/header";
import PageTitle from "../components/pageTitle";

const Skill: NextPage = () => {
  return (
    <>
      <Head>
        <title>Skill</title>
      </Head>
      <Box bgColor="#b5d2dd" h="100vh" w="100vw">
        <Header />
        <VStack h="95vh" w="100vw" color="#6d7d7f" fontSize="3rem">
          <PageTitle text="SKILL" />
        </VStack>
      </Box>
    </>
  );
};

export default Skill;
