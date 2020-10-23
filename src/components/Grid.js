import React, { useContext } from "react";
import { Context } from "../Context";
import Movieboxes from "./Movieboxes";
import { flexWrap, justifyContent, backgroundColor } from "styled-system";

function Grid() {
  const { searchResults, ImageUrl } = useContext(Context);
  const gridStyles = {
    maxWidth: "1200px",

    margin: "0 auto",
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
      />
    );
  });

  return (
    <div className="container" style={gridStyles}>
      {movieBoxes}
    </div>
  );
}

export default Grid;
