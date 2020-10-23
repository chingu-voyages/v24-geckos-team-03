import React from "react";
import Searchbar from "../components/Searchbar";
import Grid from "../components/Grid";

function Homepage() {
  return (
    <div
      style={{
        backgroundColor: "#150e06",
        height: "100vh",
        width: "100vw",
        overflow: "scroll"
      }}
    >
      <Searchbar />
      <Grid />
    </div>
  );
}

export default Homepage;
