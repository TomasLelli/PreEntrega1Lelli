import React from "react";
import CartWidget from "../CartWidget/CartWidget";

//CSS
import './lista.css'
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <h1 className="navbar-brand"><Link classNameName="dropdown-item" to='/'>Home</Link></h1>
          <ul classNameName="lista">
            <li><Link classNameName="dropdown-item" to='/category/mates'>Mates</Link></li>
            <li><Link classNameName="dropdown-item" to='/category/bombillas'>Bombillas</Link></li>
            <li><Link classNameName="dropdown-item" to='/category/termos'>Termos</Link></li>
            <CartWidget />
          </ul>
          <form className="d-flex" role="search">
            <input classNameName="form-control m-2" placeholder="Mates, Bombillas, Termos" />
            <button className="btn btn-outline-success m-2" type="submit">
              Buscar
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
