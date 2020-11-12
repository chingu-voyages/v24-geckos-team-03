import React, { useContext } from "react";
import Grid from "../components/Grid";
import Navbar from "../components/NavBar";
import { Heading, Box } from "@chakra-ui/core";
import { Context } from "../Context";

function SearchPage() {
  const { searchQuery, searchResults } = useContext(Context);
  console.log(searchQuery);

  return (
    <Box
      bg="primaryBackground"
      h="100vh"
      w="100vw"
      style={{
        overflow: "scroll"
      }}
    >
      <Navbar />
      <Heading paddingY="80px" marginY="50px" textAlign="center" color="white">
        {searchQuery.length > 0
          ? `Search Results for ${searchQuery}`
          : `Search For Movie`}
      </Heading>

      <Grid searchResults={searchResults} />
    </Box>
  );
}

export default SearchPage;
