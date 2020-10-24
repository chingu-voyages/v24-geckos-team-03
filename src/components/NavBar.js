import React from "react";
import Searchbar from './Searchbar';
import { ThemeProvider, Box, Flex, Link, Image,  Text , Heading, Stack} from "@chakra-ui/core";

const NavBar = () => {
    return (
        <ThemeProvider>
                <Flex
        bg="#333"
        w="100%"
        px={5}
        py={4}
        justifyContent="space-between"
        alignItems="center"
      >
        <Flex flexDirection="row" justifyContent="center" alignItems="center">
          <Image
            src="https://cdn1.iconfinder.com/data/icons/media-colorful-1/48/film_roll-512.png"
            size={30}
          />
          <Heading as="h2" size="md" pl={3} color="#49c3fd">
            Daily Flix
          </Heading>
        </Flex>
        
        <Box mr={20}>
        <Searchbar />
          <Link px={2} color="#fff" textDecoration="none">My Favorites</Link>
          <Link px={2} color="#fff">Watched</Link>
          <Link px={2} color="#fff">Watch List</Link>
          
        </Box>
      </Flex>
        </ThemeProvider>
    )
}



export default NavBar;


