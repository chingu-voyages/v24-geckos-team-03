import React from "react";
import Homepage from "./pages/Homepage";
import {BrowserRouter, Switch, Route, withRouter } from "react-router-dom";
import FavoriteMoviespage from './pages/FavoriteMoviespage';


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
    </div>
    </BrowserRouter>

  );
};

export default App;
