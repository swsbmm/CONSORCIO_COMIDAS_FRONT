import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./NavigationMenu.css";
import { ButtonCard } from "../ProductCategories/Defoult/ButtonsCard/ButtonCard";

const Producto = ({ tipo, id }) => {
  const amount = 0;

  let [productos, setProductos] = useState([]);
  let [categoria, setCategoria] = useState([]);

  const reqApi = async () => {
    const api = await fetch(`https://api.heflox.com/products/${id}`);
    const rest = await api.json();
    setProductos(rest);
  };

  useEffect(() => {
    reqApi();
  }, []);

  useEffect(() => {
    filtarProductos();
  }, [productos]);

  function filtarProductos() {
    const t = productos.filter((producto) => producto.tipo === tipo);
    setCategoria(t);
  }

  return (
    <>
      <div className="Tarjetas-Productos">
        {categoria.map((categoria) => (
          <div className="Tarjeta" key={categoria.id}>
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={categoria.url} />
              <Card.Body>
                <Card.Title>{categoria.nombre}</Card.Title>
                <Card.Text>{categoria.descripcion}</Card.Text>
              </Card.Body>
              <Card.Body>
                <div className="productButtons">
                  <ButtonCard
                    key={`buttonProduct${categoria.id}`}
                    amount={amount}
                    id={categoria.id}
                  />
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
};
export default Producto;
