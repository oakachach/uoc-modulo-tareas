import React, { useEffect, useState } from "react";
import { SeccionTareas } from "./seccionTareas/seccionTareas";
import { SeccionAsignaturas } from "./seccionAsignaturas/seccionAsignaturas";
import listadoAsignaturas from "../../../../api/json/asignaturasSemestre.json";

/* Código referente al cuerpo de la página */

export const tipologias = {
  0: {
    name: "completed",
    title: "Tareas completadas",
    color: "#73edff"
  },
  1: {
    name: "pending",
    title: "Tareas pendientes",
    color: "#f0f0f0"
  },
  2: {
    name: "uncompleted",
    title: "Tareas fuera de plazo",
    color: "#ff7d87"
  }
};

export const Contenido = () => {
  const [asignaturasVisibles, setAsignaturasVisibles] = useState(
    Object.keys(listadoAsignaturas).map((item) => listadoAsignaturas[item].id)
  );

  const [tipologiasVisibles, setTipologiasVisibles] = useState(
    Object.keys(tipologias)
      .map((item) => tipologias[item].name)
      .filter((item) => item !== "completed")
  );

  // Aquí podemos añadir un argumento como tipo, y así diferenciar
  // entre asignatura y tipología.
  const handleChange = (type, id, value) => {
    switch (type) {
      case "asignatura":
        if (value === false) {
          setAsignaturasVisibles(
            asignaturasVisibles.filter((item) => item !== id)
          );
        } else {
          setAsignaturasVisibles([...asignaturasVisibles, id]);
        }
        break;
      case "tipologia":
        if (value === false) {
          setTipologiasVisibles(
            tipologiasVisibles.filter((item) => item !== id)
          );
        } else {
          setTipologiasVisibles([...tipologiasVisibles, id]);
        }
        break;
      default:
        return;
    }
  };

  return (
    <div id="contenido">
      <div id="tareas-asignaturas">
        <SeccionTareas
          asignaturasVisibles={asignaturasVisibles}
          tipologiasVisibles={tipologiasVisibles}
        />
        <SeccionAsignaturas
          onChange={(type, id, value) => handleChange(type, id, value)}
        />
      </div>
    </div>
  );
};
