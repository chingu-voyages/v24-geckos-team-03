import React, { useContext } from "react";
import Searchbar from './Searchbar';
import { Link as RouterLink } from "react-router-dom";
import { ThemeProvider, Box, Flex, Link, Image,  Switch , Heading, Stack} from "@chakra-ui/core";
import { Context } from "../Context";

const NavBar = () => {
  const { setDefaultMovies, defaultMovies, setPersonId } = useContext(Context);
  const clicked = () => {
    setPersonId(null);
    setDefaultMovies(true);
    console.log(defaultMovies);
    console.log("hello");
  };
  return (
    <Box className="nav-bar" bg="primaryBackground" w="100%" px={5} py={2}>
      <Stack isInline justifyContent="space-between">
        <Link as={RouterLink} to="/">
          <Stack isInline onClick={clicked}>
            <Image
              src="https://cdn1.iconfinder.com/data/icons/media-colorful-1/48/film_roll-512.png"
              size={46}
            />
            <Heading as="h3" size="xl" color="#49c3fd" fontFamily="Nunito">
              Daily Flix
            </Heading>
          </Stack>
          </Link>
          <Stack isInline>
            <Searchbar />
            <Switch size="sm" ml={2}/>
          </Stack>
        </Stack>
        <Box float="right" marginRight="198px" pt="4px">
            {/* Use RouterLink as written in ChakraUI docs */}
            <Link textDecoration="none" _hover={{color : "#49c3fd"}} as={RouterLink} to="/favorites" px={2} color="#fff" className="link">My Favorites</Link>
            <Link _hover={{color : "#49c3fd"}} className="navbar-links" px={2} color="#fff" className="link">Watch List</Link>
        </Box>
      </Box>
      
    )
}


export default NavBar;


