import React, { useContext, useEffect } from "react";
import axios from "axios";
import { Box } from "@chakra-ui/core";
import Grid from "../components/Grid";
import NavBar from "../components/NavBar";
import Filter from "../components/FilterBar/Filter";

import { Context } from "../Context";

function Homepage() {
  const {
    isSearch,
    searchResults,
    homePageResults,
    setHomePageResults,
    defaultMovies,
    setDefaultMovies,
    APIKEY
  } = useContext(Context);

  useEffect(() => {
    if (defaultMovies === true) {
      try {
        axios
          .get(
            `https://api.themoviedb.org/3/trending/movie/week?api_key=${APIKEY}`
          )
          .then(res => {
            setHomePageResults(res.data.results);
            setDefaultMovies(true);
          });
      } catch (err) {
        console.log(err);
      }
    }
  }, [defaultMovies]);

  const headerStyles = {
    position: "absolute",
    top: "100px",
    color: "white",
    left: "150px",
    fontSize: "25px",
    fontWeight: "100"
  };

  return (
    <Box
      bg="primaryBackground"
      h="100vh"
      w="100vw"
      style={{
        overflow: "scroll"
      }}
    >
      <h1 style={headerStyles}>{isSearch ? null : "Popular Movies"}</h1>
      <NavBar />
      <Filter />
      <Grid searchResults={homePageResults} />
    </Box>
  );
}

export default Homepage;
