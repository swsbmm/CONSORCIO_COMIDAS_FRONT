import React from "react";
import { Link, Outlet } from "react-router-dom";
import { ButtonCard } from "../ProductCategories/Defoult/ButtonsCard/ButtonCard";
function Card_Productos({ producto }) {
  const amount = 0;

  return (
    <div>
      <div className="card text-center" margin="10px" key={producto.id}>
        <div className="Logo">
          <img src={producto.image_url} className="card-img-top" alt="" />
        </div>

        <div className="card-body">
          <h4 className="card-title">{producto.name}</h4>
          <p>{`Tipo: ${producto.type}`}</p>
          <p>{`Precio: \$${producto.price}`}</p>
        </div>

        <div className="productButtons">
          <ButtonCard
            key={`buttonProduct${producto.id}`}
            amount={amount}
            id={producto.id}
            name={producto.name}
            price={producto.price}
          />
        </div>
      </div>
    </div>
  );
}

export default Card_Productos;
