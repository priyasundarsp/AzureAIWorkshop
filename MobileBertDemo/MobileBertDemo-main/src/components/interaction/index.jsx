import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  IconButton,
  Input,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import { MdOutlineSend } from "react-icons/md";
import React from "react";

export default function Interactions({ interactions, setQuestion, isMobile }) {
  const [query, setQuery] = React.useState("");
  const [isLoading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(false);
  }, [isLoading]);
  return (
    <Container
      maxW="550px"
      w="95%"
      minW="320px"
      p="5"
      centerContent
      overflowY="scroll"
    >
      <Heading as="h3" size="lg" color="gray.600" my="5">
        Interactions with BERT
      </Heading>
      <VStack
        w="100%"
        spacing={4}
        h="450px"
        align="stretch"
        p="5"
        borderRadius="md"
        overflowY={isMobile ? "scroll" : "scroll"}
        my="5"
      >
        {interactions.map((iact, _) => {
          return (
            <>
              <Box
                alignSelf="flex-end"
                maxW="280px"
                textAlign="right"
                bgColor="beige"
                px="5"
                py="3"
                borderRadius="md"
              >
                {iact.query}
              </Box>
              <Box
                alignSelf="flex-start"
                maxW="280px"
                bgColor="chakra-subtle-bg"
                px="5"
                py="3"
                borderRadius="md"
              >
                {iact.resp}
              </Box>
            </>
          );
        })}
        {interactions === [] || interactions.length === 0 ? (
          <Center>
            <Text size="md" mx="5" color="gray.800">
              {" "}
              Please try to add context and ask a question 😉
            </Text>
          </Center>
        ) : (
          <></>
        )}
        <Spinner
          display={isLoading ? "flex" : "none"}
          thickness="4px"
          speed=".8s"
          emptyColor="gray.200"
          color="#6096B4"
          size="md"
        />
      </VStack>
      <Flex justify="space-between" w="100%">
        <Input
          placeholder="Your question based on provided context"
          size="lg"
          mr="5"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <IconButton
          colorScheme="teal"
          aria-label="Call Segun"
          size="lg"
          borderRadius="15"
          onClick={() => {
            setLoading(true);
            setQuestion(query);
            setQuery("");
          }}
          icon={<MdOutlineSend />}
        />
      </Flex>
    </Container>
  );
}
