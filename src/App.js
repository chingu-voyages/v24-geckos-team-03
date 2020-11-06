import React from "react";
import Homepage from "./pages/Homepage";
import {BrowserRouter, Switch, Route, withRouter } from "react-router-dom";
import FavoriteMoviespage from './pages/FavoriteMoviespage';
import MovieDetailsPage from "./pages/MovieDetailsPage";

const App = () => {
  return (
    <BrowserRouter>
        <div className="App">
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>  
        <Route path="/favorites" component={FavoriteMoviespage} />
      </Switch>
      <Switch>
        <Route path="/:movieId">
          <MovieDetailsPage />
        </Route>
      </Switch>
    </div>
    </BrowserRouter>

  );
};

export default App;
