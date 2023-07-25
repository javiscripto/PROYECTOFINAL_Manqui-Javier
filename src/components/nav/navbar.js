import React from "react";
import { NavLink } from "react-router-dom";
import { CartWidget } from "./cartWidget";


const NavBar = () => {
  return (
    <div className="nav-container">
      <div className="nav-list">
        <NavLink className="nav-item" to="/">Inicio</NavLink>
        <NavLink className="nav-item" to="/guitarras">Guitarras</NavLink>
        <NavLink className="nav-item" to="/amplificadores">Amplificadores</NavLink>
        <NavLink className="nav-item" to="/pedales">Pedales</NavLink>
      </div>
      <div className="nav-cart">
      <CartWidget/>
      </div>
      
    </div>
  );
}
export default NavBar