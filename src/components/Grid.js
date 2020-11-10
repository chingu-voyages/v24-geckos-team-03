import React, { useContext, useState } from "react";
import { Context } from "../Context";
import Movieboxes from "./Movieboxes";
import { useDisclosure } from "@chakra-ui/core";
import MovieDetails from "./MovieDetails";

function Grid(props) {
  const {searchResults} = props;

  const { ImageUrl } = useContext(Context);

  const [movieId, setMovieId] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const gridStyles = {
    maxWidth: "1200px",
    margin: "0 auto",
    marginTop: "15px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly"
  };

  const movieBoxes = searchResults.map(function(movie) {
    return (
      <Movieboxes
        key={movie.id}
        title={movie.original_title}
        imageSrc={ImageUrl + movie.poster_path}
        year={new Date(movie.release_date).getFullYear()}
        rating={movie.vote_average}
        onClick={() => onHandleMovieClick(movie.id)}
      />
    );
  });

  function onHandleMovieClick(id) {
    setMovieId(id);
    onOpen();
    console.log(id);
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
