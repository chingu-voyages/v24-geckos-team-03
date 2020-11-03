import React, { useContext } from "react";
import Searchbar from "./Searchbar";
import { Link as Links } from "react-router-dom";
import { Context } from "../Context";
import {
  Box,
  Flex,
  Image,
  Link,
  Switch,
  Heading,
  Stack
} from "@chakra-ui/core";

const NavBar = () => {
  const { setDefaultMovies, defaultMovies, setPersonId } = useContext(Context);
  const clicked = () => {
    setPersonId(null);
    setDefaultMovies(true);
    console.log(defaultMovies);
    console.log("hello");
  };
  return (
    <Box
      className="nav-bar"
      style={{ top: 0 }}
      bg="primaryBackground"
      w="100%"
      px={5}
      py={2}
    >
      <Stack isInline justifyContent="space-between">
        {" "}
        <Links to="/">
          {" "}
          <Stack isInline onClick={clicked}>
            <Image
              src="https://cdn1.iconfinder.com/data/icons/media-colorful-1/48/film_roll-512.png"
              size={30}
            />{" "}
            <Heading as="h3" size="lg" color="logoText">
              Daily Flix
            </Heading>
          </Stack>
        </Links>
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
