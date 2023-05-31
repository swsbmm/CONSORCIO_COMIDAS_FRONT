import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export function NavBar() {
  const [cart, setCart] = useState(0);

  useEffect(() => {
      const interval = setInterval(() => {
      const existingValue = localStorage.getItem("carro")
      const existingObject = JSON.parse(existingValue);

      // Paso 2: Obtiene los valores del objeto
      const values = Object.values(existingObject);

      // Paso 3: Suma los valores del arreglo
      setCart(values.reduce((accumulator, currentValue) => accumulator + currentValue, 0));

    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [setCart]);

  return (
    <nav className="main-menu">
      <div className="scrollbar" id="style-1">
        <ul>
          <li>
            <Link to="/">
              <i className="fa fa-home "></i>
              <span className="nav-text">Home</span>
            </Link>
          </li>

          <li>
            <Link to="/restaurantes">
              <i className="fa fa-cutlery "></i>
              <span className="nav-text">Restaurantes</span>
            </Link>
          </li>
          <li>
            <Link to="/Producto">
              <i className="fa fa-burger"></i>
              <span className="nav-text">Productos</span>
            </Link>
          </li>

          <li>
            <Link
              to="/domiciles/shopping_card"
              style={cart > 0 ? { backgroundColor: "red" } : null}
            >
              <i className="fa fa-shopping-cart"></i>
              <span className="nav-text">({cart})</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
