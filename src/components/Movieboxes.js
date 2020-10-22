import React from "react";
import { Box, Image } from "@chakra-ui/core";

function Movieboxes(props) {
  return (
    <Box bg="tomato" w="150px" m={4} color="white" fontSize={"8px"}>
      <Image />

      <h1>{props.title}</h1>
    </Box>
  );
}

export default Movieboxes;
