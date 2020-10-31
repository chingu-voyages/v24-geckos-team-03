import React, { useEffect, useContext } from "react";
import axios from "axios";
import { Context } from "../Context";

function MovieDetailsBody(props) {
  const APIKEY = useContext(Context);

  useEffect(() => {
    try {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/740985?api_key=${APIKEY}&language=en-US
`
        )
        .then(res => {});
    } catch (err) {
      console.log(err);
    }
  });
  const detailBody = {
    backgroundColor: "#333333",
    height: "100vh",
    width: "100vw"
  };
  return <div style={detailBody}></div>;
}

export default MovieDetailsBody;
