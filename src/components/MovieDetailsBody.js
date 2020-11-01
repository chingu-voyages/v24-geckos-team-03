import React, { useEffect, useContext, useState } from "react";
import axios from "axios";
import { Context } from "../Context";
import { Box, Heading, Image, Text, Flex } from "@chakra-ui/core";
import { Link } from "react-router-dom";
import { position } from "styled-system";

function MovieDetailsBody(props) {
  const { APIKEY, ImageUrl, setPersonId, setDefaultMovies } = useContext(
    Context
  );

  const [movieData, setMovieData] = useState([]);
  const [movieCast, setMovieCast] = useState([]);

  function searchByActor(person_id) {
    setPersonId(person_id);
  }
  let castList = []; // Holds all the movie cast headshots/name/
  if (movieCast !== null) {
    const numberOfActorsDisplayed = 10;
    // the code beloe takes the first X objects in the movie credit array
    // for each of these, a Box is generated with a headshot, actor name, and character
    castList = movieCast
      .slice(0, numberOfActorsDisplayed)
      .map((castMember, index) => {
        const {
          cast_id,
          character,
          name,
          profile_path,
          id: person_id
        } = castMember;

        return (
          <Box key={cast_id} textAlign="center">
            <Image
              m="0 auto"
              // onClick={() => searchByActor(person_id)} Will implement in next week MVP
              cursor="pointer"
              rounded="lg"
              src={ImageUrl + profile_path}
              h="80px"
              objectFit="cover"
            />
            <Box p="7px">
              {name} <br />{" "}
              <Text fontSize="0.9em" fontStyle="italic">
                {character}
              </Text>
            </Box>
          </Box>
        );
      });
  }

  // Id is passed from MovieDetails component
  const { movieId } = props;

  useEffect(() => {
    try {
      axios
        .get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${APIKEY}`)
        .then(res => {
          // stores movie data using movie ID
          setMovieData(res.data);
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
          // stores cast data using movie ID
          setMovieCast(res.data.cast);
        });
    } catch (err) {
      console.log(err);
    }
  }, []);
  console.log(movieData);
  console.log(movieCast);

  const detailBody = {
    backgroundColor: "#333333",
    height: "100vh",
    width: "100vw"
  };

  const imageContainer = {
    height: "100vh",
    width: "100vw",
    backgroundImage: `url(https://image.tmdb.org/t/p/original${movieData.backdrop_path})`,
    backgroundSize: "cover",
    position: "relative"
  };

  const container = {
    maxWidth: "80%",
    margin: "0 auto",
    color: "white"
  };
  return (
    <>
      <div style={imageContainer}>
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)"
          }}
        >
          <div style={container}>
            <Heading color="white">{movieData.original_title}</Heading>
            <Link to="/">
              <span style={{ color: "white", fontSize: "80px" }}>&#8592;</span>
            </Link>
          </div>
        </div>
      </div>
      <div style={detailBody}>
        <div style={container}>
          <Box>
            <Heading>Summary</Heading>
            <p>{movieData.overview}</p>
          </Box>

          <Box>
            <Heading>Cast</Heading>
            <Flex>{castList}</Flex>
          </Box>

          <Box>
            <Heading>Trailer</Heading>
          </Box>
        </div>
      </div>
    </>
  );
}

export default MovieDetailsBody;
