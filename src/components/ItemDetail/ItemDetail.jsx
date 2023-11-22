import { ItemCount } from "../ItemCount/ItemCount";
import  swal  from "sweetalert";

export const ItemDetail = ({ description, img, price, stock }) => {
  const onAdd = (items) => {
    swal (`Se agregaron ${items} articulo al carrito`);
  };

  return (
    <div className="border m-4 p-3">
      <div className="">
        <div className="card">
          <img className="card-img-top w-50" src={img} alt="" />
          <div class="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text"> {description} </p>
            <p className="card-text">Precio: {price} </p>
            <ItemCount stock={stock} onAdd={onAdd} />
          </div>
        </div>
      </div>
    </div>
  );
};
