import { useContext } from "react";
import { CartContext } from "../../cartContext/context";

export const Carrito = () => {
  const { carrito, totalCarrito,totalItems } = useContext(CartContext);

  return (
    <div className="container-fluid">
      {carrito.length > 0 ? (
        carrito.map((prod) => (
          <div key={prod.id} className="card">
            <h3>{prod.nombre}</h3>
            <p>cantidad: {prod.cantidad}</p>
            <p>precio unit.:${prod.precio}</p>
            <p>precio total: ${prod.precio * prod.cantidad}</p>
            <div className="img">
              <img src={prod.imagen} className="imagen-cart" alt="imagen del producto" />
            </div>
          </div>
        ))
      ) : (
        <h3>el carrito esta vacío ! </h3>
      )}

      
      <div className="carrito-detalle">
        <h3>DETALLE:</h3>
        <p>Items en el carrito: {totalItems()} ud. </p>
        <p>Precio total: ${totalCarrito()}</p>
      </div>
    </div>
  );
};
