import React, { useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import "./Domiciles.css";
import { NavegationMenu } from "./NavigationMenu/NavigationMenu";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export function Domiciles(id) {

  // let {id} = useParams();
  
  const notifications = () =>{
    toast.success("Bienvenido a productos de Maria Jose Parrilla");
    // toast("Bienvenido a productos de Maria Jose Parrilla");
  }

  useEffect(() => {
    notifications()
  }, [])
  
  
  
  return (
    
      <section className="domicilesMenu">
        <div className="navDomiciles">
          <NavegationMenu id={id} />
        </div>
      </section>
    
  );
}
