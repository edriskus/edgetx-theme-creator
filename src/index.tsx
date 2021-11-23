import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import reportWebVitals from "./reportWebVitals";
import { theme } from "./styles/Theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ThemeContextProvider } from "./utils/Theme";
import { VersionContextProvider } from "./utils/Version";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <VersionContextProvider>
        <ThemeContextProvider>
          <App />
        </ThemeContextProvider>
      </VersionContextProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
