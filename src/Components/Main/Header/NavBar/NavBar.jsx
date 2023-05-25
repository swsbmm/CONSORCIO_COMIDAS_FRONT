import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./NavBar.css";

export function NavBar() {
  const state = useSelector((state) => state);
  const { cart } = state.shopping;

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
              style={cart.length > 0 ? { backgroundColor: "red" } : null}
            >
              <i className="fa fa-shopping-cart"></i>
              <span className="nav-text">({cart.length})</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
