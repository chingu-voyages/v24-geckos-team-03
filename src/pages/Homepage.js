import React, { useContext } from "react";
import Searchbar from "../components/Searchbar";
import Grid from "../components/Grid";
import { Context } from "../Context";
import NavBar from "../components/NavBar";

function Homepage() {
  const {
    setSearch,
    setSearchResults,
    search,
    searchResults,
    setIsSearch,
    isSearch
  } = useContext(Context);
  return (
    <div
      style={{
        backgroundColor: "#150e06",
        height: "100vh",
        width: "100vw",
        overflow: "scroll"
      }}
    >
      <NavBar />

      <Grid />
    </div>
  );
}

export default Homepage;
