import React, { useEffect, useContext, useState } from "react";
import { Context } from "../Context";
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
} from "@chakra-ui/core";
import axios from "axios";

function MovieDetails(props) {
  const { APIKEY } = useContext(Context);
  const { isOpen, onClose, id } = props;
  const [movieDetails, setMovieDetails] = useState(null);
  const [movieCredits, setMovieCredits] = useState(null);

  useEffect(() => {
    if (id !== null) {
      setMovieDetails(null); // prevents details from previous modal from showing up
      setMovieCredits(null); 
      try {
        axios
          .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKEY}`)
          .then((res) => {
            setMovieDetails(res.data);
          });
      } catch (err) {
        console.log(err);
      }

      try {
        axios
          .get(
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

  // Create our number formatter.
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  let castList = [];

  if (movieCredits !== null) {
    castList = movieCredits.slice(0, 20).map((castMember, index) => {
      const { cast_id, character, name } = castMember;
      return (
        <Box key={cast_id}>{`${
          name.length > 18 ? `${name.substring(0, 18)}...` : name
        } (${
          character.length > 10 ? `${character.substring(0, 10)}...` : character
        })`}</Box>
      );
    });
  }

  return (
    <>
      <Modal preserveScrollBarGap isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        {movieDetails !== null && (
          <ModalContent bg="primaryBackground" color="primaryText">
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
                  <Box>Popularity: {movieDetails.popularity}</Box>
                  <Box>Status: {movieDetails.status}</Box>
                  <Box>
                    Release Date:{" "}
                    {new Date(movieDetails.release_date).toLocaleDateString()}
                  </Box>
                  {movieDetails.budget !== 0 && (
                    <Box>Budget: {formatter.format(movieDetails.budget)}</Box>
                  )}
                  {movieDetails.revenue !== 0 && (
                    <Box>Revenue: {formatter.format(movieDetails.revenue)}</Box>
                  )}
                </Grid>
                <Box mt="15px">Cast</Box>

                {movieCredits !== null && (
                  <Grid
                    p="10px"
                    borderWidth="1px"
                    borderColor="primaryBorder"
                    rounded="lg"
                    templateColumns="50% 50%"
                    columnGap="10px"
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
              <Button
                borderColor="logoText"
                borderWidth="3px"
                backgroundColor="primaryBackground"
                color="logoText"
                _hover
                mr={3}
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
