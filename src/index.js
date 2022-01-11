import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/index.css";
import reportWebVitals from "./reportWebVitals";
import Main from "./Main";

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById("main")
);

reportWebVitals();
