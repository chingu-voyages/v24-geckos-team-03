import React, { useContext } from "react";
import Searchbar from './Searchbar';
import { Link as RouterLink } from "react-router-dom";
import { Link as Links } from "react-router-dom";
import { Context } from "../Context";
import { Box, Image, Link, Switch, Heading, Stack } from "@chakra-ui/core";

const NavBar = () => {
  const {
    setDefaultMovies,
    defaultMovies,
    setSearchResults,
    search
  } = useContext(Context);
  const clicked = () => {
    setDefaultMovies(true);
  };

  const stickyNav = {
    position : "fixed",
    boxShadow : "0 2px 2px #49c3fd",
    zIndex : "9999"

  }

  return (
         <Box bg="primaryBackground" 
          w="100%" 
          px={5} 
          py={5}
          paddingBottom="10px" 
          style={stickyNav}

          >

      <Stack isInline justifyContent="space-between">
        <Link as={RouterLink} to="/">
          <Stack isInline onClick={clicked}>
            <Image
              src="https://cdn1.iconfinder.com/data/icons/media-colorful-1/48/film_roll-512.png"
              size={46}
            />
            <Heading as="h3" size="xl" fontWeight="200" color="#49c3fd" fontFamily="Gugi, cursive">
              DAILY FLIX
            </Heading>
          </Stack>
          </Link>
          <Stack isInline>
            <Searchbar />
            <Switch size="sm" ml={2}/>
          </Stack>
        </Stack>
        <Box float="right" marginRight="198px">
            {/* Use RouterLink as written in ChakraUI docs */}
            <Link textDecoration="none" _hover={{color : "#49c3fd"}} as={RouterLink} to="/favorites" px={2} color="#fff" className="link">My Favorites</Link>
            <Link _hover={{color : "#49c3fd"}} className="navbar-links" px={2} color="#fff" className="link">Watch List</Link>
        </Box>
      </Box>

 
      
    )
}


export default NavBar;


