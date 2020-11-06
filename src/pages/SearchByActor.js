import React, { useContext, useState, useEffect } from "react";
import { Box, Image, Grid as ChakraGrid } from "@chakra-ui/core";
import Grid from "../components/Grid";
import NavBar from "../components/NavBar";
//import FilterSidebar from "../components/FilterSidebar";
import axios from "axios";
import { Context } from "../Context";
import { useParams } from "react-router-dom";

function SearchByActor() {
  const { APIKEY, ImageUrl } = useContext(Context);

  const { personId } = useParams();

  const [personDetails, setPersonDetails] = useState(null);
  const [searchResults, setSearchResults] = useState([]);

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

  const headerStyles = {
    position: "absolute",
    top: "100px",
    color: "white",
    left: "150px",
    fontSize: "25px",
    fontWeight: "100",
  };

  return (
    <Box
      bg="primaryBackground"
      h="100vh"
      w="100vw"
      style={{
        overflow: "scroll",
      }}
    >
      <NavBar />

      {personDetails !== null && (
        <>
          <h1
            style={headerStyles}
          >{`${personDetails.name}`}</h1>
          <br />
          <br />
          <br />
          <br />
          <ChakraGrid
            m="100px"
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
            <Box
              m="10px"
              color="primaryText"
              fontSize="0.8em"
              >{personDetails.biography}</Box>
          </ChakraGrid>

          {searchResults.length > 0 && <Grid searchResults={searchResults} />}
        </>
      )}
    </Box>
  );
}

export default SearchByActor;
