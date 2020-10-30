import React from "react";
import Homepage from "./pages/Homepage";
import MovieDetailsPage from "./pages/MovieDetails";
import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
      </Switch>
      <Switch>
        <Route path="/:movieId">
          <MovieDetailsPage />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
