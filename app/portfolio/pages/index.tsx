import { Box, chakra } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>HOME</title>
      </Head>

      <Box>
        <chakra.h1 color="tomato">トマト</chakra.h1>
      </Box>

      <Link href="/aboutme" as="/aboutme">
        <a>ABOUT ME</a>
      </Link>

      <Link href="/skill" as="/skill">
        <a>SKILL</a>
      </Link>

      <Link href="/portfolio" as="/portfolio">
        <a>PORTFOLIO</a>
      </Link>
    </>
  );
};

export default Home;
