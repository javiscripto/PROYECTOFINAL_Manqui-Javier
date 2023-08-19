import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DBproductos } from "../../firebase/config";
import { doc, getDoc } from "firebase/firestore";
import { ItemCount } from "./itemCount";

export const ItemDetail = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState({});

  useEffect(() => {
    const docref = doc(DBproductos, "productos", id);

    getDoc(docref).then((resp) => {
      setProducto({ ...resp.data() });
    });
  }, [id]);
  


  return (
    <div className=" card-detail">
      <div >
      <img className="card-img" src={producto.imagen} alt="" />
      </div>


      <div className="card-text">
      
      <h3>{producto.nombre}</h3>
      <p>{producto.descripcion}</p>
      <p>precio:${producto.precio} CLP</p>
      </div>

      <div className="card-acciones">
        <ItemCount producto={producto}/>
      </div>
     
    </div>
  );
};
