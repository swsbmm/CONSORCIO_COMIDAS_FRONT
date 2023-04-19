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
{/*         <div className="logoDomiciles">
          <img
            src="https://drive.google.com/uc?export=download&id=1qynz1kaVgJnrVVASKH2eKCslhoTuSBK_"
            alt="logo"
          />
        </div> */}
        <div className="navDomiciles">
          <NavegationMenu />
        </div>
      </section>
    </div>
  );
}
