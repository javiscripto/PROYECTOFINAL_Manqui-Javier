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
    <div className=" card card-detail">
      <img src={producto.imagen} alt="" />
      <h3>{producto.nombre}</h3>
      <p>precio:${producto.precio} CLP</p>
      <div className="card-acciones">
        <ItemCount producto={producto}/>
      </div>
     
    </div>
  );
};
