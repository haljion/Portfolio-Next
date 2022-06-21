import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Portfolio: NextPage = () => {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      portfolio
      <Link href="/" as="/">
        <a>HOME</a>
      </Link>
    </>
  );
};

export default Portfolio;
