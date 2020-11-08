import React, { useEffect, useContext, useState } from "react";

function DefaultMovies() {
  useEffect(() => {
    if (defaultMovies === true) {
      try {
        axios
          .get(
            `https://api.themoviedb.org/3/trending/movie/week?api_key=${APIKEY}`
          )
          .then(res => {
            setSearchResults(res.data.results);
            setDefaultMovies(true);
          });
      } catch (err) {
        console.log(err);
      }
    }
  }, [defaultMovies]);
}
