import React, { useContext, useEffect } from "react";
import { Box, Heading } from "@chakra-ui/core";
import Grid from "../components/Grid";
import NavBar from "../components/NavBar";
import Filter from "../components/FilterBar/Filter";
import Footer from "./../components/Footer";

import { Context } from "../Context";

function FilterPage() {
  const { filterdResults, navShadow, setNavShadow } = useContext(Context);
  console.log(filterdResults);

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
      <Filter />
      <Heading
        as="h3"
        size="lg"
        marginTop="10px"
        marginLeft="5%"
        color="primaryText"
      >
        Filter Results
      </Heading>
      <Grid searchResults={filterdResults} />
      <NavBar />
      <Footer />
    </Box>
  );
}

export default FilterPage;
