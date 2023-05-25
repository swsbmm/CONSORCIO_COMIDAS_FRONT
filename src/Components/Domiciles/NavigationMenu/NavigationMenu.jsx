import React from "react";
import { Link } from "react-router-dom";
import "./NavigationMenu.css";
import Producto from "./producto";

export function NavegationMenu({ id }) {
  return (
    <div>
      <ul>
        <div className="subTitulo">Entradas</div>
        <Producto tipo={"entrada"} id={id} />
        <div className="subTitulo">Platos Fuertes</div>
        <Producto tipo={"plato fuerte"} id={id} />
        <div className="subTitulo">Postres</div>
        <Producto tipo={"postre"} id={id} />
        <div className="subTitulo">Bebidas</div>
        <Producto tipo={"postre"} id={id} />
        <div className="subTitulo">Acompañamientos</div>
        <Producto tipo={"acompañamiento"} id={id} />
      </ul>
    </div>
  );
}
