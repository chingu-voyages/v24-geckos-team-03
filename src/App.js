import React from "react";
import Homepage from "./pages/Homepage";
import { Switch, Route } from "react-router-dom";
import {
  ThemeProvider,
  Box,
  Image,
  Heading,
  Text,
  Stack
} from "@chakra-ui/core";

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
