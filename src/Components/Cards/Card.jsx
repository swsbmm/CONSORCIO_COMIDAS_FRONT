import React from 'react'

function Card({title, imageSource, descripcion, }) {
    
    return (
        <div className='card text-center'>
            <img src={imageSource} alt="" />
            <div className='card-body'>
                <h4 className='card-title'>{title}</h4>
                <p>{descripcion}</p>
                <a href="#!" className='btn btn-outline-info'>
                    Ir al restaurante
                </a>
            </div>
        </div>
    )
}

export default Card