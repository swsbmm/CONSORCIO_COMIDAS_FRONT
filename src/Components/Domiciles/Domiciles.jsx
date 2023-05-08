import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import "./Domiciles.css";
import { NavegationMenu } from "./NavigationMenu/NavigationMenu";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export function Domiciles() {
  
  const notifications = () =>{
    toast.success("Bienvenido a productos de Maria Jose Parrilla");
    // toast("Bienvenido a productos de Maria Jose Parrilla");
  }

  useEffect(() => {
    notifications()
  }, [])
  
  
  
  return (
    <div className="containerDomiciles">
      <div>
        <ToastContainer />
      </div>
      <Outlet />
      <section className="domicilesMenu">
        <div className="navDomiciles">
          <NavegationMenu />
        </div>
      </section>
    </div>
  );
}
