import React from 'react'
import { Link, Outlet } from "react-router-dom";
import "./Card.css"
function Card({ title, imageSource, descripcion, }) {

    return (
        <div className='card text-center'>
            <div className='Logo d-flex justify-content-center aling-items-center'>
                <img src={imageSource} alt="" />
            </div>

            <div className='card-body'>
                <h4 className='card-title'>{title}</h4>
                <p>{descripcion}</p>
                <Outlet/>
                <Link to={`/domiciles`} className='btn btn-outline-info'>Ir al restaurante</Link>
                
            </div>
        </div>
    )
}

export default Card