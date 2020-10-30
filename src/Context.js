import React, { useState, useEffect } from "react";
import axios from "axios";

const Context = React.createContext();

function ContextProvider(props) {
  const ImageUrl = "https://image.tmdb.org/t/p/w400";

  const [isSearch, setIsSearch] = useState(false);
  const [defaultMovies, setDefaultMovies] = useState(true); // state checks wheither favorite movies are displaying or not
  const [search, setSearch] = useState(""); // save search input
  const [searchResults, setSearchResults] = useState([]); // saves search results
  const APIKEY = "6ee25636d25df9899ed46e80a13383ff";

  useEffect(() => {
    if (defaultMovies === true) {
      try {
        axios
          .get(
            `https://api.themoviedb.org/3/trending/movie/week?api_key=${APIKEY}` // get request for favorite movies
          )
          .then(res => {
            setSearchResults(res.data.results);
            setDefaultMovies(true);
          });
      } catch (err) {
        console.log(err);
      }
    }
  }, [defaultMovies, setDefaultMovies]);

  return (
    <Context.Provider
      value={{
        setSearch,
        setSearchResults,
        search,
        searchResults,
        ImageUrl,
        isSearch,
        setIsSearch,
        APIKEY,
        setDefaultMovies
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
