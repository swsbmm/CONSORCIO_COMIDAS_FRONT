import React from 'react'
import Card from './Card'
import imagen from '../../Assets/img/icon.png'

const cards = [
  {
    id: 1,
    nom_rest: 'Maria Jose Parrilla',
    img: imagen,
    desc: '',
    url: ''
  },
  {
    id: 2,
    nom_rest: 'KFC',
    img: imagen,
    desc: '',
    url: ''
  },
  {
    id: 3,
    nom_rest: 'Burger King',
    img: imagen,
    desc: '',
    url: ''
  },
  {
    id: 4,
    nom_rest: "Jeno's Pizza",
    img: imagen,
    desc: '',
    url: ''
  },
  {
    id: 5,
    nom_rest: 'El corral',
    img: imagen,
    desc: '',
    url: ''
  },
  {
    id: 6,
    nom_rest: 'Dominos Pizza',
    img: imagen,
    desc: '',
    url: ''
  }
]

function Cards() {
  return (
    <div className="container d-flex justify-content-center aling-items-center h-100">
      <div class="row">
        {
          cards.map(card => (
            <div className="col-md-4" key={card.id}>
              <Card title={card.nom_rest} imageSource={card.img} descripcion={card.url}/>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Cards