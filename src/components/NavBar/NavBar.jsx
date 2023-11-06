import styles from "./nav.module.css"
import { CartWidget } from "../CartWidget/CartWidget"
export const NavBar = () =>{
    return (
      <nav className="d-flex bg-info navbar navbar-expand-lg">
      <div className="container-fluid">
          <a className="navbar-brand" href="#">
              <img src="./img/logo-yabal.svg" alt="Logo Yabal" style={{width: "60px"}} />
           </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="d-flex collapse navbar-collapse" id="navbarNav">
              <ul className="p-2 navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                  </li>
                   <li className="nav-item">
                      <a className="nav-link" href="#">Shop</a>
                  </li>
                   <li className="nav-item">
                      <a className="nav-link" href="#">Promos</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="#">Nosotros</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="#">Contacto</a>
                  </li>
                  <li className="nav-item">
                  <CartWidget />
                  </li>
              </ul>
          </div>
      </div>
      
    </nav>
    )
}