import React from "react";
import { Door, Groups, Plus, Gmail } from "../../images";

/* Sección de perfil de usuario */

export const Perfil = () => {
  return (
    <div id="perfil">
      <div id="foto-perfil"></div>
      <div id="nombre-enlaces">
        <NombreUsuario />
        <Enlaces />
      </div>
    </div>
  );
};

const NombreUsuario = () => {
  return (
    <div id="perfil-nombre">
      <a>
        <p className="bolder" id="nombre-usuario">
          Oussama Akachach Jouhrati (Estudiante)
        </p>
      </a>
      <a>
        <Door />
      </a>
    </div>
  );
};

const Enlaces = () => {
  return (
    <div id="perfil-enlaces">
      <EnlacesDerecha />
      <a className="perfil-enlaces-derecha-elemento">
        <Plus />
        <p>Opciones</p>
      </a>
    </div>
  );
};

const EnlacesDerecha = () => {
  return (
    <div id="perfil-enlaces-derecha">
      <a className="perfil-enlaces-derecha-elemento">
        <Gmail />
        <p>Buzón</p>
      </a>
      <a className="perfil-enlaces-derecha-elemento">
        <Groups />
        <p>Grupos</p>
      </a>
    </div>
  );
};
