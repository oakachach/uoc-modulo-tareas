import React from "react";
import { Home } from "../images";

/* Código referente al encabezado inferior de la página. */

export const HeaderBottom = () => {
  return (
    <section id="header-bottom">
      <div className="cuadro-exterior"></div>
      <Botonera />
      <div className="cuadro-exterior"></div>
    </section>
  );
};

/* Botonera del menú */
const Botonera = () => {
  return (
    <div className="header-content">
      <BotonHome />
      <div className="actual menu-button" id="aulas">
        Aulas
      </div>
      <div className="boton menu-button" id="espacio-personal">
        Espacio Personal
      </div>
      <div className="boton menu-button" id="tramites">
        Trámites
      </div>
      <div className="boton menu-button" id="biblioteca">
        Biblioteca
      </div>
      <div className="boton menu-button" id="mas-uoc">
        Más UOC
      </div>
      <div className="cuadro-extra"></div>
    </div>
  );
};

/* Botón home del menú */
const BotonHome = () => {
  return (
    <div className="boton menu-button" id="home">
      <Home />
    </div>
  );
};
