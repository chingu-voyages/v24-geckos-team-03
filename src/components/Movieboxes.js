import React from "react";
import { Box, Image } from "@chakra-ui/core";

function Movieboxes(props) {
  const { imageSrc, title, onClick } = props;

  return (
    <Box
      onClick={() => onClick()}
      bg="primaryBackground"
      w="170px"
      m={4}
      color="primaryText"
      fontSize={"16px"}
    >
      <Image src={imageSrc} w="170px" h={"220px"} objectFit="cover" />

      <h1 className="movie-titles">{title}</h1>
    </Box>
  );
}

export default Movieboxes;
