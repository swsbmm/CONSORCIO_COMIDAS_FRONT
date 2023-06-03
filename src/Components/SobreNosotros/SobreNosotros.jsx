import React from 'react';
import './SobreNosotros.css';
import Integrante from './Integrante';
import Card from './Card';
import Jose from './Jose 2 x 3.jpg';


export function SobreNosotros() {
  return (
    <div className="App">
      
      <div className='contenedor-nosotros'>
      <div className='contenedor-nosotros-card'>
      <Card 
        title='Sobre nosotros'
      />
      </div>
      <div className="integrantes">
        <Integrante 
        nombre='Kevin Santiago Holguin Bello'
        descripcion={`.
        `} 
        imagen = {""}/>
        <Integrante 
        nombre='Luisa María Lugo Flórez'
        descripcion={`.
        `} 
        imagen = {""}/>
        <Integrante 
        nombre='Jose David Sanabria Aponte'
        descripcion={`
        jdsanabriaa@udistrital.edu.co - davidsajose10@gmail.com
        https://www.linkedin.com/in/jdsanabriaa/
        3175031582
        `} 
        imagen = {Jose}/>
        <Integrante 
        nombre='Jonathan Steven Cruz Monroy'
        descripcion={`.
        `} 
        imagen = {""}/>
        <Integrante 
        nombre='William Andres Jaramillo Barbosa'
        descripcion={`.
        `} 
        imagen = {""}/>
      </div>  
      </div>
    </div>
  );
}


