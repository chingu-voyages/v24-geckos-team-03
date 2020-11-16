import React, { useEffect, useContext, useState } from "react";
import { Context } from "../Context";
import { Link } from "react-router-dom";
import NotFound from "../img/not-found.jpg";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Stack,
  Box,
  Grid,
  Image,
  Text,
  useColorMode
} from "@chakra-ui/core";

import axios from "axios";
function MovieDetails(props) {
//color mode 
const {colorMode} = useColorMode();

  const { APIKEY, ImageUrl, db, db2 } = useContext(Context);
  const { isOpen, onClose, id } = props;
  const [movieDetails, setMovieDetails] = useState(null);
  const [movieCredits, setMovieCredits] = useState(null);

  const { allFavMovies, setAllFavMovies } = useContext(Context);
  const { allWatchListMovies, setallWatchListMovies } = useContext(Context);

  //create a handler for "add to favorites" button on the Modal.
  const handleAddToFavorites = () => {
    //Check for duplicate entries on the database before adding a movie.
    for (let i = 0; i < allFavMovies.length; i++) {
      if (allFavMovies[i].id === movieDetails.id) {
        console.log("movie exists");
        return null;
      }
    }

    //add image and title of movies clicked to the DB
    db.collection("favoriteMovies")
      .add({
        id: movieDetails.id,
        movieImage:
          movieDetails.poster_path === null
            ? null
            : ImageUrl + movieDetails.poster_path,
        movieTitle: movieDetails.title,
        movieReleaseDate: movieDetails.release_date,
        movieRating: movieDetails.vote_average,
      })
      .then(() => {
        db.collection("favoriteMovies")
          .get()
          .then((movies) => {
            setAllFavMovies(movies);
          });
      });
  };
  //create a handler for RemoveFromFavorites button on the Modal
  const handleRemoveFromFavorites = () => {
    db.collection("favoriteMovies")
      .doc({ id: id })
      .delete()
      //update favorite list
      .then(() => {
        db.collection("favoriteMovies")
          .get()
          .then((movies) => {
            setAllFavMovies(movies);
          });
      });
  };

  //create a handler for "add to watch list" button on the Modal.
  const handleAddToWatchList = () => {
    //Check for duplicate entries on the database before adding a movie.
    for (let i = 0; i < allWatchListMovies.length; i++) {
      if (allWatchListMovies[i].id === movieDetails.id) {
        console.log("movie exists");
        return null;
      }
    }

    //add image and title of movies clicked to the DB
    db2
      .collection("watchListMovies")
      .add({
        id: movieDetails.id,
        movieImage:
          movieDetails.poster_path === null
            ? null
            : ImageUrl + movieDetails.poster_path,
        movieTitle: movieDetails.title,
        movieReleaseDate: movieDetails.release_date,
        movieRating: movieDetails.vote_average,
      })
      .then(() => {
        db2
          .collection("watchListMovies")
          .get()
          .then((movies) => {
            setallWatchListMovies(movies);
          });
      });
  };

  //Create a handler to remove movies from watchlist
  const handleRemoveFromWatchList = () => {
    db2
      .collection("watchListMovies")
      .doc({ id: id })
      .delete()
      //update watchlist
      .then(() => {
        db2
          .collection("watchListMovies")
          .get()
          .then((movies) => {
            setallWatchListMovies(movies);
          });
      });
  };

  const [isFave, setisFave] = useState(false);
  const [iswatchListed, setisWatchListed] = useState(false);
  //check if a movie is favorited;
  useEffect(() => {
    setisFave(false);
    allFavMovies.forEach((movie) => {
      if (movie.id === id) {
        setisFave(true);
      }
    });
  }, [allFavMovies, id]);
  //check is a movie is watchlisted
  useEffect(() => {
    setisWatchListed(false);
    allWatchListMovies.forEach((movie) => {
      if (movie.id === id) {
        setisWatchListed(true);
      }
    });
  }, [allWatchListMovies, id]);
  useEffect(() => {
    if (id !== null) {
      setMovieDetails(null); // prevents details from previous modal from showing up
      setMovieCredits(null);
      try {
        axios
          .get(
            // retrieve credits object based on movie id
            `https://api.themoviedb.org/3/movie/${id}?api_key=${APIKEY}`
          )
          .then((res) => {
            setMovieDetails(res.data);
          });
      } catch (err) {
        console.log(err);
      }

      try {
        axios
          .get(
            // retrieve credits object based on movie id
            `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${APIKEY}`
          )
          .then((res) => {
            setMovieCredits(res.data.cast);
          });
      } catch (err) {
        console.log(err);
      }
    } else {
      setMovieDetails(null);
      setMovieCredits(null);
    }
  }, [id, APIKEY]);

  // Create our number formatter for USD currency
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  let castList = [];

  if (movieCredits !== null) {
    const numberOfActorsDisplayed = 10;
    // the code beloe takes the first X objects in the movie credit array
    // for each of these, a Box is generated with a headshot, actor name, and character
    castList = movieCredits
      .slice(0, numberOfActorsDisplayed)
      .map((castMember, index) => {
        const {
          cast_id,
          character,
          name,
          profile_path,
          id: person_id,
        } = castMember;

        return (
          <Box key={cast_id}>
            <Grid
              p="3px"
              borderWidth="1px"
              borderColor="primaryBorder"
              rounded="lg"
              templateColumns="30% 70%"
              columnGap="3px"
            >
              <Link to={`/actor/${person_id}`}>
                {profile_path === null ? (
                  <Image
                    cursor="pointer"
                    rounded="lg"
                    src={NotFound}
                    h="80px"
                    objectFit="cover"
                  />
                ) : (
                  <Image
                    cursor="pointer"
                    rounded="lg"
                    src={ImageUrl + profile_path}
                    h="80px"
                    objectFit="cover"
                  />
                )}
              </Link>
              <Box p="7px">
                {name} <br />{" "}
                <Text fontSize="0.9em" fontStyle="italic">
                  {character}
                </Text>
              </Box>
            </Grid>
          </Box>
        );
      });
  }

  return (
    <>
      <Modal preserveScrollBarGap isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        {movieDetails !== null &&
          movieCredits !== null && ( // boolean && will only execute what comes next if true
            <ModalContent bg={colorMode === 'light' ? "white" : 'primaryBackground'}  color={colorMode === 'light' ? "#333" : 'primaryText'} >
              <ModalHeader>{movieDetails.title}</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Stack>
                  <Box>Summary</Box>
                  <Box
                    p="10px"
                    borderWidth="1px"
                    borderColor="primaryBorder"
                    rounded="lg"
                    fontSize="0.9em"
                  >
                    {movieDetails.overview}
                  </Box>
                  <Box mt="15px">Details</Box>
                  <Grid
                    p="10px"
                    borderWidth="1px"
                    borderColor="primaryBorder"
                    rounded="lg"
                    templateColumns="50% 50%"
                    columnGap="10px"
                    fontSize="0.8em"
                  >
                    <Box>
                      Runtime:{" "}
                      {movieDetails.runtime === 0
                        ? "?"
                        : `${movieDetails.runtime} minutes`}
                    </Box>
                    <Box>Rating: {movieDetails.vote_average}</Box>
                    <Box>Status: {movieDetails.status}</Box>
                    <Box>
                      Release Date:{" "}
                      {new Date(movieDetails.release_date).toLocaleDateString()}
                    </Box>
                    {movieDetails.budget !== 0 && (
                      <Box>Budget: {formatter.format(movieDetails.budget)}</Box>
                    )}
                    {movieDetails.revenue !== 0 && (
                      <Box>
                        Revenue: {formatter.format(movieDetails.revenue)}
                      </Box>
                    )}
                  </Grid>
                  <Box mt="15px">Cast</Box>

                  {movieCredits !== null && (
                    <Grid
                      templateColumns="50% 50%"
                      columnGap="10px"
                      rowGap="10px"
                      fontSize="0.7em"
                    >
                      {castList}
                    </Grid>
                  )}

                  <Box
                    p="10px"
                    textAlign="center"
                    color="logoText"
                    fontStyle="italic"
                    fontSize="1.1em"
                  >
                    {movieDetails.tagline}
                  </Box>
                </Stack>
              </ModalBody>

              <ModalFooter>
                {isFave ? (
                  <Button
                    variant="outline"
                    //width="350px"
                    borderWidth="2px"
                    backgroundColor="#db291d"
                    color="white"
                    _hover
                    mr={3}
                    onClick={handleRemoveFromFavorites}
                  >
                    -Favorites
                  </Button>
                ) : (
                  <Button
                    onClick={handleAddToFavorites}
                    borderColor="logoText"
                    borderWidth="3px"
                    backgroundColor={colorMode === 'light' ? "white" : 'primaryBackground'} 
                    color="logoText"
                    _hover
                    mr={3}
                  >
                    +Favorites
                  </Button>
                )}

                {iswatchListed ? (
                  <Button
                    variant="outline"
                    borderWidth="2px"
                    backgroundColor="#db291d"
                    color="white"
                    _hover
                    mr={3}
                    //ml={6}
                    onClick={handleRemoveFromWatchList}
                  >
                    -WatchList
                  </Button>
                ) : (
                  <Button
                    onClick={handleAddToWatchList}
                    borderColor="logoText"
                    borderWidth="3px"
                    backgroundColor={colorMode === 'light' ? "white" : 'primaryBackground'} 
                    color="logoText"
                    _hover
                    mr={3}
                    //ml={6}
                  >
                    +WatchList
                  </Button>
                )}
              </ModalFooter>

              <ModalFooter>
                <Link to={`/moviedetailspage/${id}`}>
                  {" "}
                  <Button
                    borderColor="logoText"
                    borderWidth="3px"
                    backgroundColor={colorMode === 'light' ? "white" : 'primaryBackground'} 
                    color="logoText"
                    _hover
                    mr={3}
                    onClick={onClose}
                  >
                    More Details
                  </Button>
                </Link>
                <Button
                  borderColor="logoText"
                  borderWidth="3px"
                  backgroundColor={colorMode === 'light' ? "white" : 'primaryBackground'} 
                  color="logoText"
                  _hover
                  mr={1}
                  onClick={onClose}
                >
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          )}
      </Modal>
    </>
  );
}
export default MovieDetails;
