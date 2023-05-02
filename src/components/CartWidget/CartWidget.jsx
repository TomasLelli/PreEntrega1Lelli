import React from "react";
import img from "./img/cart.png";
import { useCartContext } from "../../context/CartProvider";
import { Link } from "react-router-dom";

//CSS
import "./img.css";

function CartWidget() {
 const { totalProd } = useCartContext();
 return (
  <div className="img">
   <Link to='/carro'><img src={img} alt="carro"/></Link>
   <p>{totalProd()}</p>
  </div>
 );
}

export default CartWidget;
