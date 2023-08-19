import React from "react";
import { Link, NavLink } from "react-router-dom";
import { CartWidget } from "./cartWidget";


const NavBar = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <h2>GuitarraStore</h2>
      </div>
      <div className="nav-list">
        <NavLink className="nav-item" to="/">Inicio</NavLink>
        <NavLink className="nav-item" to="/guitarras">Guitarras</NavLink>
        <NavLink className="nav-item" to="/amplificadores">Amplificadores</NavLink>
        <NavLink className="nav-item" to="/pedales">Pedales</NavLink>
      </div>
      <div className="nav-cart">
      <Link className="nav-item" to="/carrito">
      <CartWidget/>
      </Link>
      
      </div>
      
    </div>
  );
}
export default NavBar