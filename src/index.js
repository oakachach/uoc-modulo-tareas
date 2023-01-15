import React from "react";
import ReactDOM from "react-dom";
import App from "./app/javascript/react/App";
import "./api/server";
import * as styles from "./app/javascript/react/styles";

/* Archivo principal de la aplicación */

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
