import React from "react";

import { Heading, Box } from "@chakra-ui/react";

export default function Header() {
  return (
    <div>
      <Box w="100%" padding="5" boxShadow="base">
        <Heading
          as="h1"
          size="lg"
          noOfLines={1}
          textAlign="center"
          color="gray.600"
        >
          Mobile BERT Demo
        </Heading>
      </Box>
    </div>
  );
}
