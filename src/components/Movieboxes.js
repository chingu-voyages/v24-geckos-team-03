import React from "react";
import { Box, Image, PseudoBox } from "@chakra-ui/core";

function Movieboxes(props) {
  const { imageSrc, title, onClick, year } = props;

  return (
    <PseudoBox
      onClick={() => onClick()}
      bg="cardBackground"
      w="15vw"
      minW="150px"
      m={4}
      color="primaryText"
      cursor="pointer"
      borderWidth="1px"
      borderColor="primaryBorder"
      rounded="lg"
      fontSize="0.8em"
      p="5px"
      opacity="0.75"
      _hover={{ borderColor: "#666", opacity: "1" }}
    >
      <Image rounded="lg" src={imageSrc} objectFit="cover" />

      <Box m="5px" textAlign="center">
        {`${title} (${year})`}
      </Box>
    </PseudoBox>
  );
}

export default Movieboxes;
