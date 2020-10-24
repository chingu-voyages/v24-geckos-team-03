import React from "react";
import { Box, Image } from "@chakra-ui/core";

function Movieboxes(props) {
  const {imageSrc, title, onClick} = props;

  return (
    <Box onClick={()=>onClick()} bg="black" w="170px" m={4} color="white" fontSize={"8px"}>
      <Image src={imageSrc} w="170px" h={"220px"} objectFit="cover" />

      <h1>{title}</h1>
    </Box>
  );
}

export default Movieboxes;
