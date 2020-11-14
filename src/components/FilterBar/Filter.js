import React, { useContext, useRef, useState, useEffect } from "react";
import "./filter.css";
import axios from "axios";
import { Context } from "../../Context";
import { Button, Select, Box, Input } from "@chakra-ui/core";
import { Link, useHistory } from "react-router-dom";

function Filter(props) {
  const genreOption = useRef(null);
  const yearOption = useRef(null);

  const history = useHistory();

  const inputEl = useRef(null);
  const selectEl = useRef(null);
  const [page, setPage] = useState(1);
  const {
    APIKEY,
    setDefaultMovies,
    filterdResults,
    setFilteredResults
  } = useContext(Context);

  function formSubmit(e) {
    console.log("hello");
    e.preventDefault();

    const genre = inputEl.current.value;
    const year = selectEl.current.value;

    if (genre === "Genre" && year === "Year") {
      setDefaultMovies(true);
      history.push("/");
    }

    //   Checks wheither if correct selections are submitted

    if (genre !== "Genre" && year === "Year") {
      try {
        axios
          .get(
            `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&sort_by=popularity.desc&page=1&with_genres=${genre}&page=${page}`
          )
          .then(res => {
            setFilteredResults(res.data.results);
            console.log(res.data.results);
            setDefaultMovies(false);

            history.push("/filterPage");
          });
      } catch (err) {
        console.log(err);
      }
    }

    console.log(year);
    if (year !== "Year" && genre === "Genre") {
      try {
        axios
          .get(
            `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&sort_by=popularity.desc&page=1&year=${year}&page=${page}`
          )
          .then(res => {
            setFilteredResults(res.data.results);
            console.log(res.data.results);
            setDefaultMovies(false);

            history.push("/filterPage");
          });
      } catch (err) {
        console.log(err);
      }
    }

    console.log(year);
    console.log(genre);
    if (year !== "Year" && genre !== "Genre") {
      try {
        axios
          .get(
            `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&sort_by=popularity.desc&page=1&year=${year}&with_genres=${genre}&page=${page}`
          )
          .then(res => {
            setFilteredResults(res.data.results);
            console.log(res.data.results);
            setDefaultMovies(false);
            //setSubmit(false);
            history.push("/filterPage");
          });
      } catch (err) {
        console.log(err);
      }
    }
  }

  function add() {
    setPage(prevPage => prevPage + 1);
  }

  function minus() {
    if (page >= 1) setPage(prevPage => prevPage - 1);
  }

  const filterbar = {
    marginTop: "125px",
    textAlign: "center"
  };
  const filterButton = {
    height: "2em",
    borderWidth: "2px",
    textAlign: "center",
    textDecoration: "none",
    display: "inlineBlock",
    fontSize: "0.9em",
    cursor: "pointer",
    borderRadius: "1em"
  };

  const selectStyles = {
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
    fontSize: "0.8em"
  };

  console.log(page);

  return (
    <div style={filterbar}>
      <form
        className="form"
        onSubmit={formSubmit}
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        <Box d="inline" color="primaryText" fontSize="1em" mx="7px" my="5px">
          Find Movies By
        </Box>
        <Select ref={inputEl} style={selectStyles} w="8em" mx="7px" my="7px">
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
        <Select ref={selectEl} style={selectStyles} w="8em" mx="7px" my="7px">
          <option ref={yearOption}>Year</option>

          <option>2020</option>
          <option>2019</option>
          <option>2018</option>
          <option>2017</option>
          <option>2016</option>
          <option>2015</option>
          <option>2014</option>
          <option>2013</option>
          <option>2012</option>
          <option>2011</option>
          <option>2010</option>
          <option>2009</option>
        </Select>

        <Button
          backgroundColor="primaryBackground"
          borderColor="logoText"
          color="logoText"
          style={filterButton}
          _hover={{
            backgroundColor: "logoText",
            color: "primaryBackground",
            fontWeight: "900"
          }}
          type="submit"
          mx="7px"
          my="7px"
        >
          Submit
        </Button>
      </form>

      <button onClick={minus}>{page > 1 ? `page${page - 1}` : null}</button>
      <button onClick={add}>{page ? `page${page + 1}` : null}</button>
    </div>
  );
}

export default Filter;
