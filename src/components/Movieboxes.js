import React from "react";
import { Box, Image, PseudoBox, Icon } from "@chakra-ui/core";

function Movieboxes(props) {
  const { imageSrc, title, onClick, year, rating } = props;

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
      position="relative"
    >
      <Box
        position="absolute"
        top="8px"
        right="8px"
        backgroundColor="rgb(0,0,0,0.6)"
        p="0.5em"
        lineHeight="1em"
        borderRadius="1em"
        h="2em"
        color="primaryText"
      >
        <Box d="inline">
          {rating}
        </Box>
        <Icon name="star" paddingLeft="2px" paddingBottom="3px"/>
      </Box>
      <Image rounded="lg" src={imageSrc} objectFit="cover" />

      <Box m="5px" textAlign="center">
        {`${title} (${year})`}
      </Box>
    </PseudoBox>
  );
}

export default Movieboxes;
