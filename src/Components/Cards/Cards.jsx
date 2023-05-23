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

const resturantes = [
  {
    id: 1,
    nom_rest: 'Maria Jose Parrilla',
    imgUrl: imagen1,
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus ducimus pariatur voluptate quaerat, repellendus natus quibusdam veritatis tempora ipsa odio distinctio. Architecto nihil ducimus a aut laboriosam vitae perspiciatis totam!' 
  },
  {
    id: 2,
    nom_rest: 'KFC',
    imgUrl: imagen2,
    desc: ''

  },
  {
    id: 3,
    nom_rest: 'Burger King',
    imgUrl: imagen3,
    desc: ''

  },
  {
    id: 4,
    nom_rest: "Jeno's Pizza",
    imgUrl: imagen4,
    desc: ''

  },
  {
    id: 5,
    nom_rest: 'El corral',
    imgUrl: imagen5,
    desc: ''

  },
  {
    id: 6,
    nom_rest: 'Dominos Pizza',
    imgUrl: imagen6,
    desc: ''

  }
]

function Cards() {

//   let [ restaurantes, setRestaurante ] = useState([]);
  
//   async function fetchRestaurante(){
//     axios
//     .get(`http://localhost:5000/verRestaurantes`)
//     .then( (response) => {
//         setRestaurante(response.data);
//     })
//     .catch( (error) => {
//         console.log(error);
//     })
//   }

//   useEffect(() => {
//     fetchRestaurante();
// }, []);

  console.log(resturantes)
  return (
    <div className="container d-flex justify-content-center aling-items-center h-100">
      <div className="row">
        {
          resturantes.map(resturante => (
            <div className="restaurante col-md-4" key={resturante.id}>
              <Card id={resturante.id} title={resturante.nom_rest} imageSource={resturante.imgUrl} descripcion={resturante.desc}/>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Cards