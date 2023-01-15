import React from "react";
import { Perfil } from "./perfil";
import { Help, LogoIcon } from "../../images";

/* Código referente al encabezado superior de la página. */

export const HeaderTop = () => {
  return (
    <section id="header-top">
      <Logo />
      <div id="servicio-atencion-perfil">
        <ServicioAtencion />
        <Perfil />
      </div>
    </section>
  );
};

/* Servicio de atención */
const ServicioAtencion = () => {
  return (
    <a>
      <div id="servicio-atencion">
        <Help />
        <a id="servicio-atencion-texto">Servicio de atención</a>
      </div>
    </a>
  );
};

/* Logo de la página */
const Logo = () => {
  return (
    <div id="logo-uoc">
      <LogoIcon />
    </div>
  );
};
