import React, { useContext } from "react";
import { Box, Heading } from "@chakra-ui/core";
import Grid from "../components/Grid";
import NavBar from "../components/NavBar";
import FilterSidebar from "../components/FilterSidebar";

import { Context } from "../Context";

function Homepage() {
  const { isSearch, searchResults, setNavShadow, navShadow } = useContext(
    Context
  );

  const myRef = React.createRef(); //need so that we can access scrolling position of div on scroll event

  function onScroll() {
    const scrollTop = myRef.current.scrollTop;
    if (!navShadow && scrollTop > 0) setNavShadow(true);
    else if (navShadow && scrollTop === 0) setNavShadow(false);
  }

  return (
    <Box
      ref={myRef}
      bg="primaryBackground"
      h="100vh"
      w="100vw"
      style={{
        overflow: "scroll",
      }}
      onScroll={onScroll}
    >
      <NavBar />
      <FilterSidebar />
      <Heading
        as="h3"
        size="lg"
        marginTop="10px"
        marginLeft="5%"
        color="primaryText"
      >
        {isSearch ? null : "Popular Movies"}
      </Heading>
      <Grid searchResults={searchResults} />
    </Box>
  );
}

export default Homepage;
