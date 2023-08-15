import { useContext, useState } from "react";
import { CartContext } from "../../cartContext/context";

export const ItemCount = ({ producto }) => {

    

  const [cantidad, setCantidad] = useState(0);
  const { carrito, setCarrito } = useContext(CartContext);

  const handlerSumar = () => {
    setCantidad(cantidad + 1);
  };
  const handlerRestar = () => {
    if (cantidad > 0) {
      setCantidad(cantidad - 1);
    }
  };
  const handlerAgregar = () => {
    if (cantidad > 0) {
      const nuevoCarrito = [...carrito, producto];
      setCarrito(nuevoCarrito);
      
      setCantidad(0);
    }
  };

  return (
    <div className="itemcount">
      <div className="handlers">
        <button onClick={handlerSumar}>+</button>
        <p>{cantidad}</p>
        <button onClick={handlerRestar}>-</button>
      </div>
      <button onClick={handlerAgregar}>agregar al carrito</button>
    </div>
  );
};
