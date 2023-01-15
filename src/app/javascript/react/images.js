/* Módulo para guardar todas las imágenes y exportarlas. */
import React from "react";
import logo from "../../images/uoc_masterbrand_2linies_posititiu.jpg";
import checkmark from "../../images//checkmark.png";
import door from "../../images/door.png";
import gmail from "../../images/gmail.png";
import group from "../../images/group.png";
import help from "../../images/help.png";
import home from "../../images/home.png";
import plus from "../../images/plus.png";
import stopwatch from "../../images/stopwatch.png";
import time from "../../images//time.png";

export const image = {
  logo,
  checkmark,
  door,
  gmail,
  group,
  help,
  home,
  plus,
  stopwatch,
  time
};

/* Iconos que se utilizan en la tabla de tareas */
export const Checkmark = () => {
  return (
    <img className="icon checkmark" src={image.checkmark} alt="checkmark" />
  );
};

export const Stopwatch = () => {
  return (
    <img className="icon checkmark" src={image.stopwatch} alt="checkmark" />
  );
};

export const Time = () => {
  return <img className="icon checkmark" src={image.time} alt="checkmark" />;
};

export const Help = () => {
  return <img className="icon help" src={image.help} alt="help" />;
};

export const Home = () => {
  return (
    <img
      title="Ir a la página principal del Campus Virtual"
      className="icon home"
      src={image.home}
      alt="home"
    />
  );
};

export const LogoIcon = () => {
  return (
    <img
      title="Ir a la página oficial de la UOC"
      src={image.logo}
      alt="Logo UOC"
      width="300"
    />
  );
};

export const Door = () => {
  return (
    <img
      title="Cerrar sesión"
      className="icon door"
      src={image.door}
      alt="door"
    />
  );
};

export const Plus = () => {
  return (
    <img
      title="Consultar las opciones"
      className="icon plus"
      src={image.plus}
      alt="plus"
    />
  );
};

export const Gmail = () => {
  return (
    <img
      title="Consultar el correo"
      className="icon"
      src={image.gmail}
      alt="gmail"
    />
  );
};

export const Groups = () => {
  return (
    <img
      title="Consultar los grupos"
      className="icon group"
      src={image.group}
      alt="group"
    />
  );
};
