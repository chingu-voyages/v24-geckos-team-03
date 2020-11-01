import React, { useEffect, useContext, useState } from "react";
import axios from "axios";
import { Context } from "../Context";
import { Box, Heading } from "@chakra-ui/core";

function MovieDetailsBody(props) {
  const { APIKEY } = useContext(Context);
  const [movieData, setMoviedata] = useState([]);
  const [moviecast, setMovieCast] = useState([]);

  const { movieId } = props;

  useEffect(() => {
    try {
      axios
        .get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${APIKEY}`)
        .then(res => {
          setMoviedata(res.data);
        });
    } catch (err) {
      console.log(err);
    }

    try {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${APIKEY}`
        )
        .then(res => {
          setMovieCast(res.data.cast);
        });
    } catch (err) {
      console.log(err);
    }
  }, []);
  console.log(movieData);

  const detailBody = {
    backgroundColor: "#333333",
    height: "100vh",
    width: "100vw"
  };
  return (
    <div style={detailBody}>
      <Box p="100px">
        <Heading color="white">{movieData.original_title}</Heading>
      </Box>
    </div>
  );
}

export default MovieDetailsBody;
