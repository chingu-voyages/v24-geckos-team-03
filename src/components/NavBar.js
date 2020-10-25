import React from "react";
import Searchbar from "./Searchbar";
import {
  Box,
  Flex,
  Link,
  Image,
  Switch,
  Heading,
  Stack,
} from "@chakra-ui/core";

const NavBar = () => {
  return (
    <Box className="nav-bar" bg="primaryBackground" w="100%" px={5} py={2}>
      <Stack isInline justifyContent="space-between">
        <Stack isInline>
          <Image
            src="https://cdn1.iconfinder.com/data/icons/media-colorful-1/48/film_roll-512.png"
            size={30}
          />
          <Heading as="h3" size="lg" color="logoText">
            Daily Flix
          </Heading>
        </Stack>
        <Stack isInline>
          <Searchbar />
          <Switch size="sm" ml={2} />
        </Stack>
      </Stack>

      <Box float="right" mr={10}>
        <Link px={2} color="primaryText" className="link">
          My Favorites
        </Link>
        <Link px={2} color="primaryText" className="link">
          Watched
        </Link>
        <Link px={2} color="primaryText" className="link">
          Watch List
        </Link>
      </Box>
    </Box>
  );
};

export default NavBar;
