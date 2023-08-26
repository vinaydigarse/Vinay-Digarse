import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Sessions = () => {
  return (
    <Box p={20}>
      <Text
        textAlign={"center"}
        fontWeight={600}
        letterSpacing={1}
        color={"#292F36"}
        fontSize={{ base: "36px", md: "42px", lg: "48px" }}
      >
        Sessions
      </Text>
    </Box>
  );
};

export default Sessions;
