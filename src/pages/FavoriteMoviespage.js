import { Box, useColorMode} from "@chakra-ui/core";
import React, { useContext, useEffect } from "react";
import NavBar from "../components/NavBar";
import FavoriteMovies from "./../components/FavoriteMovies";
import Footer from "./../components/Footer";
import { Context } from "../Context";

const FavoriteMoviespage = () => {
//color mode 
const {colorMode} = useColorMode();

  const { navShadow, setNavShadow } = useContext(Context);

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
    <Box bg={colorMode === 'light' ? "white" : 'primaryBackground'} 
    position="relative"
    minHeight="100vh"
     >
      &nbsp;
      <Box>
        <h1 className="page-heading favorites-list">Favorite Movies</h1>
      </Box>
      <Box className="movie-grid">
        <FavoriteMovies />
      </Box>
      <NavBar />
      <Footer />
    </Box>
  );
};

export default FavoriteMoviespage;
