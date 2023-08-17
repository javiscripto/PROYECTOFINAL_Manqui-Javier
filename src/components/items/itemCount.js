import { useContext, useState } from "react";
import { CartContext } from "../../cartContext/context";

export const ItemCount = ({ producto }) => {
  const [cantidad, setCantidad] = useState(0);
  //let [carritoLocal, setLocal] = useState([]);

  const { carrito, setCarrito } = useContext(CartContext);





  ///////////////////// handlers ////////////////////////

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
      let carritoLocal=[...carrito] // copia del carrito del context
      const productoAgregado = { ...producto, cantidad };

      const itemExistente= carritoLocal.find((p=>p.nombre===productoAgregado.nombre)) 

      if(itemExistente){
       itemExistente.cantidad=itemExistente.cantidad+cantidad;
       setCarrito(carritoLocal)
      }else{
        setCarrito([...carrito,productoAgregado])
      }

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
