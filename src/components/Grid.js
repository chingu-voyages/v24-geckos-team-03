import React from "react";

function Grid() {
  const gridStyles = {
    maxWidth: "800px",
    height: "800px",
    backgroundColor: "red",
    margin: "0 auto"
  };
  return <div className="container" style={gridStyles}></div>;
}

export default Grid;
