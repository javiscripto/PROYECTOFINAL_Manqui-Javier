import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { filtrarId } from "../asyncMock/asyncMock";

export const ItemDetail=()=>{
    const {id}=useParams();
    const [producto, setProducto]=useState({})


    useEffect(()=>{
        setProducto(filtrarId(id))
    },[id])


    
    return(
        <div>
                <h3>{producto.nombre}</h3>
                <p>precio:${producto.precio} CLP</p>

        </div>
    )
    
}