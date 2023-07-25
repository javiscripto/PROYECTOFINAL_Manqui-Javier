import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { filtrarId } from "../../asyncMock/asyncMock";

export const ItemDetail=()=>{
    const {id}=useParams();
    const [producto, setProducto]=useState({})


    useEffect(()=>{
        setProducto(filtrarId(id))
    },[id])


    
    return(
        <div className=" card card-detail">
                <img src={producto.imagen} alt="" />
                <h3>{producto.nombre}</h3>
                <p>precio:${producto.precio} CLP</p>
                <div className="card-acciones">
                <button >+</button>
                <button >-</button>
            </div>
            <button >agregar al carrito</button>

        </div>
    )
    
}