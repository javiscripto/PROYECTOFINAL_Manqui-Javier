import { useParams } from "react-router-dom";
import { Item } from "./item";

export const ItemList = ({ productos }) => {
  const { categoria } = useParams();

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
