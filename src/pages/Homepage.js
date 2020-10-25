import { Box } from "@chakra-ui/core";
import React from "react";
import Grid from "../components/Grid";
import NavBar from "../components/NavBar";

function Homepage() {
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

      <Grid />
    </Box>
  );
}

export default Homepage;
