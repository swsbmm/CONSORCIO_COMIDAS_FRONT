import React from "react";
import './Unselect.css'
import { Domiciles } from "../../Domiciles";
import { useParams } from "react-router-dom";

export function Unselect(){

    let {id} = useParams();

    return(
        <>
        <div className="unselectCategory">
            <h1>SELECCIONE UNA CATEGORÍA DEL MENU</h1>
        </div>
        <Domiciles id={id}/>
        </>
    );
}