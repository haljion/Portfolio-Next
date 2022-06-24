import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Sidebar from "../components/sidebar";
import PageTitle from "../components/pageTitle";
import { Box, Grid } from "@mui/material";

const AboutMe: NextPage = () => {
  return (
    <>
      <Head>
        <title>about me</title>
      </Head>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={3}>
          <Sidebar />
        </Grid>
        <Grid item xs={9}>
          <Box fontSize="3rem">ABOUT ME</Box>
        </Grid>
      </Grid>
      {/* <HStack>
        <Sidebar />
        <VStack h="100vh" w="85vw" fontSize="3rem" bg="#f1f0dd">
          <PageTitle text="A  B  O  U  T    M  E" />

          <Flex p="6" w="75vw">
            <Box
              bg="#b5d2dd"
              boxShadow="xl"
              rounded="xl"
              p="6"
              overflow="hidden"
            >
              <Stack>
                <Heading color="#f1f0dd" fontSize="x-large" fontFamily="body">
                  Information
                </Heading>
                <Box color="#6d7d7f" fontSize="md">
                  Chakra UI is a simple, modular and accessible component
                  library that gives you the building blocks you need to build
                  your React applications.
                </Box>
              </Stack>
            </Box>
          </Flex>
        </VStack>
      </HStack> */}
    </>
  );
};

export default AboutMe;
