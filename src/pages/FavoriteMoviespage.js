import React, { useContext } from "react";
import { Box} from "@chakra-ui/core";
import NavBar from "../components/NavBar";
import FavoriteMovies from './../components/FavoriteMovies';
import Footer from './../components/Footer';



const FavoriteMoviespage = () => {

// const headerStyles = {
    // position: "absolute",
    // top: "100px",
    // color: "red",
    // left: "150px",
    // fontSize: "25px",
    // fontWeight: "400"
//   };
  return (
    <Box
      bg="primaryBackground"
      h="100vh"
      w="100vw"
      style={{
        overflow: "scroll",
      }}
    >
      <NavBar />
      <Box>
        <h1 className="page-heading favorites-list">Favorite Movies</h1>
      </Box>
      <Box className="movie-grid">
        <FavoriteMovies />
      </Box>
      <Footer />
    </Box>
  
  );    
    
}

export default FavoriteMoviespage;