import React from 'react'
import Card from './Card'
import imagen1 from '../../Assets/img/Maria_Jose_Parrilla.png'
import imagen2 from '../../Assets/img/descarga.jpeg'
import imagen3 from '../../Assets/img/Burger_King.jpeg'
import imagen4 from '../../Assets/img/Jenos_Pizza.png'
import imagen5 from '../../Assets/img/El_corral.png'
import imagen6 from '../../Assets/img/Dominos_Pizza.jpeg'

const resturantes = [
  {
    id: 1,
    nom_rest: 'Maria Jose Parrilla',
    img: imagen1,
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus ducimus pariatur voluptate quaerat, repellendus natus quibusdam veritatis tempora ipsa odio distinctio. Architecto nihil ducimus a aut laboriosam vitae perspiciatis totam!',
    url: ''
  },
  {
    id: 2,
    nom_rest: 'KFC',
    img: imagen2,
    desc: '',
    url: ''
  },
  {
    id: 3,
    nom_rest: 'Burger King',
    img: imagen3,
    desc: '',
    url: ''
  },
  {
    id: 4,
    nom_rest: "Jeno's Pizza",
    img: imagen4,
    desc: '',
    url: ''
  },
  {
    id: 5,
    nom_rest: 'El corral',
    img: imagen5,
    desc: '',
    url: ''
  },
  {
    id: 6,
    nom_rest: 'Dominos Pizza',
    img: imagen6,
    desc: '',
    url: ''
  }
]

function Cards() {
  return (
    <div className="container d-flex justify-content-center aling-items-center h-100">
      <div className="row">
        {
          resturantes.map(resturante => (
            <div className="col-md-4" key={resturante.id}>
              <Card title={resturante.nom_rest} imageSource={resturante.img} descripcion={resturante.desc}/>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Cards