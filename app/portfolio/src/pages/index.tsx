import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Spacer,
  VStack,
} from "@chakra-ui/react";
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
      <Box
        bg="linear-gradient(120deg, #b5d2dd 0 65%, #f1f0dd 65% 100%)"
        h="100vh"
        w="100vw"
      >
        <Header />
        <VStack h="95vh" w="100vw" color="#6d7d7f" fontSize="3rem">
          <Box>haljion's portfolio むっちょり</Box>

          <Link href="/aboutme" as="/aboutme">
            <Button
              as="a"
              size="lg"
              rightIcon={<ArrowForwardIcon />}
              // colorScheme="#f1f0dd"
              color="#ffffff"
              borderColor="#6d7d7f"
              bgColor="#6d7d7f"
              variant="solid"
            >
              MORE ABOUT ME!
            </Button>
          </Link>
        </VStack>
      </Box>
    </>
  );
};

export default Home;
