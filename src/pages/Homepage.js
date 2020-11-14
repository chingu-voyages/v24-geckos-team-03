import React, { useContext, useEffect } from "react";
import { Box, Heading } from "@chakra-ui/core";
import axios from "axios";
import Grid from "../components/Grid";
import NavBar from "../components/NavBar";
import Filter from "../components/FilterBar/Filter";
import { Context } from "../Context";
import Footer from './../components/Footer';

function Homepage() {
  const {
    isSearch,
    setNavShadow,
    navShadow,
    homePageResults,
    setHomePageResults,
    defaultMovies,
    setDefaultMovies,
    APIKEY,
  } = useContext(Context);

  const myRef = React.createRef(); //need so that we can access scrolling position of div on scroll event

  function onScroll() {
    const scrollTop = myRef.current.scrollTop;
    if (!navShadow && scrollTop > 0) setNavShadow(true);
    else if (navShadow && scrollTop === 0) setNavShadow(false);
  }

  useEffect(() => {
    if (defaultMovies === true) {
      try {
        axios
          .get(
            `https://api.themoviedb.org/3/trending/movie/week?api_key=${APIKEY}`
          )
          .then((res) => {
            setHomePageResults(res.data.results);
            setDefaultMovies(true);
          });
      } catch (err) {
        console.log(err);
      }
    }
  }, [defaultMovies, APIKEY, setHomePageResults, setDefaultMovies]);

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
      <Filter />
      <Heading
        as="h3"
        size="lg"
        marginTop="10px"
        marginLeft="5%"
        color="primaryText"
      >
        {isSearch ? null : "Popular Movies"}
      </Heading>
      <Grid searchResults={homePageResults} />
      <Footer />
    </Box>

   
  );
}

export default Homepage;
