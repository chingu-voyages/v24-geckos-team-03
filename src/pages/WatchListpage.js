import React, { useContext } from "react";
import { Box, useColorMode} from "@chakra-ui/core";
import NavBar from "../components/NavBar";
import WatchList from './../components/WatchList';
import Footer from './../components/Footer';

const WatchListpage = () => {

//color mode
const {colorMode} = useColorMode();

  return (
    <Box
      bg={colorMode === 'light' ? "white" : 'primaryBackground'} 
      h="100vh"
      w="100vw"
      style={{
        overflow: "scroll",
      }}
    >
      <NavBar />
      <Box>
        <h1 className="page-heading watch-list">Movies for later</h1>
      </Box>
      <Box className="movie-grid">
        <WatchList />
      </Box>
      <Footer />
    </Box>
  
  );    
    
}

export default WatchListpage;