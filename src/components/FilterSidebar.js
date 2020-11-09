import React, { useContext, useRef, useState, useEffect } from "react";
import axios from "axios";
import { Context } from "../Context";
import { Button, Box } from "@chakra-ui/core";

function FilterSidebar() {
  const [genre, setGenre] = useState("Genre");
  const [year, setYear] = useState("Year");
  const [submit, setSubmit] = useState(false);
  const inputEl = useRef(null);
  const selectEl = useRef(null);
  const { setSearchResults, APIKEY, setDefaultMovies, setSearch } = useContext(
    Context
  );

  function formSubmit(e) {
    e.preventDefault();
    setSubmit(true);
    setGenre(inputEl.current.value);
    setYear(selectEl.current.value);
  }

  useEffect(() => {
    //   Checks wheither if correct selections are submitted
    if (genre !== "Genre" && year !== "Year") {
      try {
        axios
          .get(
            `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&sort_by=popularity.desc&page=1&year=${year}&with_genres=${genre}`
          )
          .then((res) => {
            setSearchResults(res.data.results);
            setDefaultMovies(false);
            setSubmit(false);
            setSearch("");
          });
      } catch (err) {
        console.log(err);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submit]);

  const sidebar = {
    marginTop: "100px",
    textAlign: "center",
  };
  const filterButton = {
    height: "2em",
    borderWidth: "2px",
    textAlign: "center",
    textDecoration: "none",
    display: "inlineBlock",
    fontSize: "0.9em",
    cursor: "pointer",
    borderRadius: "1em",
  };

  const selectStyles = {
    marginRight: "10px",
    position: "relative",
    width: "10em",
    height: "2.2em",
    lineHeight: "2em",
    background: "#444", //"#2c3e50",
    overflow: "hidden",
    borderRadius: "1em",
    color: "#fff",
    cursor: "pointer",
    paddingLeft: "15px",
    fontSize: "0.8em",
  };
  console.log("filter");
  return (
    <div style={sidebar}>
      <form onSubmit={formSubmit}>
        <Box d="inline" color="primaryText" fontSize="0.9em" marginRight="10px">
          Find Movies By
        </Box>
        <select ref={inputEl} style={selectStyles}>
          <option value disabled>
            Genre
          </option>
          <option value="28">Action</option>

          <option value="12">Adventure</option>
          <option value="16">Animation</option>
          <option value="35">Comedy</option>
          <option value="80">Crime</option>
          <option value="99">Documentary</option>
          <option value="18">Drama</option>
          <option value="14">Fantasy</option>
          <option value="36">History</option>
          <option value="10402">Music</option>
          <option value="9648">Mystery</option>
          <option value="10749">Romance</option>

          <option value="878">Science Fiction</option>
          <option value="10770">Tv Movie</option>
          <option value="53">Thriller</option>
          <option value="10752">War</option>
        </select>

        <select ref={selectEl} style={selectStyles}>
          <option value disabled>
            Year
          </option>
          <option>2020</option>
          <option>2019</option>
          <option>2018</option>
          <option>2017</option>
          <option>2016</option>
          <option>2016</option>
          <option>2015</option>
          <option>2013</option>
          <option>2012</option>
          <option>2011</option>
          <option>2010</option>
          <option>2009</option>
        </select>

        <Button
          backgroundColor="primaryBackground"
          borderColor="logoText"
          color="logoText"
          style={filterButton}
          _hover={{ backgroundColor: "logoText", color: "primaryBackground", fontWeight: "900" }}
          type="submit"
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

export default FilterSidebar;
