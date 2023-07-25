import { NavLink, useParams } from "react-router-dom";

export const Item = (props) => {
  const { categoria } = useParams();

  return (
    <div className="card">
      <img class="card-img-top" src={props.img} alt="" />

      <div className="card-body">
        <h5>{props.nombre}</h5>
        <p>precio:${props.precio}</p>

        <NavLink className="detail-link" to={`/${categoria}/${props.id}`}>ver detalles</NavLink>
      </div>
    </div>
  );
};
