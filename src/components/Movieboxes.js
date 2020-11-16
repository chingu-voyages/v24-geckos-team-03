import React from "react";
import { Box, Image, PseudoBox, Icon } from "@chakra-ui/core";
import { FaHeart, FaClipboardList } from "react-icons/fa";
import NotFound from "../img/not-found.jpg";

function Movieboxes(props) {
  const {
    imageSrc,
    title,
    onClick,
    year,
    rating,
    isFavorite,
    isWantToWatch,
  } = props;

  return (
    <PseudoBox
      onClick={() => onClick()}
      bg="cardBackground"
      w="13vw"
      minW="175px"
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
      {rating !== null && (
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
          <Box d="inline">{rating}</Box>
          <Icon
            name="star"
            paddingLeft="2px"
            paddingBottom="3px"
            color="#ffff00"
          />
        </Box>
      )}

      {isFavorite !== null && (
        <Box
          position="absolute"
          top="4px"
          left="5px"
          p="0.5em"
          lineHeight="1em"
          borderRadius="1em"
          h="2em"
          color="primaryText"
        >
          {isFavorite && <FaHeart size="20px" color="#ff0000" />}
        </Box>
      )}

      {isWantToWatch !== null && (
        <Box
          position="absolute"
          top="4px"
          left="30px"
          p="0.5em"
          lineHeight="1em"
          borderRadius="1em"
          h="2em"
          color="primaryText"
        >
          {isWantToWatch && <FaClipboardList size="20px" color="#49c3fd" />}
        </Box>
      )}

      {imageSrc !== null ? (
        <Image rounded="lg" src={imageSrc} objectFit="cover" />
      ) : (
        <Image rounded="lg" src={NotFound} objectFit="cover" w="100%" />
      )}

      <Box m="5px" textAlign="center" fontSize="1.1em">
        {`${title} ${year !== null ? `(${year})` : ""}`}
      </Box>
    </PseudoBox>
  );
}

export default Movieboxes;
