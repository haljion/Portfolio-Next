import { Box, Button } from "@mui/material";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
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

      <Box>haljion's portfolio</Box>
      <Link href="/aboutme" as="/aboutme">
        <Button
          variant="contained"
          color="secondary"
          endIcon={<ArrowCircleRightIcon />}
        >
          MORE ABOUT ME!
        </Button>
      </Link>
    </>
  );
};

export default Home;
