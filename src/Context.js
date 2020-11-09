import React, { useState, useEffect } from "react";
import axios from "axios";

const Context = React.createContext();

function ContextProvider(props) {
  const ImageUrl = "https://image.tmdb.org/t/p/w400";

  const [isSearch, setIsSearch] = useState(false); // state that holds wheither a user has submitted a search or not
  const [defaultMovies, setDefaultMovies] = useState(true); // state checks wheither favorite movies are displaying or not
  const [search, setSearch] = useState(""); // save search input
  const [searchResults, setSearchResults] = useState([]); // saves search results
  const [homePageResults, setHomePageResults] = useState([]); // saves popular movies or filtered results

  const APIKEY = "6ee25636d25df9899ed46e80a13383ff";

  return (
    <Context.Provider
      value={{
        setSearch,
        setSearchResults,
        search,
        searchResults,
        homePageResults,
        setHomePageResults,
        ImageUrl,
        isSearch,
        setIsSearch,
        APIKEY,
        setDefaultMovies,
        defaultMovies
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
