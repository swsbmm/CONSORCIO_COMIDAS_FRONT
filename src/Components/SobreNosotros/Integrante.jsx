import React from 'react';
import './Integrante.css'

function Integrante(props) {
  return (
    <div className='contenedor-integrante'>
      <img className='imagen-integrante'
      src={props.imagen} 
      alt='imagen integrante'/>
      <div className='contenedor-texto-integrante'>
        <p className='nombre-integrante'>
          <strong>{props.nombre}</strong>
        </p>
        <p className='texto-integrante'>
          {props.descripcion}
        </p>
        {props.usuarios}
      </div>
    </div>
  );   
}
export default Integrante;