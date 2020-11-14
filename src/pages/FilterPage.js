import React, { useContext, useEffect, useState } from "react";
import { Box, Heading } from "@chakra-ui/core";
import axios from "axios";
import Grid from "../components/Grid";
import NavBar from "../components/NavBar";
import Filter from "../components/FilterBar/Filter";

import { Context } from "../Context";

function FilterPage() {
  const { filterdResults } = useContext(Context);
  console.log(filterdResults);

  return (
    <>
      <Box
        bg="primaryBackground"
        h="100vh"
        w="100vw"
        style={{
          overflow: "scroll"
        }}
      >
        <NavBar />
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
      </Box>
    </>
  );
}

export default FilterPage;
