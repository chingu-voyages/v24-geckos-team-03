import React, { useState, useEffect } from "react";
import axios from "axios";
import Localbase from 'localbase';

const Context = React.createContext();

function ContextProvider(props) {
  const ImageUrl = "https://image.tmdb.org/t/p/w400";
  // state checks wheither favorite movies are displaying or not
  const [isSearch, setIsSearch] = useState(false);
  const [defaultMovies, setDefaultMovies] = useState(true);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const APIKEY = "6ee25636d25df9899ed46e80a13383ff";

//Create a LOCAL DATABASE using localbase imported. 
  let db = new Localbase('db');
  const [allFavMovies, setAllFavMovies] = useState([]);
//Get data from the DB and store all favotired movies to an array
  useEffect(() => {
    db.collection('favoriteMovies').get().then(movies =>{
      setAllFavMovies(movies);
    });
  }, []);

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
        db,
        allFavMovies
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
