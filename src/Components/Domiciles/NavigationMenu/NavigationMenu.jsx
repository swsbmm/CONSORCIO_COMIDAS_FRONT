import React from "react";
import { Link } from "react-router-dom";
import './NavigationMenu.css'
import Producto from "./producto";

export function NavegationMenu(id) {


    return (
        <div>
            <ul >
            <div className="subTitulo">Entradas</div>
            <Producto tipo={'Entrada'} id={id}/>
            <div className="subTitulo">Platos Fuertes</div>
            <Producto tipo={'Plato Fuerte'} id={id}/>
            <div className="subTitulo">Postres</div>
            <Producto tipo={'Postres'} id={id}/>
            <div className="subTitulo">Bebidas</div>
            <Producto tipo={'Bebidas'} id={id}/>
            <div className="subTitulo">Acompañamientos</div>
            <Producto tipo={'Acompañamientos'} id={id}/>
            </ul>
        </div>
    );
}