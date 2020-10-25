import React, { useRef, useEffect, useContext } from "react";
import { Context } from "../Context";
import axios from "axios";

function Search() {
  const {
    setSearch,
    setSearchResults,
    search,
    searchResults,
    setIsSearch,
    APIKEY
  } = useContext(Context);

  const inputEl = useRef(null);

  function searchSubmit(e) {
    e.preventDefault();
    setSearch(inputEl.current.value);
    setIsSearch(true);
  }

  useEffect(() => {
    if (search.length > 0) {
      try {
        axios
          .get(
            `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=${search}`
          )
          .then(res => {
            setSearchResults(res.data.results);
            setIsSearch(true);
          });
      } catch (err) {
        console.log(err);
      }
    }
  }, [search, setSearchResults, APIKEY]);

  console.log(searchResults);
  return (
    <div className="search-bar">
      <form onSubmit={searchSubmit}>
        <input type="text" ref={inputEl}></input>
        <button>Search Movies</button>
      </form>
    </div>
  );
}

export default Search;
