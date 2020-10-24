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
  //useDisclosure,
} from "@chakra-ui/core";
import axios from "axios";

function MovieDetails(props) {
  const { APIKEY } = useContext(Context);
  const { isOpen, onClose, id } = props;
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    if (id !== null) {
      try {
        axios
          .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKEY}`)
          .then((res) => {
            setMovieDetails(res.data);
          });
      } catch (err) {
        console.log(err);
      }
    }
  }, [id, APIKEY]);

  return (
    <>
      <Modal preserveScrollBarGap isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        {movieDetails !== null && (
          <ModalContent>
            <ModalHeader>{movieDetails.title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>{movieDetails.overview}</ModalBody>

            <ModalFooter>
              <Button variantColor="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant="ghost">Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        )}
      </Modal>
    </>
  );
}

export default MovieDetails;
