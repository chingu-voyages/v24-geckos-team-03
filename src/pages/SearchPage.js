import React, { useContext, useEffect } from "react";
import Grid from "../components/Grid";
import Navbar from "../components/NavBar";
import { Heading, Box , useColorMode} from "@chakra-ui/core";
import { Context } from "../Context";
import Footer from "./../components/Footer";

function SearchPage() {
  const { searchQuery, searchResults, setNavShadow, navShadow , isSearch, search} = useContext(Context);
  console.log(searchQuery);
  
  //color mode 
  const {colorMode} = useColorMode();


  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navShadow]);
  // need navShadow as a dependency, or the value of navShadow won't change between onScroll events (it will always be false)

  function onScroll() {
    const scrollTop = window.scrollY;

    if (!navShadow && scrollTop > 0) {
      setNavShadow(true);
    } else if (navShadow && scrollTop === 0) {
      setNavShadow(false);
    }
  }

  return (
    <Box bg={colorMode === 'light' ? "white" : 'primaryBackground'} 
    position="relative"
    minHeight="100vh"
    >
      &nbsp;
      <Heading paddingY="80px" marginY="50px" textAlign="center" color={colorMode === 'light' ? "#333" : '#fff'} >
        {isSearch ? `Search Results for ${search}` : `Search For Movie`}
      </Heading>
      <Grid searchResults={searchResults} />
      <Navbar />
      <Footer />
    </Box>
  );
}

export default SearchPage;
