import React from "react";
import { HeaderTop } from "./headerTop/headerTop";
import { HeaderBottom } from "./headerBottom";

/* Código referente al encabezado de la página. */

export const Encabezado = () => {
  return (
    <header>
      <div id="background">
        <HeaderTop />
        <HeaderBottom />
      </div>
    </header>
  );
};
