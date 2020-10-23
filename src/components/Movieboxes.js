import React from "react";
import { Box, Image } from "@chakra-ui/core";

function Movieboxes(props) {
  return (
    <Box bg="black" w="170px" m={4} color="white" fontSize={"8px"}>
      <Image src={props.imageSrc} w="170px" h={"220px"} objectFit="cover" />

      <h1>{props.title}</h1>
    </Box>
  );
}

export default Movieboxes;
