<<<<<<< ours
import React, { useContext } from "react";
import { Box, useColorMode} from "@chakra-ui/core";
=======
import React, { useContext, useEffect } from "react";
import { Box} from "@chakra-ui/core";
>>>>>>> theirs
import NavBar from "../components/NavBar";
import WatchList from './../components/WatchList';
import Footer from './../components/Footer';
import { Context } from "../Context";


const WatchListpage = () => {

<<<<<<< ours
//color mode
const {colorMode} = useColorMode();

  return (
    <Box
      bg={colorMode === 'light' ? "white" : 'primaryBackground'} 
      h="100vh"
      w="100vw"
      style={{
        overflow: "scroll",
      }}
=======
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
    <Box bg="primaryBackground"
          position="relative"
          minHeight="100vh"
>>>>>>> theirs
    >
          
      &nbsp;
      <Box>
        <h1 className="page-heading watch-list">Movies to watch</h1>
      </Box>
      <Box className="movie-grid">
        <WatchList />
      </Box>
      <NavBar />
      <Footer />
    </Box>
  
  );    
    
}

export default WatchListpage;