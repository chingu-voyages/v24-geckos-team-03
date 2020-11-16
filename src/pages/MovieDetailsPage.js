import React from "react";

import MovieDetailsBody from "../components/MovieDetails/MovieDetailsBody";

import { useParams } from "react-router-dom";

function MovieDetailsPage() {
  const { movieId } = useParams();

  return (
    <div>
      <MovieDetailsBody movieId={movieId} />
    </div>
  );
}

export default MovieDetailsPage;
