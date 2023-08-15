import { useContext } from "react";
import { CartContext } from "../../cartContext/context";




export const Carrito=()=>{

    const { carrito} = useContext(CartContext);



    return (
        <>
          {carrito ? (
            carrito.map((prod) => (
              <div key={prod.id}>
                <p>{prod.nombre}</p>
                <p>${prod.precio}</p>
                <p>{prod.cantidad}</p>
              </div>
            ))
          ) : (
            <h3>el carrito esta vacío</h3>
          )}
        </>
      );
    };