import { Button, Divider, Flex } from "@chakra-ui/react";
import React from "react";
import { MdMessage, MdSettings } from "react-icons/md";

export default function MobileNav({ menu, setMenu }) {
  return (
    <Flex
      w="100%"
      h="65px"
      align="center"
      justify="space-evenly"
      boxShadow="base"
    >
      <Button
        w="50%"
        h="95%"
        bgColor="whiteAlpha.900"
        borderRadius="3"
        color={!menu ? "#6096B4" : "gray.600"}
        shadow={!menu ? "lg" : ""}
        onClick={() => setMenu(false)}
        leftIcon={<MdMessage />}
        border={!menu ? "1px solid #6096B4" : ""}
      >
        Interact
      </Button>
      <Divider orientation="vertical" />
      <Button
        w="50%"
        h="95%"
        bgColor="whiteAlpha.900"
        borderRadius="3"
        color={menu ? "#6096B4" : "gray.600"}
        shadow={menu ? "base" : ""}
        leftIcon={<MdSettings />}
        onClick={() => setMenu(true)}
        border={menu ? "1px solid #6096B4" : ""}
      >
        Set Context
      </Button>
    </Flex>
  );
}
