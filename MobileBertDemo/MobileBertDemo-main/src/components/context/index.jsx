import { Button, Container, Heading, Text, Textarea } from "@chakra-ui/react";
import { MdClear } from "react-icons/md";
import React from "react";

export default function Context({ inputContext, setContext }) {
  return (
    <>
      <Container
        maxW="550px"
        minH="500px"
        w="95%"
        minW="320px"
        p="5"
        centerContent
      >
        <Heading as="h3" size="lg" color="gray.600" my="5">
          Context
        </Heading>
        <Text size="md" mx="5" color="gray.800">
          Please provide a passage or multiple passages for the language model
          to understand the context.
        </Text>
        <Textarea
          mt="10"
          placeholder="please paste your passage here"
          value={inputContext}
          onChange={(e) => setContext(e.target.value)}
          size="md"
          rows={15}
        />
        <Button
          leftIcon={<MdClear />}
          onClick={() => setContext("")}
          p="5"
          m="5"
        >
          Clear Context
        </Button>
      </Container>
    </>
  );
}
