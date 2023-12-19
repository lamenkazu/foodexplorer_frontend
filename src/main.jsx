import React from "react";
import ReactDOM from "react-dom/client";

import { GlobalStyles } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme";

import { AuthProvider } from "./hooks/auth";

import { Routes } from "./routes";
import { DishDataProvider } from "./hooks/dishData";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <AuthProvider>
        <DishDataProvider>
          <Routes />
        </DishDataProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
