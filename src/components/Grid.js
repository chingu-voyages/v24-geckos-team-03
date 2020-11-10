import React, { useContext, useState } from "react";
import { Context } from "../Context";
import Movieboxes from "./Movieboxes";
import { useDisclosure } from "@chakra-ui/core";
import MovieDetails from "./MovieDetails";

function Grid(props) {
<<<<<<< HEAD
  const {searchResults} = props;
  const { ImageUrl , FavoriteMovies} = useContext(Context);
=======
  const { searchResults } = props;

  const { ImageUrl } = useContext(Context);

>>>>>>> 4cad04af6a60b09f689517a45cc51f79cce15df8
  const [movieId, setMovieId] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const gridStyles = {
    maxWidth: "1200px",
    margin: "0 auto",
    marginTop: "5%",
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
