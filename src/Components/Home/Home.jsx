import React, { useEffect, useState } from "react";
import "./Home.css";
import { carouselImage } from "./CarouselImage";

export function Home() {
  const [image, setImage] = useState(0);

  const onRight = () => {
    if (image < carouselImage.length - 1) {
      setImage(image + 1);
    } else {
      setImage(0);
    }
  };

  const timer = () => { setTimeout(onRight, 5000)};

  useEffect(()=>{timer()})

  return (
    <div className="containerHome">
      <section className="socialHome">
        <div className="storyHome">
          <h2>Food Consortium</h2>
          <p>
            Bienvenido a nuestro Gran Negocio Familiar, Disfruta de las mejores
            Pizzas y Comidas Rápidas del Sector de San Francisco - La Acacia,
            con más de 15 años de experiencia complaciendo a nuestra distinguida
            clientela, te esperamos con los brazos abiertos para brindarte una
            experiencia gastronómica de primera, ya sea en nuestras
            instalaciones o enviándote a tu hogar los productos que prefieras,
            hecha les un vistazo en nuestra sección Domicilios y si te antojaste
            de algo no dudes en agregarlo al Carrito de compras para gestionar tu Pedido.
          </p>
        </div>
      </section>
    </div>
  );
}
