import React, { useContext, useState, useEffect } from "react";
import { Box } from "@chakra-ui/core";
import Grid from "../components/Grid";
import NavBar from "../components/NavBar";
import FilterSidebar from "../components/FilterSidebar";
import axios from "axios";
import { Context } from "../Context";
import { useParams } from "react-router-dom";

function SearchByActor() {
  const { APIKEY, setSearchResults} = useContext(Context);

  const { personId } = useParams();
  //const personId = 1813;

  const [personName, setPersonName] = useState("");

  useEffect(() => {
    if (personId !== null) {
      try {
        axios
          .get(
            // retrieve actor's name based on personId
            `https://api.themoviedb.org/3/person/${personId}?api_key=${APIKEY}`
          )
          .then((res) => {
            setPersonName(res.data.name);
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
      <h1 style={headerStyles}>
        {`Movies starring ${personName}`}
      </h1>
      <NavBar />
      <FilterSidebar />
      <Grid />
    </Box>
  );
}

export default SearchByActor;
