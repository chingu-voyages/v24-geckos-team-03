import React from "react";
import Homepage from "./pages/Homepage";
import MovieDetailsPage from "./pages/MovieDetails";
import SearchByActor from "./pages/SearchByActor";
import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Switch>
      <Route path="/moviedetails/:movieId">
          <MovieDetailsPage />
        </Route>
        <Route path="/actor/:personId">
          <SearchByActor />
        </Route>
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
