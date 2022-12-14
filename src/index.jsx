import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeStore } from "./context/ThemeContext";
import "./i18next.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Suspense fallback={<div> loading... </div>}>
    <BrowserRouter basename="/">
      <ThemeStore>
        <App />
      </ThemeStore>
    </BrowserRouter>
  </Suspense>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
