import React from "react";
import { Outlet } from "react-router-dom";
import "./Restaurant.css";
import { NavegationMenu } from "./NavigationMenu/NavigationMenu";
import Cards from "../Cards/Cards";

export function Restaurants() {
  return (
    <div className=" d-flex justufy-content-center">
      <Outlet />
      <Cards />
    </div>
  );
}
