import React, { useState } from "react";

const Context = React.createContext();

function ContextProvider(props) {
  const ImageUrl = "https://image.tmdb.org/t/p/w400";
  const [isSearch, setIsSearch] = useState(false);
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
<<<<<<< HEAD
        isSearch,
        setIsSearch
=======
        APIKEY,
>>>>>>> c1a7bec5ac776ea5801d19583bf0d081a6787259
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
