import React from "react";
import Homepage from "./pages/Homepage";
import MovieDetailsPage from "./pages/MovieDetails";
import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/moviedetailspage/:movieId">
          <MovieDetailsPage />
        </Route>

        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
