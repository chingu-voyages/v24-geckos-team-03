import React, { useContext, useEffect } from "react";
import { Box} from "@chakra-ui/core";
import NavBar from "../components/NavBar";
import WatchList from './../components/WatchList';
import Footer from './../components/Footer';
import { Context } from "../Context";


const WatchListpage = () => {

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
    >
          
      &nbsp;
      <Box>
        <h1 className="page-heading watch-list">Movies for later</h1>
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