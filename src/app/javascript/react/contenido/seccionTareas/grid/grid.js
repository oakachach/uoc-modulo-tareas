import React from "react";
import { Task } from "./task";
import tareasAsignatura from "../../../../../../api/json/tareasSemestre.json";

/* Contenido referente a la tabla del listado de tareas */
export const Grid = (props) => {
  const date = new Date();

  return (
    <div id="grid">
      <TableHeader title={`${getMonthByDate(date)} ${date.getFullYear()}`} />
      <Tasks
        asignaturasVisibles={props.asignaturasVisibles}
        tipologiasVisibles={props.tipologiasVisibles}
        taskArray={tareasAsignatura}
      />
    </div>
  );
};

const Tasks = (props) => {
  const tasks = [];
  props.taskArray = props.taskArray.taskArray;

  for (let task in props.taskArray) {
    tasks.push(
      <li key={props.taskArray[task].id}>
        <Task
          tipologiasVisibles={props.tipologiasVisibles}
          asignaturasVisibles={props.asignaturasVisibles}
          info={props.taskArray[task]}
        />
      </li>
    );
  }

  return (
    <>
      <ul style={{ listStyleType: "none", paddingLeft: "0" }}>{tasks}</ul>
    </>
  );
};

const TableHeader = ({ title }) => {
  return (
    <div id="table-header">
      <div>{title}</div>
    </div>
  );
};

const getMonthByDate = (date) => {
  switch (date.getMonth()) {
    case 0:
      return "Enero";
    case 1:
      return "Febrero";
    case 2:
      return "Marzo";
    case 3:
      return "Abril";
    case 4:
      return "Mayo";
    case 5:
      return "Junio";
    case 6:
      return "Julio";
    case 7:
      return "Agosto";
    case 8:
      return "Septiembre";
    case 9:
      return "Octubre";
    case 10:
      return "Noviembre";
    case 11:
      return "Diciembre";
    default:
      return "Month not found";
  }
};
