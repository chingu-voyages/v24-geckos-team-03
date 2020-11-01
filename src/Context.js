import React, { useState, useEffect } from "react";
import axios from "axios";

const Context = React.createContext();

function ContextProvider(props) {
  const ImageUrl = "https://image.tmdb.org/t/p/w400";

  const [isSearch, setIsSearch] = useState(false);
  const [defaultMovies, setDefaultMovies] = useState(true); // state checks wheither favorite movies are displaying or not
  const [search, setSearch] = useState(""); // save search input
  const [searchResults, setSearchResults] = useState([]); // saves search results

  const [personId, setPersonId] = useState(null);
  const [personName, setPersonName] = useState("");
  const APIKEY = "6ee25636d25df9899ed46e80a13383ff";

  // check if the actor query string is populated
  //const params = new URLSearchParams(window.location.search);
  //const person_id = params.get("actor");

  useEffect(() => {
    if (defaultMovies === true) {
      let searchByActorFailed = false;

      // if a person_id was passed, then search for the movies that have that actor
      if (personId !== null) {
        try {
          axios
            .get(
              // retrieve actor's name based on personId
              `https://api.themoviedb.org/3/person/${personId}?api_key=${APIKEY}`
            )
            .then(res => {
              setPersonName(res.data.name);
            });

          axios
            .get(
              `https://api.themoviedb.org/3/person/${personId}/movie_credits?api_key=${APIKEY}`
              // note: although this api is different from trending movies, it contains the id, title, poster fields we use
            )
            .then(res => {
              setIsSearch(false); // need to clear this so heading shows up
              setSearchResults(res.data.cast);
              setDefaultMovies(true);
            });
        } catch (err) {
          console.log(err);
          // if search by actor doesn't work, then try to grab the trending movies
          searchByActorFailed = true;
        }
      }
      if (searchByActorFailed || personId === null) {
        setPersonName(""); // clear name if personId is null
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
    }
  }, [defaultMovies, personId]);

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
        setDefaultMovies,
        personName,
        setPersonId
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
