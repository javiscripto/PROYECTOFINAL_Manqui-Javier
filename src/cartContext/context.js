import { createContext, useState } from "react";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export const CartContext = createContext();



export const CustomProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarPCarrito = (producto, cantidad) => {
    if (cantidad > 0) {
      let carritoLocal = [...carrito]; // copia parcial
      const productoAgregado = { ...producto, cantidad };//copia del producto y agrego propiedad cantidad

      const itemExistente = carritoLocal.find(
        (p) => p.nombre === productoAgregado.nombre
      );//busca dentro del array carrito un producto(p).nombre cuya propiedad nombre sea igual al nombre de la copia del producto

      if (itemExistente) {
        itemExistente.cantidad = itemExistente.cantidad + cantidad;
        setCarrito(carritoLocal);
        
      } else {
        setCarrito([...carrito, productoAgregado]);
        
      }
      toast(`se ha agregado ${producto.nombre} al carrito`);
    }
  };

  const totalCarrito = () => {
    return carrito.reduce((acc, prod) => {
      return acc + prod.precio * prod.cantidad;
    }, 0);
  };
  const totalItems=()=>{
    return carrito.reduce((acc,prod)=>{
      return acc+prod.cantidad;
    },0)
  }
  const eliminarItem=(producto)=>{
    let carritoLocal=[...carrito];
    let indexItem= carritoLocal.indexOf(producto)
    carritoLocal.splice(indexItem,1)
    setCarrito(carritoLocal)
    
  }

  const vaciarCarrito=()=>{
    setCarrito([])
  }
  return (
    <CartContext.Provider value={{ carrito, agregarPCarrito, totalCarrito, totalItems, eliminarItem, vaciarCarrito}}>
      {children}
      <ToastContainer/>
    </CartContext.Provider>
  );
};
