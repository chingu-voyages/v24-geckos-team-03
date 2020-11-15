import React, { useContext, useEffect, useState } from "react";
import { Context } from "../Context";
import Movieboxes from "../components/Movieboxes";
import MovieDetails from "./MovieDetails";
import { useDisclosure } from "@chakra-ui/core";

const WatchList = () => {
  const [movieId, setMovieId] = useState(null);

  const { isOpen, onOpen, onClose } = useDisclosure();
  function onHandleMovieClick(id) {
    setMovieId(id);
    onOpen();
  }

  const { db2, allWatchListMovies, setallWatchListMovies } = useContext(
    Context
  );

  //Get data from the DB and store all favotired movies to an array
  useEffect(() => {
    db2
      .collection("watchListMovies")
      .get()
      .then(movies => {
        setallWatchListMovies(movies);
      });
  }, []);

  //styles for the grid
  const gridStyles = {
    maxWidth: "1200px",
    marginTop: "10%",
    margin: "0 auto",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly"
  };

  return (
    <>
      <div className="container" style={gridStyles}>
        {allWatchListMovies.map(movie => {
          return (
            <Movieboxes
              key={movie.id}
              title={movie.movieTitle}
              imageSrc={movie.movieImage}
              year={
                movie.movieReleaseDate !== undefined
                  ? new Date(movie.movieReleaseDate).getFullYear()
                  : null
              }
              rating={
                movie.movieRating !== undefined ? movie.movieRating : null
              }
              onClick={() => onHandleMovieClick(movie.id)}
            />
          );
        })}
      </div>
      <MovieDetails isOpen={isOpen} onClose={onClose} id={movieId} />
    </>
  );
};

export default WatchList;
