import React from "react";
import CartWidget from "../CartWidget/CartWidget";

//CSS
import "./lista.css";
import { Link } from "react-router-dom";

function NavBar() {
 return (
  <div>
   <nav className="navbar bg-body-tertiary">
    <div className="container-fluid">
     <h1 className="navbar-brand">
      <Link className="dropdown-item" to="/">
       Home
      </Link>
     </h1>
     <div className="d-flex m2">
      <ul className="lista">
       <li>
        <Link className="dropdown-item" to="/category/mates">
         Mates
        </Link>
       </li>
       <li>
        <Link className="dropdown-item" to="/category/bombillas">
         Bombillas
        </Link>
       </li>
       <li>
        <Link className="dropdown-item" to="/category/termos">
         Termos
        </Link>
       </li>
       <CartWidget />
      </ul>
     </div>
    </div>
   </nav>
  </div>
 );
}

export default NavBar;
