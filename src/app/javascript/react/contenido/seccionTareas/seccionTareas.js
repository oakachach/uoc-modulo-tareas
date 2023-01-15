import React from "react";
import { Grid } from "./grid/grid";

/* Contenido referente a la sección de tareas de la página */

export const SeccionTareas = (props) => {
  return (
    <section id="seccion-tareas">
      <h1>Tareas</h1>
      <div className="flex-row" id="mensual-semestral">
        <VistaTareas />
        <Grid
          asignaturasVisibles={props.asignaturasVisibles}
          tipologiasVisibles={props.tipologiasVisibles}
        />
      </div>
    </section>
  );
};

/* Botonera para cambiar la vista de las tareas */
const VistaTareas = () => {
  return (
    <>
      <div className="tareas-vista">
        <a>
          <h4 title="Ver vista mensual">Mensual</h4>
        </a>
      </div>
      <div className="tareas-vista">
        <a>
          <h4 title="Ver vista semestral">Semestral</h4>
        </a>
      </div>
    </>
  );
};
