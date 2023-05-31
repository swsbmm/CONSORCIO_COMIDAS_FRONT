import React, { useState } from "react";
import "./ShoppingCart.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";

export function ShoppingCart() {
  
  const info = (JSON.parse(localStorage.getItem("carro")))

  return (
    <div className="sep_nav">
      <table className="table">
        <thead>
        <tr>
          <th scope="col">Producto</th>
          <th scope="col">Cantidad</th>
        </tr>
      </thead>
        <tbody>
        {Object.entries(info).map(([producto, cantidad]) => (
            <tr key={producto}>
              <td>{producto}</td>
              <td>{cantidad}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
