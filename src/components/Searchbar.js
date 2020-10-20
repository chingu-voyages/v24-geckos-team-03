import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

function Search() {
  const [search, setSearch] = useState("");
  const [searhResults, setSearchResults] = useState([]);
  const inputEl = useRef(null);

  const APIKEY = "6ee25636d25df9899ed46e80a13383ff";

  function searchSubmit(e) {
    e.preventDefault();
    setSearch(inputEl.current.value);
  }

  useEffect(() => {
    console.log("h");
    if (search.length > 0) {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=${search}`
        )
        .then(res => {
          setSearchResults(res.data.results);
        });
    }
  }, [search]);

  return (
    <div>
      <form onSubmit={searchSubmit}>
        <input type="text" ref={inputEl}></input>
        <button>Search Movies</button>
      </form>
    </div>
  );
}

export default Search;
