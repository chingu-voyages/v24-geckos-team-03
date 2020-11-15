import React, { useContext, useState, useEffect } from "react";
import { Context } from "../Context";
import Movieboxes from "./Movieboxes";
import { useDisclosure } from "@chakra-ui/core";
import MovieDetails from "./MovieDetails";

function Grid(props) {
  const { searchResults } = props;

  const {
    ImageUrl,
    allFavMovies,
    setAllFavMovies,
    allWatchListMovies,
    setallWatchListMovies,
    db,
    db2,
  } = useContext(Context);

  // State variables for moviedetails modal popup
  const [movieId, setMovieId] = useState(null);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [favoriteMovieIds, setFavoriteMovieIds] = useState([]);
  const [watchListMovieIds, setWatchListMovieIds] = useState([]);

  //Get data from the DB and store all movie ids to an array
  useEffect(() => {
    db.collection("favoriteMovies")
      .get()
      .then((movies) => {
        setAllFavMovies(movies);
      });
    console.log("getFavMovies UseEffect");

    db2
      .collection("watchListMovies")
      .get()
      .then((movies) => {
        setallWatchListMovies(movies);
      });
    console.log("getWLMovies UseEffect");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //Get data from the favorites DB and store all movie ids to an array
  useEffect(() => {
    if (allFavMovies.length > 0) {
      const movieIdArray = [];
      allFavMovies.forEach((movie) => {
        movieIdArray.push(movie.id);
      });
      setFavoriteMovieIds(movieIdArray);
    }
  }, [allFavMovies]);

  //Get data from the watchlist DB and store all movie ids to an array
  useEffect(() => {
    if (allWatchListMovies.length > 0) {
      const movieIdArray = [];
      allWatchListMovies.forEach((movie) => {
        movieIdArray.push(movie.id);
      });
      setWatchListMovieIds(movieIdArray);
    }
  }, [allWatchListMovies]);

  const gridStyles = {
    maxWidth: "1200px",
    margin: "0 auto",
    marginTop: "15px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  };

  const movieBoxes = searchResults.map(function (movie) {
    return (
      <Movieboxes
        key={movie.id}
        title={movie.original_title}
        imageSrc={ImageUrl + movie.poster_path}
        year={new Date(movie.release_date).getFullYear()}
        rating={movie.vote_average}
        isFavorite={favoriteMovieIds.includes(movie.id)}
        isWantToWatch={watchListMovieIds.includes(movie.id)}
        onClick={() => onHandleMovieClick(movie.id)}
      />
    );
  });

  function onHandleMovieClick(id) {
    setMovieId(id);

    onOpen();
  }

  return (
    <>
      <div className="container" style={gridStyles}>
        {searchResults.length > 0 ? movieBoxes : null}
      </div>
      <MovieDetails isOpen={isOpen} onClose={onClose} id={movieId} />
    </>
  );
}

export default Grid;
