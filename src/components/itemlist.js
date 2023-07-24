import { useParams } from "react-router-dom";
import { filtrarCategoria } from "../asyncMock/asyncMock";
import { Item } from "./item";

export const ItemList = () => {
  const { categoria } = useParams();
  const productos = filtrarCategoria(categoria);

  return (
    <div className="container-fluid ">
      <h1>{categoria}</h1>

      <div className="container">
        {productos.map((prod) => {
          
          return (
            <Item
              key={prod.id}
              nombre={prod.nombre}
              precio={prod.precio}
              id={prod.id}
              categoria={prod.categoria}
              img={prod.imagen}
            />
          );
        })}
      </div>
    </div>
  );
};
