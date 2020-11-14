import React from "react";
import Homepage from "./pages/Homepage";
import { BrowserRouter, Switch, Route, HashRouter } from "react-router-dom";
import FavoriteMoviespage from "./pages/FavoriteMoviespage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import SearchByActor from "./pages/SearchByActor";
import FilterPage from "./pages/FilterPage";

import SearchPage from "./pages/SearchPage";

const App = () => {
  return (
    <HashRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/favorites">
            <FavoriteMoviespage />
          </Route>
          <Route path="/moviedetailspage/:movieId">
            <MovieDetailsPage />
          </Route>

          <Route path="/actor/:personId">
            <SearchByActor />
          </Route>
          <Route path="/searchPage">
            <SearchPage />
          </Route>
          <Route path="/filterPage">
            <FilterPage />
          </Route>
          <Route exact path="/">
            <Homepage />
          </Route>
        </Switch>
      </div>
    </HashRouter>
  );
};

export default App;
