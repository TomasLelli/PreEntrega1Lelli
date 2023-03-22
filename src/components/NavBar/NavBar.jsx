import React from "react";
import CartWidget from "../CartWidget/CartWidget";

//CSS
import './lista.css'

function NavBar() {
  return (
    <div>
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <h1 class="navbar-brand">MateandoVoy</h1>
          <ul className="lista">
            <li><a class="dropdown-item" href="#">Mates</a></li>
            <li><a class="dropdown-item" href="#">Bombillas</a></li>
            <li><a class="dropdown-item" href="#">Termos</a></li>
            <CartWidget />
          </ul>
          <form class="d-flex" role="search">
            <input className="form-control m-2" placeholder="Mates, Bombillas, Termos" />
            <button class="btn btn-outline-success m-2" type="submit">
              Buscar
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
