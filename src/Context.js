import React, { useState } from "react";

const Context = React.createContext();

function ContextProvider(props) {
  const ImageUrl = "https://image.tmdb.org/t/p/w400";
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const APIKEY = "6ee25636d25df9899ed46e80a13383ff";

  return (
    <Context.Provider
      value={{
        setSearch,
        setSearchResults,
        search,
        searchResults,
        ImageUrl,
        APIKEY,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
