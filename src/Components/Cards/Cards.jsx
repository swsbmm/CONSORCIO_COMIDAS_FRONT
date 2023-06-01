import React from "react";
import Card from "./Card";
import { useState, useEffect } from "react";

function Cards() {
  let [restaurantes, setRestaurante] = useState([]);

  const reqApi = async () => {
    const api = await fetch("https://api.heflox.com/api/restaurants");
    const rest = await api.json();
    setRestaurante(rest);
    console.log(rest);
  };

  useEffect(() => {
    reqApi();
  }, []);

  return (
    <div className="container d-flex justify-content-center aling-items-center h-100">
      <div className="row">
        {restaurantes.map((resturante) => (
          <div className="col-md-4" key={resturante.id}>
            <Card
              id={resturante.id}
              title={resturante.name}
              imageSource={resturante.image_url}
              descripcion={resturante.speciality}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
