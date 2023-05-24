import React from 'react'
import Card from './Card'
import imagen1 from '../../Assets/img/Maria_Jose_Parrilla.png'
import imagen2 from '../../Assets/img/descarga.jpeg'
import imagen3 from '../../Assets/img/Burger_King.jpeg'
import imagen4 from '../../Assets/img/Jenos_Pizza.png'
import imagen5 from '../../Assets/img/El_corral.png'
import imagen6 from '../../Assets/img/Dominos_Pizza.jpeg'
import { useState, useEffect } from 'react'
import axios from 'axios'

function Cards() {

  let [restaurantes, setRestaurante] = useState([]);

  const reqApi = async () => {
    const api = await fetch("https://api.heflox.com/restaurants");
    const rest = await api.json();
    setRestaurante(rest);
  };

  useEffect(() => {
    reqApi();
  }, []);

  return (
    <div className="container d-flex justify-content-center aling-items-center h-100">
      <div className="row">
        {
          restaurantes.map(resturante => (
            <div className="col-md-4" key={resturante.id}>
              <Card id={resturante.id} title={resturante.nom_rest} imageSource={resturante.img} descripcion={resturante.desc}/>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Cards