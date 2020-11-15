import React, { useContext, useState, useEffect } from "react";
import { Box, Image, Grid as ChakraGrid, Heading } from "@chakra-ui/core";
import Grid from "../components/Grid";
import NavBar from "../components/NavBar";
import Footer from "./../components/Footer";
import axios from "axios";
import { Context } from "../Context";
import { useParams } from "react-router-dom";


function SearchByActor() {
  const { APIKEY, ImageUrl, setNavShadow, navShadow } = useContext(Context);

  const { personId } = useParams();

  const [personDetails, setPersonDetails] = useState(null);
  const [searchResults, setSearchResults] = useState([]);

  const myRef = React.createRef(); //need so that we can access scrolling position of div on scroll event

  function onScroll() {
    const scrollTop = myRef.current.scrollTop;
    if (!navShadow && scrollTop > 0) setNavShadow(true);
    else if (navShadow && scrollTop === 0) setNavShadow(false);
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

      {personDetails !== null && (
        <>
          <Heading
            as="h3"
            size="lg"
            marginTop="100px"
            marginLeft="5%"
            color="primaryText"
          >
            {personDetails.name}
          </Heading>
          <ChakraGrid
            mx="125px"
            my="50px"
            borderWidth="1px"
            borderColor="primaryBorder"
            rounded="lg"
            templateColumns="auto auto"
          >
            <Image
              m="10px"
              src={ImageUrl + personDetails.profile_path}
              h="220px"
              objectFit="cover"
              rounded="lg"
            />
            <Box m="10px" color="primaryText" fontSize="0.9em">
              Actor Biography: {personDetails.biography}
            </Box>
          </ChakraGrid>

          {searchResults.length > 0 && <Grid searchResults={searchResults} />}
        </>
      )}
    <Footer />
    </Box>
  );
}

export default SearchByActor;
