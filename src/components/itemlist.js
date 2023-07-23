

import { useParams } from "react-router-dom"
import { filtrarCategoria } from "../asyncMock/asyncMock"
import { Item } from "./item";


export const ItemList=()=>{
    const {categoria}=useParams();
    const productos= filtrarCategoria(categoria);
  
    return(
        <>
        <h1>{categoria}</h1>
        {
            productos.map(prod=>{   // por cada producto se renderiza un componente <Item/>
                return <Item key={prod.id} nombre={prod.nombre} precio={prod.precio} id={prod.id} categoria={prod.categoria}  />
            })
        }
      
        </>
    )
}