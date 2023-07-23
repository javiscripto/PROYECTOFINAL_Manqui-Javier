import React from "react"
import { NavLink } from "react-router-dom"



const Navbar=()=>{

    return(
        <>
            <NavLink to="/">inicio</NavLink>
            <NavLink to="/guitarras">guitarras</NavLink>
            <NavLink to="/amplificadores">amplificadores</NavLink>
            <NavLink to="/pedales">pedales</NavLink>
            
        
        
        </>
    )
}
export default Navbar