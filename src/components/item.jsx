import { NavLink, useParams} from "react-router-dom"





export const Item=(props)=>{
   
   const {categoria}=useParams();
    
    return(
        <div>
            <h5>{props.nombre}</h5>
            <p>precio:${props.precio}</p>
            <p>id {props.id}</p>
            <NavLink to={`/${categoria}/${props.id}`}>ver detalles</NavLink>


        </div>
    )
}