import React, { useContext, useEffect } from "react";
import { Box, Heading , useColorMode} from "@chakra-ui/core";
import axios from "axios";
import Grid from "../components/Grid";
import NavBar from "../components/NavBar";
import Filter from "../components/FilterBar/Filter";
import { Context } from "../Context";
import Footer from "./../components/Footer";


function Homepage() {

//color Mode 
const {colorMode} = useColorMode();
  const {
    setNavShadow,
    navShadow,
    homePageResults,
    setHomePageResults,
    defaultMovies,
    setDefaultMovies,
    APIKEY,
  } = useContext(Context);

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

  useEffect(() => {
    if (defaultMovies === true) {
      try {
        axios
          .get(
            `https://api.themoviedb.org/3/trending/movie/week?api_key=${APIKEY}`
          )
          .then((res) => {
            setHomePageResults(res.data.results);
          });
      } catch (err) {
        console.log(err);
      }
    }
  }, [defaultMovies, APIKEY, setHomePageResults, setDefaultMovies]);

  return (
<<<<<<< ours
    
    <Box
      ref={myRef}
      bg={colorMode === 'light' ? "white" : 'primaryBackground'}
      h="100vh"
      w="100vw"
      style={{
        overflow: "scroll",
      }}
      onScroll={onScroll}
=======
    <Box bg="primaryBackground"
    position="relative"
    minHeight="100vh"
>>>>>>> theirs
    >
      &nbsp;
      <Filter />
      <Heading
        as="h3"
        size="lg"
        marginTop="10px"
        marginLeft="5%"
        color={colorMode === 'light' ? "#333" : 'primaryText'}
      >
        {defaultMovies ? "Popular Movies" : null}
      </Heading>
      <Grid searchResults={homePageResults} />
      <NavBar />
      <Footer />
    </Box>
  );
}

export default Homepage;
