import React, { useState, useEffect } from "react";
import Localbase from "localbase";
const Context = React.createContext();

function ContextProvider(props) {
  const ImageUrl = "https://image.tmdb.org/t/p/w400";

  const [isSearch, setIsSearch] = useState(false); // state that holds wheither a user has submitted a search or not
  const [defaultMovies, setDefaultMovies] = useState(true); // state checks wheither favorite movies are displaying or not
  const [search, setSearch] = useState(""); // save search input
  const [searchResults, setSearchResults] = useState([]); // saves search results
  const [navShadow, setNavShadow] = useState(false);
  const [homePageResults, setHomePageResults] = useState([]); // saves popular movies or filtered results
  const [added, setAdded] = useState(0);

  const APIKEY = "6ee25636d25df9899ed46e80a13383ff";

  //Create a LOCAL DATABASE forfavorite movies using localbase imported.
  let db = new Localbase("db");
  const [allFavMovies, setAllFavMovies] = useState([]);

  //Create a LOCAL DATABASE for Watchlist movies using localbase imported.
  let db2 = new Localbase("db2");
 const [allWatchListMovies, setallWatchListMovies] = useState([]);
 

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
        db,
        allFavMovies,
        setAllFavMovies,
        db2,
        allWatchListMovies,
        setallWatchListMovies,
        setDefaultMovies,
        navShadow,
        setNavShadow,
        defaultMovies,
        added,
        setAdded
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
