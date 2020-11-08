import React, { useContext } from "react";
import Grid from "../components/Grid";
import Navbar from "../components/NavBar";
import { Heading, Box } from "@chakra-ui/core";
import { Context } from "../Context";

function SearchPage() {
  const { search, searchResults } = useContext(Context);
  console.log(search);
  return (
    <Box
      bg="primaryBackground"
      h="100vh"
      w="100vw"
      style={{
        overflow: "scroll"
      }}
    >
      <Heading paddingY="80px" textAlign="center" color="white">
        Search Results for {search}
      </Heading>
      <Navbar />
      <Grid searchResults={searchResults} />
    </Box>
  );
}

export default SearchPage;
