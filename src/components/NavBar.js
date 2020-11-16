import React, { useContext } from "react";
import Searchbar from "./Searchbar";
import { Link as RouterLink } from "react-router-dom";
import { Context } from "../Context";
import {
  Box,
  Image,
  Link,
  //Switch,
  Heading,
  Flex,
} from "@chakra-ui/core";

const NavBar = () => {
  const { setDefaultMovies, navShadow } = useContext(Context);
  const clicked = () => {
    setDefaultMovies(true);
  };

  return (
    <Box
      className="nav-bar"
      style={{ top: 0 }}
      position="fixed"
      bg="primaryBackground"
      w="100%"
      px={5}
      py={5}
      paddingBottom="10px"
      zIndex="1000"
      boxShadow={
        navShadow
          ? "0px 6px 6px 3px rgba(0, 0, 0, 0.25)"
          : "0px 6px 6px 3px rgba(0, 0, 0, 0)"
      }
    >
      <Flex isInline justifyContent="space-between" className="top-nav">
        <Link as={RouterLink} to="/">
          <Flex isInline onClick={clicked} className="logo">
            <Image
              src="https://cdn1.iconfinder.com/data/icons/media-colorful-1/48/film_roll-512.png"
              size={46}
            />
            <Heading
              as="h3"
              size="xl"
              fontWeight="200"
              color="#49c3fd"
              fontFamily="Gugi, cursive"
              className="logo-name"
            >
              DAILY FLIX
            </Heading>
          </Flex>
        </Link>
        <Flex isInline className="search-bar-section">
          <Searchbar />
          {/*<Switch size="sm" className="switch-button" />*/}
          &nbsp;
        </Flex>
      </Flex>
      <Flex justifyContent="flex-end" marginRight="198px" className="nav-lists">
        {/* Use RouterLink as written in ChakraUI docs */}
        <Link
          textDecoration="none"
          _hover={{ color: "#49c3fd" }}
          className="navbar-links"
          as={RouterLink}
          to="/favorites"
          px={2}
          color="#fff"
        >
          My Favorites
        </Link>
        <Link
          _hover={{ color: "#49c3fd" }}
          className="navbar-links"
          as={RouterLink}
          to="/watchList"
          px={2}
          color="#fff"
        >
          Watch List
        </Link>
      </Flex>
    </Box>
  );
};

export default NavBar;
