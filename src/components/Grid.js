import React, { useContext, useState } from "react";
import { Context } from "../Context";
import Movieboxes from "./Movieboxes";
import { useDisclosure } from "@chakra-ui/core";
import { flexWrap, justifyContent, backgroundColor } from "styled-system";
import MovieDetails from "./MovieDetails";

function Grid() {
  const { searchResults, ImageUrl } = useContext(Context);

  const [movieId, setMovieId] = useState(null);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const gridStyles = {
    maxWidth: "1200px",

    margin: "0 auto",
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
        onClick={()=>onHandleMovieClick(movie.id)}
      />
    );
  });

  function onHandleMovieClick(id){
    setMovieId(id);
    onOpen();
  }

  return (
    <>
      <div className="container" style={gridStyles}>
        {movieBoxes}
      </div>

      <MovieDetails isOpen={isOpen} onClose={onClose} id={movieId} />
    </>
  );
}

export default Grid;
