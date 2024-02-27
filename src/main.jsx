import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

import { GlobalFonts } from "./fonts/fonts";
import { GlobalStyles } from "./components/styles/GlobalStyles";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    mainGreen: "#083045",
    btnGold: "#bda068",
  },
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyles />
    <GlobalFonts />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
