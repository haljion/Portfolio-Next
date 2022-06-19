import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const AboutMe: NextPage = () => {
  return (
    <>
      <Head>
        <title>about me</title>
      </Head>
      about me
      <Link href="/" as="/">
        <a>HOME</a>
      </Link>
    </>
  );
};

export default AboutMe;
