import React, { useState, useEffect } from "react";
import axios from "axios";
import Localbase from 'localbase';

const Context = React.createContext();

function ContextProvider(props) {
  const ImageUrl = "https://image.tmdb.org/t/p/w400";

  const [isSearch, setIsSearch] = useState(false);
  const [defaultMovies, setDefaultMovies] = useState(true); // state checks wheither favorite movies are displaying or not
  const [search, setSearch] = useState(""); // save search input
  const [searchResults, setSearchResults] = useState([]); // saves search results

  const APIKEY = "6ee25636d25df9899ed46e80a13383ff";

//Create a LOCAL DATABASE using localbase imported. 
let db = new Localbase('db');
const [allFavMovies, setAllFavMovies] = useState([]);
  //Get data from the DB and store all favotired movies to an array
    useEffect(() => {
      db.collection('favoriteMovies').get().then(movies =>{
        setAllFavMovies(movies);
        console.log(db);
      });
    },[]);


  // check if the actor query string is populated
  //const params = new URLSearchParams(window.location.search);
  //const person_id = params.get("actor");

  useEffect(() => {
    if (defaultMovies === true) {
      try {
        axios
          .get(
            `https://api.themoviedb.org/3/trending/movie/week?api_key=${APIKEY}`
          )
          .then((res) => {
            setSearchResults(res.data.results);
            setDefaultMovies(true);
          });
      } catch (err) {
        console.log(err);
      }
    }
  }, [defaultMovies]);

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
        allFavMovies,
        setDefaultMovies,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
