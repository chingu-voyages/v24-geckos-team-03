import React, { useState } from "react";

const Context = React.createContext();

function ContextProvider(props) {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  return (
    <Context.Provider
      value={{ setSearch, setSearchResults, search, searchResults }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
