import { Box, Center, VStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/header";

const Skill: NextPage = () => {
  return (
    <>
      <Head>
        <title>Skill</title>
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
            SKILL
          </Center>
        </VStack>
      </Box>
    </>
  );
};

export default Skill;
