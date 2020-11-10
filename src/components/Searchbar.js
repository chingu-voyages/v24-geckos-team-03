import React, { useRef, useEffect, useContext } from "react";
import { Context } from "../Context";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
function Search() {
  const history = useHistory();
  console.log(history);
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
  }, [searchQuery, setSearchResults, APIKEY, setIsSearch, setDefaultMovies]);

  const buttonStyle = {
    borderRadius: "0.25rem",
    fontWeight: 600,
    display: "inline-flex",
    appearance: "none",
    WebkitBoxAlign: "center",
    alignItems: "center",
    WebkitBoxPack: "center",
    justifyContent: "center",
    transition: "all 250ms ease 0s",
    userSelect: "none",
    position: "relative",
    whiteSpace: "nowrap",
    verticalAlign: "middle",
    lineHeight: 1.2,
    outline: "none",
    height: "2em",
    minWidth: "2.5rem",
    fontSize: "1rem",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    backgroundColor: "rgb(237, 242, 247)",
    marginLeft: "5px",
    marginRight: "5px"
  };
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
