import React, { useContext, useRef, useState, useEffect } from "react";
import axios from "axios";
import { Context } from "../Context";
import { Heading } from "@chakra-ui/core";
import { Button } from "@chakra-ui/core";

function FilterSidebar() {
  const [genre, setGenre] = useState("Genre");
  const [year, setYear] = useState("Year");
  const [submit, setSubmit] = useState(false);
  const inputEl = useRef(null);
  const selectEl = useRef(null);
  const { setSearchResults, APIKEY, setDefaultMovies } = useContext(Context);

  function genres() {
    var genres = [
      {
        id: 28,
        name: "Action"
      },
      {
        id: 12,
        name: "Adventure"
      },
      {
        id: 16,
        name: "Animation"
      },
      {
        id: 35,
        name: "Comedy"
      },
      {
        id: 80,
        name: "Crime"
      },
      {
        id: 99,
        name: "Documentary"
      },
      {
        id: 18,
        name: "Drama"
      },
      {
        id: 10751,
        name: "Family"
      },
      {
        id: 14,
        name: "Fantasy"
      },
      {
        id: 36,
        name: "History"
      },
      {
        id: 27,
        name: "Horror"
      },
      {
        id: 10402,
        name: "Music"
      },
      {
        id: 9648,
        name: "Mystery"
      },
      {
        id: 10749,
        name: "Romance"
      },
      {
        id: 878,
        name: "Science Fiction"
      },
      {
        id: 10770,
        name: "TV Movie"
      },
      {
        id: 53,
        name: "Thriller"
      },
      {
        id: 10752,
        name: "War"
      },
      {
        id: 37,
        name: "Western"
      }
    ];
  }

  function formSubmit(e) {
    e.preventDefault();
    setSubmit(true);
    setGenre(inputEl.current.value);
    setYear(selectEl.current.value);
    console.log("sub");
  }

  useEffect(() => {
    if (genre != "Genre" && year != "Year") {
      console.log("hello");
      try {
        axios
          .get(
            `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&sort_by=popularity.desc&page=1&year=${year}&with_genres=${genre}`
          )
          .then(res => {
            setSearchResults(res.data.results);
            setDefaultMovies(false);
            setSubmit(false);
          });
      } catch (err) {
        console.log(err);
      }
    }
  }, [submit]);

  console.log(year, genre);

  const sidebar = {
    // position: "absolute",
    // top: "100px",
    // left: "50%",
    // transform: "translate(-50%)"
    marginTop: "250px",
    textAlign: "center"
  };

  return (
    <div style={sidebar}>
      <Heading color="white">Find Movies By</Heading>
      <form onSubmit={formSubmit}>
        <select ref={inputEl} style={{ marginRight: "10px" }}>
          <option>Genre</option>
          <option value="80">Comedy</option>
          <option value="28">Action</option>
          <option value="12">Adventure</option>
          <option value="16">Animation</option>
        </select>

        <select ref={selectEl} style={{ marginRight: "10px" }}>
          <option>Year</option>
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

        <button>Sub</button>
      </form>
    </div>
  );
}

export default FilterSidebar;
