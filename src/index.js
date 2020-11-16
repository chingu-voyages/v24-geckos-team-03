import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import { ContextProvider } from "./Context";
import { customTheme } from "./theme";
import "./index.css";

ReactDOM.render(
  <ContextProvider>
    <Router>
      <ThemeProvider theme={customTheme}>
        <CSSReset />
        <App />
      </ThemeProvider>
    </Router>
  </ContextProvider>,
  document.querySelector("#root")
);
