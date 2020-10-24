import React, { useState } from "react";

const Context = React.createContext();

function ContextProvider(props) {
  const ImageUrl = "https://image.tmdb.org/t/p/w400";
  const [isSearch, setIsSearch] = useState(false);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  return (
    <Context.Provider
      value={{
        setSearch,
        setSearchResults,
        search,
        searchResults,
        ImageUrl,
        isSearch,
        setIsSearch
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
