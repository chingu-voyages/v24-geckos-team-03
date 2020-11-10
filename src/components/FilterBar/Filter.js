import React, { useContext, useRef, useState, useEffect } from "react";
import "./filter.css";
import axios from "axios";
import { Context } from "../../Context";
import { Heading, Button, Select } from "@chakra-ui/core";

function Filter() {
  const [genre, setGenre] = useState("Genre");
  const [year, setYear] = useState("Year");
  const genreOption = useRef(null);
  const yearOption = useRef(null);
  const [submit, setSubmit] = useState(false);
  const inputEl = useRef(null);
  const selectEl = useRef(null);
  const {
    APIKEY,
    setDefaultMovies,
    setSearch,
    setHomePageResults
  } = useContext(Context);

  function formSubmit(e) {
    e.preventDefault();
    setSubmit(true);
    setGenre(inputEl.current.value);
    setYear(selectEl.current.value);
    genreOption.current.disabled = true;

    yearOption.current.disabled = true;
  }

  useEffect(() => {
    //   Checks wheither if correct selections are submitted
    if (genre != "Genre" && year != "Year") {
      try {
        axios
          .get(
            `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&sort_by=popularity.desc&page=1&year=${year}&with_genres=${genre}`
          )
          .then(res => {
            setHomePageResults(res.data.results);
            setDefaultMovies(false);
            setSubmit(false);
          });
      } catch (err) {
        console.log(err);
      }
    }
  }, [submit]);

  const filterbar = {
    marginTop: "250px",
    textAlign: "center"
  };
  const filterButton = {
    border: "none",
    color: "black",
    padding: "8px 32px",
    textAlign: "center",
    textDecoration: "none",
    display: "inlineBlock",
    fontSize: "16px",
    margin: "4px 2px",
    cursor: "pointer",
    backgroundColor: "#2c3e50",
    borderRadius: "30px",
    outline: "none"
  };

  const selectStyles = {
    marginRight: "10px",
    position: "relative",

    width: "20em",
    height: "3em",
    lineHeight: "3",
    background: "#2c3e50",
    overflow: "hidden",
    borderRadius: ".25em",
    padding: "0 .5em",
    color: "#fff",
    cursor: "pointer"
  };

  return (
    <div style={filterbar}>
      <Heading color="white">Find Movies By</Heading>
      <form
        className="form"
        onSubmit={formSubmit}
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        <Select ref={inputEl} style={selectStyles} w="20em">
          <option ref={genreOption}>Genre</option>
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
        </Select>

        <Select ref={selectEl} style={selectStyles} w="20em">
          <option ref={yearOption}>Year</option>
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
        </Select>

        <button style={filterButton}>Submit</button>
      </form>
    </div>
  );
}

export default Filter;