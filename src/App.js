import React from "react";
import Homepage from "./pages/Homepage";
import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
