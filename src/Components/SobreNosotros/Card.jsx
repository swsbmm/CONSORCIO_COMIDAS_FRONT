import React from 'react';
import './Card.css';
import foto from './v2.jpg';

function Card({ title}) {
  return (
    <div class = "card-nosotros">
      <div class="card-front">
        <img 
          src={foto}
          alt='foto' 
        />
        <h2>
          {title}
        </h2>
      </div>
    </div>
  );
}

export default Card;
