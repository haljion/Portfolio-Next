import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  HStack,
  List,
  ListIcon,
  ListItem,
  VStack,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Sidebar from "../components/sidebar";
import PageTitle from "../components/pageTitle";

const AboutMe: NextPage = () => {
  return (
    <>
      <Head>
        <title>about me</title>
      </Head>
      <HStack>
        <Sidebar />
        <VStack h="100vh" w="85vw" fontSize="3rem" bg="#f1f0dd">
          <PageTitle text="A  B  O  U  T    M  E" />

          <List spacing={3} color="#6d7d7f">
            <ListItem>
              年齢:
              <ListIcon as={ArrowForwardIcon} color="green.500" />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit
            </ListItem>
            <ListItem>
              <ListIcon as={ArrowForwardIcon} color="green.500" />
              Assumenda, quia temporibus eveniet a libero incidunt suscipit
            </ListItem>
            <ListItem>
              <ListIcon as={ArrowForwardIcon} color="green.500" />
              Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
            </ListItem>
            {/* You can also use custom icons from react-icons */}
            <ListItem>
              <ListIcon as={ArrowForwardIcon} color="green.500" />
              Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
            </ListItem>
          </List>
        </VStack>
      </HStack>
    </>
  );
};

export default AboutMe;
