import React from "react";
import NavBar from "../components/NavBar";
import MovieDetailsBody from "../components/MovieDetailsBody";

import { useParams } from "react-router-dom";
import { Box } from "@chakra-ui/core";

function MovieDetailsPage() {
  const { movieId } = useParams();

  return (
    <div>
      <MovieDetailsBody movieId={movieId} />
    </div>
  );
}

export default MovieDetailsPage;
