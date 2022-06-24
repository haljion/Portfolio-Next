import { Button } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Sidebar from "../components/sidebar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>HOME</title>
      </Head>
      <Button variant="contained" color="secondary">
        Hello World
      </Button>
      <Sidebar />
      {/* <VStack
        bg="linear-gradient(120deg, #b5d2dd 0 65%, #f1f0dd 65% 100%)"
        h="100vh"
        w="100vw"
        color="#6d7d7f"
        fontSize="3rem"
      >
        <Center>haljion's portfolio むっちょり</Center>

        <Link href="/aboutme" as="/aboutme">
          <Button
            as="a"
            size="lg"
            rightIcon={<ArrowForwardIcon />}
            color="#ffffff"
            borderColor="#6d7d7f"
            bgColor="#6d7d7f"
            variant="solid"
          >
            MORE ABOUT ME!
          </Button>
        </Link>
      </VStack> */}
    </>
  );
};

export default Home;
