import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ContextProvider } from "./Context";
import "./index.css";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";

ReactDOM.render(
  <ContextProvider>
    <Router>
      <ThemeProvider>
        <CSSReset />
        <App />
      </ThemeProvider>
    </Router>
  </ContextProvider>,
  document.querySelector("#root")
);
