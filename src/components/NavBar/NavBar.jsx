import styles from "./nav.module.css";
import { Link } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";
export const NavBar = () => {
  return (
    <nav className="d-flex bg-info navbar navbar-expand-lg">
      <div className="container-fluid">
        <div className="navbar-brand">
          <Link to="/">
            <img
              src="./img/logo-yabal.svg"
              alt="Logo Yabal"
              style={{ width: "60px" }}
            />
          </Link>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="d-flex collapse navbar-collapse" id="navbarNav">
          <ul className="p-2 navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/">
                <button className="nav-link active" aria-current="page">
                  Inicio
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/category/remeras">
                <button className="nav-link">Remeras</button>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/category/pantalones">
                <button className="nav-link">Pantalones</button>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/category/calzados">
                <button className="nav-link">Calzados</button>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/category/accesorios">
                <button className="nav-link">Accesorios</button>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cart">
                <CartWidget />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
