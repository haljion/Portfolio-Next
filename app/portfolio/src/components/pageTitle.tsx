import { Flex, Center, Spacer, HStack } from "@chakra-ui/react";
import Link from "next/link";

const Header = () => {
  return (
    <Center
      id="pageTitle"
      borderWidth="medium"
      borderColor="#6d7d7f"
      borderStyle="double"
      bg="#f1f0dd"
      w="80vw"
    >
      ABOUT ME
    </Center>
  );
};

export default Header;
