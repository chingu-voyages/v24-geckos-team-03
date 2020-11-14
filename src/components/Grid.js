import React, { useContext, useState, useEffect } from "react";
import { Context } from "../Context";
import Movieboxes from "./Movieboxes";
import { useDisclosure } from "@chakra-ui/core";
import MovieDetails from "./MovieDetails";

function Grid(props) {
  const { searchResults } = props;

  const { ImageUrl, allFavMovies, setAllFavMovies, db } = useContext(Context);

  // State variables for moviedetails modal popup
  const [movieId, setMovieId] = useState(null);
  const [movieImage, setMovieImage] = useState("");
  const [movieTitle, setMovieTitle] = useState("");

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [favoriteMovieIds, setFavoriteMovieIds] = useState([]);

  //Get data from the DB and store all movie ids to an array
  useEffect(() => {
    db.collection("favoriteMovies")
      .get()
      .then((movies) => {
        setAllFavMovies(movies);
      });
    console.log("getFavMovies UseEffect");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //Get data from the DB and store all movie ids to an array
  useEffect(() => {
    if (allFavMovies.length > 0) {
      const movieIdArray = [];
      allFavMovies.forEach((movie) => {
        movieIdArray.push(movie.id);
      });
      setFavoriteMovieIds(movieIdArray);
    }
  }, [allFavMovies]);

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
        onClick={() =>
          onHandleMovieClick(
            movie.id,
            movie.backdrop_path,
            movie.original_title
          )
        }
      />
    );
  });

  function onHandleMovieClick(id, movieImage, movieName) {
    setMovieId(id);
    setMovieImage(movieImage);
    setMovieTitle(movieName);
    onOpen();
    console.log(id);
    console.log(movieImage);
    console.log(movieName);
  }

  return (
    <>
      <div className="container" style={gridStyles}>
        {searchResults.length > 0 ? movieBoxes : null}
      </div>
      <MovieDetails
        isOpen={isOpen}
        onClose={onClose}
        id={movieId}
        movieImage={movieImage}
        movieTitle={movieTitle}
      />
    </>
  );
}

export default Grid;
