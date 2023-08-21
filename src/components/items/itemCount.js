import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../cartContext/context";

export const ItemCount = ({ producto }) => {
  const [cantidad, setCantidad] = useState(0);

  const {carrito, agregarPCarrito } = useContext(CartContext);


useEffect(()=>{
  setCantidad(0)
}
,[carrito])

  

  const handlerSumar = () => {
    setCantidad(cantidad + 1);
  };

  const handlerRestar = () => {
    if (cantidad > 0) {
      setCantidad(cantidad - 1);
    }
  };

 

  return (
    <div className="itemcount">
      <div className="handlers">
        <button className="handler-item" onClick={handlerSumar}>+</button>
        <p>{cantidad}</p>
        <button className="handler-item" onClick={handlerRestar}>-</button>
      </div>
      <button className="handler-item" onClick={()=>{agregarPCarrito(producto,cantidad)}}>agregar al carrito</button>
    </div>
  );
};
