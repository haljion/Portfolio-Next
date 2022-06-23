import { Flex, Center, Spacer, HStack } from "@chakra-ui/react";
import { NextPage } from "next";
import Link from "next/link";

const PageTitle: NextPage<{ text: string }> = (props) => {
  return (
    <Center
      id="pageTitle"
      borderWidth="medium"
      borderColor="#6d7d7f"
      borderStyle="double"
      bg="#f1f0dd"
      w="80vw"
    >
      {props.text}
    </Center>
  );
};

export default PageTitle;
