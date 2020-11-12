import React, { useRef, useEffect, useContext } from "react";
import { Context } from "../Context";
import axios from "axios";
import { useHistory } from "react-router-dom";
function Search() {
  const history = useHistory();

  const {
    setSearchResults,
    searchQuery,
    setSearchQuery,
    searchResults,
    setIsSearch,
    APIKEY,
    setDefaultMovies
  } = useContext(Context);

  const inputEl = useRef(null);

  function searchSubmit(e) {
    e.preventDefault();

    setSearchQuery(inputEl.current.value);

    setIsSearch(true);

    history.push("/searchPage"); // Routes to search page on submit
  }

  useEffect(() => {
    if (searchQuery.length > 0) {
      try {
        axios
          .get(
            `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=${searchQuery}`
          )
          .then(res => {
            setSearchResults(res.data.results);
            setIsSearch(true);
            setDefaultMovies(false);
          });
      } catch (err) {
        console.log(err);
      }
    }

    console.log(searchResults);
  }, [
    searchQuery,
    setSearchResults,
    APIKEY,
    setIsSearch,
    setDefaultMovies,
    searchResults
  ]);

  return (
    <div className="search">
      <form onSubmit={searchSubmit}>
        <input
          type="text"
          name="search"
          ref={inputEl}
          placeholder="Search movie here!"
        ></input>
        <button type="submit" name="button">
          <i className="fas fa-search"></i>
          {/* <input type="text" ref={inputEl}></input> */}
        </button>
      </form>
    </div>
  );
}

export default Search;
