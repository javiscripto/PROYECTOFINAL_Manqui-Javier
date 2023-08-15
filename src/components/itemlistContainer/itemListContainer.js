
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "../items/itemlist";
import { Loader } from "../../utils/loader";
import { collection, getDocs, query, where } from "firebase/firestore";
import { DBproductos } from "../../firebase/config";

export function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const {categoria}=useParams();

  useEffect(() => {
    setTimeout(() => {
      const referencia = collection(DBproductos, "productos");
      const q= categoria? query(referencia,where("categoria","==",categoria)): referencia;





      getDocs(q)
        .then((resp) => {
          setProductos(
            resp.docs.map((prod) => {
              return { ...prod.data(), id: prod.id };
            })
          );
        })
        .finally(() => setCargando(false)); 
    }, 500);
  }, [categoria]);

  

  return (
    <>
      {cargando ? (
        <div id="contenedor">
          <Loader />
          <p>cargando...</p>
        </div>
      ) : (
        <ItemList productos={productos}/>
      )}
    </>
  );
}
