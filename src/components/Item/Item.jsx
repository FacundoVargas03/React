import { Link } from "react-router-dom";

export const Item = ({ id, name, img, description }) => {
  return (
    <div className="d-flex flex-column col-2 justify-content-center align-content-center border border-info p-1 m-1">
      <div className="col">
        <div className="card h-100">
          <img className="card-img-top rounded mx-auto d-inline-block" src={img} alt="" />
          <div className="card-body">
            <div className="card-body h-75 d-inline-block">
            <h5 className="card-title">{name}</h5>
            <p className="card-text"> {description} </p>
            </div>
            <div className="d-grid gap-2 col-6 mx-auto h-100">
              <Link to={`/item/${id}`}>
                <button className="btn btn-info border border-black">Detalles del producto</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
