import React, { useContext, useEffect, useState } from "react";
import { Context } from "../Context";
import Movieboxes from "../components/Movieboxes";
import MovieDetails from "./MovieDetails";
import { useDisclosure } from "@chakra-ui/core";
import { Link, useHistory } from "react-router-dom";

import Footer from "./Footer";

const FavoriteMovies = () => {
  const [movieId, setMovieId] = useState(null);
  const history = useHistory();

  const { isOpen, onOpen, onClose } = useDisclosure();
  function onHandleMovieClick(id) {
    setMovieId(id);
    onOpen();
  }

  const goBack = () => {
    history.goBack();
  };

  const { db, allFavMovies, setAllFavMovies } = useContext(Context);

  //Get data from the DB and store all favotired movies to an array
  useEffect(() => {
    db.collection("favoriteMovies")
      .get()
      .then(movies => {
        setAllFavMovies(movies);
        console.log(db);
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

  const responsiveArrow = {
    color: "white",

    position: "absolute",
    top: "170px",
    left: "70px",
    cursor: "pointer"
  };
  return (
    <>
      <div className="container" style={gridStyles}>
        {allFavMovies.map(movie => {
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

export default FavoriteMovies;
