import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './NavigationMenu.css'

const entradas = [
    {
        id: 1,
        nombre: 'empanadas'
    },
    {
        id: 2,
        nombre: 'ensalada'
    },
    {
        id: 3,
        nombre: 'sopa'
    },
    {
        id: 4,
        nombre: 'pan'
    }

]

const Producto = (tipo, id) => {


    // let [productos, setProductos] = useState([]);

    // async function fetchProductos() {
    //     axios
    //         .get(`http://localhost:5000/verProductos/${id}/${tipo}`)
    //         .then((response) => {
    //             setProductos(response.data);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         })
    // }

    // useEffect(() => {
    //     fetchProductos();
    // }, []);

    return (
        <>
        <div className="Tarjetas-Productos">
            {
                entradas.map(entrada => (
                    <div className="Tarjeta">
                    <Card style={{ width: '100%' }}>
                        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                    </div>
                ))
            }
        </div>
        </>
    )
}
export default Producto;