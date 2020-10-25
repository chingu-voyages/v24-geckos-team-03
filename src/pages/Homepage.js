import React, { useContext } from "react";

import Grid from "../components/Grid";

import NavBar from "../components/NavBar";
import { Context } from "../Context";

function Homepage() {
  const { isSearch } = useContext(Context);

  const headerStyles = {
    position: "absolute",
    top: "100px",
    color: "white",
    left: "150px",
    fontSize: "25px",
    fontWeight: "100"
  };
  return (
    <div
      style={{
        backgroundColor: "#150e06",
        height: "100vh",
        width: "100vw",
        overflow: "scroll"
      }}
    >
      <h1 style={headerStyles}>{isSearch ? null : "Popular Movies"}</h1>
      <NavBar />

      <Grid />
    </div>
  );
}

export default Homepage;
