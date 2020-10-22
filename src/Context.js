import React, { useState } from "react";

const Context = React.createContext();

function ContextProvider(props) {
  const [search, setSearch] = useState("");
  const [searhResults, setSearchResults] = useState([]);

  return (
    <Context.Provider
      value={{ setSearch, setSearchResults, search, searhResults }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
