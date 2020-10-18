import React, { useState, useRef } from "react";
import axios from "axios";

function Search() {
  const [search, setSearch] = useState("");
  const inputEl = useRef(null);

  function searchSubmit(e) {
    e.preventDefault();
    setSearch(inputEl.current.value);
  }

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
