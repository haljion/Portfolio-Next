import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Skill: NextPage = () => {
  return (
    <>
      <Head>
        <title>Skill</title>
      </Head>
      skill
      <Link href="/" as="/">
        <a>HOME</a>
      </Link>
    </>
  );
};

export default Skill;
