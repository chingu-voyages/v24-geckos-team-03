import React, { useContext } from "react";
import Searchbar from './Searchbar';
import { Link as RouterLink } from "react-router-dom";
import { Context } from "../Context";
import { Box, Image, Link, Switch, Heading, Stack , Icon, useColorMode, Button} from "@chakra-ui/core";
import {SunIcon, MoonIcon} from '@chakra-ui/icons';

const NavBar = () => {
  const {
    setDefaultMovies,
    navShadow
  } = useContext(Context);
  const clicked = () => {
    setDefaultMovies(true);
  };

//lightMode toggling
const {colorMode, toggleColorMode} = useColorMode();

  return (
    <Box
      className="nav-bar"
      style={{ top: 0 }}
      position="absolute"
      bg={colorMode === 'light' ? "white" : 'primaryBackground'}
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
      <Stack isInline justifyContent="space-between">
        <Link as={RouterLink} to="/">
          <Stack isInline onClick={clicked}>
            <Image
              src="https://cdn1.iconfinder.com/data/icons/media-colorful-1/48/film_roll-512.png"
              size={46}
            />
            <Heading as="h3" size="xl" fontWeight="200" color={colorMode === 'light' ? "#333" : 'logoText'} fontFamily="Gugi, cursive">
              DAILY FLIX
            </Heading>
          </Stack>
          </Link>
          <Stack isInline>
            <Searchbar />
            <Icon as={colorMode === "dark" ? SunIcon : MoonIcon} onClick={() => toggleColorMode()} />
          </Stack>
        </Stack>
        <Box float="right" marginRight="198px">
            {/* Use RouterLink as written in ChakraUI docs */}
            <Link textDecoration="none" _hover={{color : "#49c3fd"}} as={RouterLink} to="/favorites" px={2} color={colorMode === 'light' ? "#333" : 'primaryText'} className="link">My Favorites</Link>
            <Link _hover={{color : "#49c3fd"}} className="navbar-links" as={RouterLink} to="/watchList" px={2} color={colorMode === 'light' ? "#333" : 'primaryText'}>Watch List</Link>
        </Box>
      </Box>

 
      
    )
}


export default NavBar;


