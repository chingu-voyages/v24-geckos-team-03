import { Box, useColorMode, Text} from "@chakra-ui/core";
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
      {/* <Box
        color={colorMode === 'light' ? "#333" : '#fff'} 
        fontSize="200%"
        maxWidth="800px"
        margin= "0 auto"
        marginTop= "135px"
        marginBottom="2%"
        display= "block"
        textTransform="uppercase"
        padding="0 20px"
        position= "relative"
        z-index= "3"
        textAlign= "center"
        _hover={{color: 'red'}}
        _before={{content: '', background: 'white', height: '1px', position: 'absolute',  width: '100%', maxWidth: '800px',  left: 0, top: '50%', zindex: -1}}
        _after={{ content: '',  background: '#333', position: 'absolute', width: '52%', height: '100%', maxWidth: '800px', left: '24%', top: 0, zindex: -1}}
      >
        Favorite Movies
      </Box> */}
        <Box className="page-heading watch-list"
             color={colorMode === 'light' ? "#fff" : '#fff'}
    
        >
        Favorite Movies
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
