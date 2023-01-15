import React from "react";
import { Contenido } from "./contenido/contenido";
import { Encabezado } from "./encabezado/encabezado";

/* Código principal de la aplicación */

function App() {
  return (
    <div className="App">
      <div id="container">
        <Encabezado />
        <Contenido />
      </div>
    </div>
  );
}

export default App;
