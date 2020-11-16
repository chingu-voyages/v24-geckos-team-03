import React, { useContext, useState, useEffect } from "react";
import { Box, Image, Grid as ChakraGrid, Heading , useColorMode} from "@chakra-ui/core";
import Grid from "../components/Grid";
import NavBar from "../components/NavBar";
import Footer from "./../components/Footer";
import axios from "axios";
import { Context } from "../Context";
import { useParams } from "react-router-dom";

function SearchByActor() {
//color mode
const {colorMode} = useColorMode();

  const { APIKEY, ImageUrl, setNavShadow, navShadow } = useContext(Context);

  const { personId } = useParams();

  const [personDetails, setPersonDetails] = useState(null);
  const [searchResults, setSearchResults] = useState([]);

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
    if (personId !== null) {
      try {
        axios
          .get(
            // retrieve actor's name based on personId
            `https://api.themoviedb.org/3/person/${personId}?api_key=${APIKEY}`
          )
          .then((res) => {
            setPersonDetails(res.data);
          });

        axios
          .get(
            `https://api.themoviedb.org/3/person/${personId}/movie_credits?api_key=${APIKEY}`
            // note: although this api is different from trending movies, it contains the id, title, poster fields we use
          )
          .then((res) => {
            setSearchResults(res.data.cast);
          });
      } catch (err) {
        console.log(err);
      }
    }
  }, [APIKEY, personId, setSearchResults]);

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
    >
      <NavBar />

=======
    <Box bg="primaryBackground" position="relative" minHeight="100vh">
      &nbsp;
>>>>>>> theirs
      {personDetails !== null && (
        <>
          <Heading
            as="h3"
            size="lg"
            marginTop="100px"
            marginLeft="5%"
            color={colorMode === 'light' ? "#333" : 'primaryText'} 
          >
            {personDetails.name}
          </Heading>
          <ChakraGrid
            className="actorBio"
            mx={{ base: "0px", sm: "10px", md: "125px" }}
            marginTop={{ base: "10px", md: "50px" }}
            marginBottom="50px"
            borderWidth="1px"
            borderColor="primaryBorder"
            rounded="lg"
            templateColumns="auto auto"
          >
            <Image
              m="10px"
              src={ImageUrl + personDetails.profile_path}
              h={{ base: "150px", sm: "220px" }}
              objectFit="cover"
              rounded="lg"
            />
            <Box m="10px" color={colorMode === 'light' ? "#333" : 'primaryText'}  fontSize="0.9em">
              Actor Biography: {personDetails.biography}
            </Box>
          </ChakraGrid>

          {searchResults.length > 0 && <Grid searchResults={searchResults} />}
        </>
      )}
      <NavBar />
      <Footer />
    </Box>
  );
}

export default SearchByActor;
