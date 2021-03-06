import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./theme";
import { GlobalStyle } from "./style/GlobalStyle";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <App />
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
