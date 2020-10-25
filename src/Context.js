import React, { useState, useEffect } from "react";
import axios from "axios";

const Context = React.createContext();

function ContextProvider(props) {
  const ImageUrl = "https://image.tmdb.org/t/p/w400";
  const [isSearch, setIsSearch] = useState(false);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const APIKEY = "6ee25636d25df9899ed46e80a13383ff";

  useEffect(() => {
    try {
      axios
        .get(
          `https://api.themoviedb.org/3/trending/movie/week?api_key=${APIKEY}`
        )
        .then(res => {
          setSearchResults(res.data.results);
        });
    } catch (err) {
      console.log(err);
    }
  }, []);

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
        APIKEY
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
