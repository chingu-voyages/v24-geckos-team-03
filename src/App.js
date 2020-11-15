import React from "react";
import Homepage from "./pages/Homepage";
import { BrowserRouter, Switch, Route, HashRouter } from "react-router-dom";
import FavoriteMoviespage from "./pages/FavoriteMoviespage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import SearchByActor from "./pages/SearchByActor";

import SearchPage from "./pages/SearchPage";
import WatchListpage from './pages/WatchListpage';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/favorites">
            <FavoriteMoviespage />
          </Route>
          <Route path="/watchList">
            <WatchListpage />
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
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
