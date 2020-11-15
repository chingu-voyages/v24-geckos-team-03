import React, { useEffect, useContext, useState } from "react";
import axios from "axios";
import { Context } from "./../../Context";
import { Box, Heading, Image, Text, Flex, Spinner } from "@chakra-ui/core";
import { Link, useHistory } from "react-router-dom";
import "./MovieDetailsBody.css";

function MovieDetailsBody(props) {
  const history = useHistory();
  const { APIKEY, ImageUrl, setDefaultMovies } = useContext(Context);
  const [page, setPage] = useState(1);

  const [movieData, setMovieData] = useState([]);
  const [movieCast, setMovieCast] = useState([]);
  const [movieTrailers, setMovieTrailers] = useState([]);
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  setTimeout(() => {
    setIsPageLoaded(true);
  }, 2500);

  const goBack = () => {
    history.go(-1);
    setDefaultMovies(true);
  };
  const youtubeLink = `https://www.youtube.com/embed/`;
  let castList = []; // Holds all the movie cast headshots/name/

  // movie cast card creator
  if (movieCast !== null) {
    // the code beloe takes the first X objects in the movie credit array
    // for each of these, a Box is generated with a headshot, actor name, and character
    castList = movieCast.map((castMember, index) => {
      const {
        cast_id,
        character,
        name,
        profile_path,
        id: person_id
      } = castMember;

      return (
        <Box
          key={cast_id}
          textAlign="center"
          marginRight="60px"
          marginLeft="60px"
        >
          <Link to={`/actor/${person_id}`}>
            <Image
              m="0 auto"
              cursor="pointer"
              rounded="lg"
              src={ImageUrl + profile_path}
              objectFit="cover"
              width="100px"
              maxWidth="none"
            />
          </Link>
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

  // movie trailer box creator

  let movieTrailersboxes = [];
  if (movieTrailers.length > 0) {
    movieTrailersboxes = movieTrailers.map(trailer => {
      return (
        <Box mr="10px" key={trailer.id}>
          <iframe
            title={trailer.original_title}
            width="420"
            height="345"
            src={`${youtubeLink}${trailer.key}`}
            className="movieTrailerBoxes"
          ></iframe>
        </Box>
      );
    });
  }
  // Carousel settiings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

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
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${APIKEY}&append_to_response=videos`
        )
        .then(res => {
          // stores all movie trailers keys
          setMovieTrailers(res.data.videos.results);
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
  }, [APIKEY, movieId]);

  // styling varibles
  const detailBody = {
    backgroundColor: "#333333",
    height: "100%",
    width: "100%",
    overflowY: "scroll"
  };

  const imageContainer = {
    width: "100vw",
    backgroundImage: `url(https://image.tmdb.org/t/p/original${movieData.backdrop_path})`,
    backgroundSize: "cover",
    backgroundPosition: "top"
  };

  const container = {
    maxWidth: "80%",
    margin: "0 auto",
    color: "white"
  };

  const pageSpinner = {
    position: "fixed",
    top: "50%",
    left: "50%",

    transform: "translate(-50%, -50%)"
  };
  return (
    <>
      <Box>
        {isPageLoaded ? null : (
          <Box className="loadingScreen">
            <Spinner
              style={pageSpinner}
              thickness="3px"
              speed="0.7s"
              emptyColor="gray.200"
              color="black"
              size="100px"
            />
          </Box>
        )}
      </Box>
      <Box
        style={imageContainer}
        height={["200px", "200px", "100vh", "100vh"]}
        position={["relative", "relative", "static", "static"]}
      >
        <Box
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)"
          }}
        >
          <Box style={container}>
            <Heading
              position="absolute"
              top="50%"
              color="white"
              fontSize={["20px", "22px", "30px", "35px"]}
            >
              {movieData.original_title}
            </Heading>

            <span
              className={
                isPageLoaded ? `responsiveArrow` : `responsiveArrow removeClick`
              }
              onClick={goBack}
            >
              &#8592;
            </span>
          </Box>
        </Box>
      </Box>
      <Box style={detailBody}>
        <Box style={container}>
          <Box paddingY="30px">
            <Heading pb="10px">Summary</Heading>
            <p>{movieData.overview}</p>
          </Box>

          <Box paddingY="30px">
            <Heading pb="10px"> Cast</Heading>

            <Flex wrap="nowrap" overflowX="auto" justifyContent="space-between">
              {castList}
            </Flex>
          </Box>

          <Box paddingTop="30px">
            <Heading pb="10px">Trailers</Heading>
            <Flex wrap="nowrap" overflowX="auto" justifyContent="center">
              {movieTrailers.length > 0
                ? movieTrailersboxes
                : "No Trailers Available"}
            </Flex>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default MovieDetailsBody;
