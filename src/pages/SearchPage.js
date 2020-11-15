import React, { useContext } from "react";
import Grid from "../components/Grid";
import Navbar from "../components/NavBar";
import { Heading, Box , useColorMode} from "@chakra-ui/core";
import { Context } from "../Context";
import Footer from './../components/Footer';

function SearchPage() {
  //color mode 
  const {colorMode} = useColorMode();
  const { search, searchResults, isSearch } = useContext(Context);
  console.log(search);
  return (
    <Box
      bg={colorMode === 'light' ? "white" : 'primaryBackground'} 
      h="100vh"
      w="100vw"
      style={{
        overflow: "scroll"
      }}
    >
       <Navbar />
      <Heading paddingY="80px" marginY="50px" textAlign="center" color={colorMode === 'light' ? "#333" : '#fff'} >
        {isSearch ? `Search Results for ${search}` : `Search For Movie`}
      </Heading>
     
      <Grid searchResults={searchResults} />
      <Footer />
    </Box>
  );
}

export default SearchPage;
