import React, { useContext } from "react";
import Searchbar from "../components/Searchbar";
import Grid from "../components/Grid";
<<<<<<< HEAD
import { Context } from "../Context";
=======
import NavBar from "../components/NavBar";
>>>>>>> c1a7bec5ac776ea5801d19583bf0d081a6787259

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
