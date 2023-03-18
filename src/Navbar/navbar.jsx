import './navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg mb-5">
    <div className="container-xxl">
      <a className="navbar-brand" href="/">
        <span>Cefolum</span>
      </a>
  
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className='nav-link' to='/' >Accueil</Link>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Produits
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <a className="dropdown-item" href="/ProductDes">
                  Tableau Designe
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/ProductCui">
                  Tableau Cuisine
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/ProductCha">
                  Tableau Chambre
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Contact">
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link btn btn-primary text-white" href="/Login">
              Login
            </a>
          </li>
          <li className="nav-item d-flex align-items-center">
            <a id="icon"><FontAwesomeIcon icon={faShoppingCart}/></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  
  );
}

export default NavBar;
