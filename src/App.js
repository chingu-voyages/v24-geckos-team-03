import React from "react";
import Homepage from "./pages/Homepage";
import {BrowserRouter, Switch, Route, withRouter } from "react-router-dom";
import FavoriteMovies from './pages/FavoriteMovies';


const App = () => {
  return (
    <BrowserRouter>
        <div className="App">
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        
        <Route path="/favorites" component={FavoriteMovies} />
        
     
      </Switch>
    </div>
    </BrowserRouter>

  );
};

export default App;
