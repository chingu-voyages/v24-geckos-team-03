import React, { useContext } from "react";
import Searchbar from './Searchbar';
import { Link as RouterLink } from "react-router-dom";
import { Context } from "../Context";
import { Box, Image, Link, Switch, Heading, Stack , Icon, Flex, useColorMode, Button} from "@chakra-ui/core";
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
          : "0px 6px 6px 3px rgba(0, 0, 0, 0.1)"
      }
    >
      <Flex isInline justifyContent="space-between" className="top-nav">
        <Link as={RouterLink} to="/">
          <Flex isInline onClick={clicked} className="logo">
            <Image 
              src={colorMode === "light" ? "https://res.cloudinary.com/eerian/image/upload/v1605408687/dark_logo_mzlvsb.png" 
                                        : "https://cdn1.iconfinder.com/data/icons/media-colorful-1/48/film_roll-512.png"
              
            }
              size={46}
              mt={-1}
            />
            <Heading as="h3" size="xl" fontWeight="200" color={colorMode === 'light' ? "#4A5568" : "logoText"} fontFamily="Gugi, cursive" className="logo-name">
              DAILY FLIX
            </Heading>
          </Flex>
          </Link>
          <Flex isInline className="search-bar-section">
            <Searchbar />
            <Icon mr={5} mt={2} as={colorMode === "dark" ? SunIcon : MoonIcon} onClick={() => toggleColorMode()} />
          </Flex>
        </Flex>
        <Flex justifyContent="flex-end" marginRight="200px" className="nav-lists">
            {/* Use RouterLink as written in ChakraUI docs */}
            <Link _hover={{color : "#49c3fd"}} className="navbar-links" as={RouterLink} to="/favorites" px={2} color={colorMode === 'light' ? "#333" : 'primaryText'}>My Favorites</Link>
            <Link _hover={{color : "#49c3fd"}} className="navbar-links" as={RouterLink} to="/watchList" px={2} color={colorMode === 'light' ? "#333" : 'primaryText'}>Watch List</Link>
        </Flex>
      </Box>

 
      
    )
}


export default NavBar;


