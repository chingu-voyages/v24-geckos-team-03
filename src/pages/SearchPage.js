import React, { useContext, useEffect } from "react";
import Grid from "../components/Grid";
import Navbar from "../components/NavBar";
import { Heading, Box } from "@chakra-ui/core";
import { Context } from "../Context";
import Footer from "./../components/Footer";

function SearchPage() {
  const { searchQuery, searchResults, setNavShadow, navShadow } = useContext(Context);
  console.log(searchQuery);
  
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
    <Box bg="primaryBackground"
    position="relative"
    minHeight="100vh"
    >
      &nbsp;
      <Heading paddingY="80px" marginY="50px" textAlign="center" color="white">
        {searchQuery.length > 0
          ? `Search Results for ${searchQuery}`
          : `Search For Movie`}
      </Heading>
      <Grid searchResults={searchResults} />
      <Navbar />
      <Footer />
    </Box>
  );
}

export default SearchPage;
