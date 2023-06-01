import React from "react";
import { useState, useEffect } from "react";
import { ButtonCard } from "../ProductCategories/Defoult/ButtonsCard/ButtonCard";
import Card_Productos from "./Card_Productos";

function Productos() {
  const amount = 0;
  let [productos, setProductos] = useState([]);

  const reqApi = async () => {
    const api = await fetch("https://api.heflox.com/api/products/");
    const rest = await api.json();
    setProductos(rest);
    console.log(rest);
  };

  useEffect(() => {
    reqApi();
  }, []);

  return (
    <div className="container  h-100">
      <div className="row">
        {productos.map((producto) => (
          <div className="col-md-4" key={producto.id}>
            <Card_Productos producto={producto} />
            <div></div>
          </div>
        ))}
      </div>
    </div>

    // <div className="container d-flex justify-content-center aling-items-center h-100">
    //   <div className="row">
    //     <Card_Productos productos={productos} />
    //   </div>
    // </div>
  );
}

export default Productos;
