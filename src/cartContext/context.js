import { createContext, useState } from "react";




export const CartContext = createContext()
export const CartProvider=({children})=>{
    const [carrito,setCarrito]=useState([])


    const agregarPCarrito = (producto,cantidad) => {
       if (cantidad > 0) {
         let carritoLocal=[...carrito] // copia del carrito del context
         const productoAgregado = { ...producto, cantidad };
   
         const itemExistente= carritoLocal.find((p=>p.nombre===productoAgregado.nombre)) 
   
         if(itemExistente){
          itemExistente.cantidad=itemExistente.cantidad+cantidad;
          setCarrito(carritoLocal)
         }else{
           setCarrito([...carrito,productoAgregado])
         }
   
        
       }
     };
 
     return( <CartContext.Provider value={{carrito,agregarPCarrito}}>
        {children}
     </CartContext.Provider>)
}