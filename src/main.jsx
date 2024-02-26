import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./index.css";

import { GlobalFonts } from "./fonts/fonts";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalFonts />
    <App />
  </React.StrictMode>
);
