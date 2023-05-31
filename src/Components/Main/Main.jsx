import React from "react";
import "./Main.css";

import { Outlet } from "react-router-dom";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";

export function Main() {
  const item = localStorage.getItem("carro");
  if (item == null){
    localStorage.setItem('carro', "{}");
  }
  
  return (
    <div>
    <div className="container">
      <Header />
      <Outlet />
    </div>
    <Footer />
    </div>
  );
}
