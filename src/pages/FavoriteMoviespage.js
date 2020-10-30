import React, { useContext } from "react";
import { ThemeProvider, Box, Flex, Link, Image,  Switch , Heading, Stack} from "@chakra-ui/core";
import Grid from "../components/Grid";
import { Context } from "../Context";
import Movieboxes from "../components/Movieboxes";
import NavBar from "../components/NavBar";
import { Localbase } from 'localbase';
import FavoriteMovies from './../components/FavoriteMovies';



const FavoriteMoviespage = () => {

const headerStyles = {
    position: "absolute",
    top: "100px",
    color: "red",
    left: "150px",
    fontSize: "25px",
    fontWeight: "400"
  };
  return (
    <Box
      bg="primaryBackground"
      h="100vh"
      w="100vw"
      style={{
        overflow: "scroll",
      }}
    >
      <h1 style={headerStyles}>Favorite Movies</h1>
      <NavBar />
      <FavoriteMovies />
    </Box>
  );
         
        
    
}

export default FavoriteMoviespage;