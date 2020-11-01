import React, { useContext } from "react";
import { Box } from "@chakra-ui/core";
import Grid from "../components/Grid";
import NavBar from "../components/NavBar";
import FilterSidebar from "../components/FilterSidebar";

import { Context } from "../Context";

function Homepage() {
  const { isSearch, personName } = useContext(Context);
  // personName is needed to update the heading when searching by actor

  const headerStyles = {
    position: "absolute",
    top: "100px",
    color: "white",
    left: "150px",
    fontSize: "25px",
    fontWeight: "100",
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
      <h1 style={headerStyles}>
        {isSearch
          ? null
          : personName === ""
          ? "Popular Movies"
          : `Movies starring ${personName}`}
      </h1>
      <NavBar />
      <FilterSidebar />
      <Grid />
    </Box>
  );
}

export default Homepage;
