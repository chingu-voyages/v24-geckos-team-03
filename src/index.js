import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, CSSReset, ColorModeProvider, theme } from "@chakra-ui/core";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import { ContextProvider } from "./Context";
import { customTheme } from "./theme";
import "./index.css";

ReactDOM.render(
  <ContextProvider>
    <Router>
      <ThemeProvider theme={customTheme}>
        <ColorModeProvider>
          <CSSReset />
          <App />
        </ColorModeProvider>
      </ThemeProvider>
    </Router>
  </ContextProvider>,
  document.querySelector("#root")
);
