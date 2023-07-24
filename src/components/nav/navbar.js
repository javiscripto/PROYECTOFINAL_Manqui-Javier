import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="nav-list">
        <NavLink className="nav-item" to="/">Inicio</NavLink>
        <NavLink className="nav-item" to="/guitarras">Guitarras</NavLink>
        <NavLink className="nav-item" to="/amplificadores">Amplificadores</NavLink>
        <NavLink className="nav-item" to="/pedales">Pedales</NavLink>
      </div>
      <div className="nav-cart">
       
      </div>
    </div>
  );
};
export default Navbar