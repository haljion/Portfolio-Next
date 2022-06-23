import {
  Box,
  Center,
  HStack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  VStack,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Sidebar from "../components/sidebar";
import PageTitle from "../components/pageTitle";

const Skill: NextPage = () => {
  return (
    <>
      <Head>
        <title>Skill</title>
      </Head>
      <HStack>
        <Sidebar />
        <VStack h="100vh" w="85vw" fontSize="3rem" bg="#f1f0dd">
          <PageTitle text="SKILL" />

          <Tabs>
            <TabList>
              <Tab>One</Tab>
              <Tab>Two</Tab>
              <Tab>Three</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <p>one!</p>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
              <TabPanel>
                <p>three!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </VStack>
      </HStack>
    </>
  );
};

export default Skill;
