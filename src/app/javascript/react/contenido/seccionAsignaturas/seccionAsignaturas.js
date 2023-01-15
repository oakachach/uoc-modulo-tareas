import React, { useState } from "react";
import listadoAsignaturas from "../../../../../api/json/asignaturasSemestre.json";
import { tipologias } from "../contenido";

/* Código referente a la sección de asignaturas de la página */

export const SeccionAsignaturas = (props) => {
  return (
    <section id="seccion-asignaturas">
      <AulasAnteriores />
      <div id="asignaturas">
        <h4>Asignaturas y estados</h4>
        <ContenedorAsignaturas onChange={props.onChange} />
      </div>
      <ContenedorTipologias onChange={props.onChange} />
    </section>
  );
};

const ContenedorTipologias = (props) => {
  const final = [];

  for (let item in tipologias) {
    final.push(
      <li key={tipologias[item].name}>
        <Tipologia tipologia={tipologias[item]} onChange={props.onChange} />
      </li>
    );
  }
  return (
    <div className="contenedor-asignaturas-tipologia">
      <div className="bolder contenedor-titulo-asignaturas-tipologia">
        Estado de la tarea
      </div>
      <ul style={{ listStyleType: "none", paddingLeft: "0" }}>{final}</ul>
    </div>
  );
};

const Tipologia = (props) => {
  const [checked, setChecked] = useState(
    props.tipologia.name === "completed" ? false : true
  );

  const handleChange = (value) => {
    props.onChange("tipologia", props.tipologia.name, value);
    setChecked(!checked);
  };

  return (
    <div className="asignatura">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => handleChange(e.target.checked)}
      />
      <div
        className="inline"
        style={{
          backgroundColor: props.tipologia.color,
          border: "1px solid #000078"
        }}
      ></div>
      <a title={props.tipologia.title}>{props.tipologia.title}</a>
    </div>
  );
};

/* Sección de aulas anteriores */
const AulasAnteriores = () => {
  return (
    <div className="center" id="aulas-anteriores">
      <a>Consulta las aulas anteriores</a>
    </div>
  );
};

/* Listado de asignaturas matriculadas */
const ContenedorAsignaturas = (props) => {
  const final = [];

  for (let asignatura in listadoAsignaturas) {
    final.push(
      <li key={asignatura}>
        <Asignatura
          info={listadoAsignaturas[asignatura]}
          onChange={props.onChange}
        />
      </li>
    );
  }
  return (
    <div className="contenedor-asignaturas-tipologia">
      <div className="bolder contenedor-titulo-asignaturas-tipologia">
        Asignaturas
      </div>
      <ul style={{ listStyleType: "none", paddingLeft: "0" }}>{final}</ul>
    </div>
  );
};

/* Unidad de asignatura del listado */
const Asignatura = (props) => {
  const [checked, setChecked] = useState(true);

  const handleChange = (value) => {
    props.onChange("asignatura", props.info.id, value);
    setChecked(!checked);
  };

  return (
    <div className="asignatura">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => handleChange(e.target.checked)}
      />
      <div
        className="inline"
        style={{
          backgroundColor: props.info.color
        }}
      ></div>
      <a title={props.info.id}>{props.info.name}</a>
    </div>
  );
};
