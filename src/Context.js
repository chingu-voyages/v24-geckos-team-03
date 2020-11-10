import React, { useState, useEffect } from "react";
import Localbase from "localbase";
const Context = React.createContext();

function ContextProvider(props) {
  const ImageUrl = "https://image.tmdb.org/t/p/w400";

  const [isSearch, setIsSearch] = useState(false); // state that holds wheither a user has submitted a search or not
  const [defaultMovies, setDefaultMovies] = useState(true); // state checks wheither favorite movies are displaying or not
  const [searchQuery, setSearchQuery] = useState(""); // save search input
  const [searchResults, setSearchResults] = useState([]); // saves search results
  const [navShadow, setNavShadow] = useState(false);
  const [homePageResults, setHomePageResults] = useState([]); // saves popular movies or filtered results

  const APIKEY = "6ee25636d25df9899ed46e80a13383ff";

  //Create a LOCAL DATABASE using localbase imported.
  let db = new Localbase("db");
  const [allFavMovies, setAllFavMovies] = useState([]);
  //Get data from the DB and store all favotired movies to an array
  useEffect(() => {
    db.collection("favoriteMovies")
      .get()
      .then(movies => {
        setAllFavMovies(movies);
        console.log(db);
      });
  }, []);

  return (
    <Context.Provider
      value={{
        searchQuery,
        setSearchQuery,
        setSearchResults,

        searchResults,
        homePageResults,
        setHomePageResults,
        ImageUrl,
        isSearch,
        setIsSearch,
        APIKEY,
        db,
        allFavMovies,
        setDefaultMovies,
        navShadow,
        setNavShadow,
        defaultMovies
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
