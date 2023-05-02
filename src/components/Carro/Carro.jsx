import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartProvider";
import ItemCart from "../ItemCart/ItemCart";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useState } from "react";
import swal from "sweetalert";

function Carro() {
 const [nombre, setNombre] = useState("");

 const [email, setEmail] = useState("");

 const { cart, totalPrice, clearCart } = useCartContext();

 const orden = {
  buyer: { name: nombre, email: email },
  items: cart.map((prod) => ({
   id: prod.id,
   producto: prod.title,
   precio: prod.price,
   cantidad: prod.cantidad,
  })),
  total: totalPrice(),
 };

 const guardarCompra = () => {
  const db = getFirestore();

  const colletionCompras = collection(db, "compras");

  addDoc(colletionCompras, orden).then(({ id }) => {
   console.log(id);
  });

  clearCart();
  swal("Compra finalizada con exito");
 };
 if (cart.length === 0) {
  return (
   <>
    <h2>No hay productos en el carrito</h2>
    <Link className="btn btn-dark m-5" to="/">
     Ir a ver Mates
    </Link>
   </>
  );
 }

 return (
  <div align="center">
   <ItemCart mates={cart} />

   <div class="col-lg-6" align="center">
    <div class="d-flex justify-content-between align-items-center mb-3">
     <h3 class="fw-normal mb-0 text-black">Datos personales</h3>
    </div>
    <form class="mb-3">
     <div class="form-outline mb-2">
      <label class="form-label" for="typeText">
       Nombre
      </label>
      <input
       type="text"
       id="typeText"
       class="form-control form-control-lg"
       placeholder="Ingresar nombre"
       onChange={(e) => {
        setNombre(e.target.value);
       }}
      />
     </div>

     <div class="form-outline mb-2">
      <label class="form-label" for="typeName">
       Email
      </label>
      <input
       type="text"
       id="typeName"
       class="form-control form-control-lg"
       placeholder="Ingresar email"
       onChange={(e) => {
        setEmail(e.target.value);
       }}
      />
     </div>
     <p>
      Total de la compra: <b>${totalPrice()}</b>
     </p>
    </form>
    <div className="m-5">
     <Link to={"/home"}>
      <button className="btn btn-success m-2" onClick={guardarCompra}>
       Finalizar compra
      </button>
     </Link>

     <Link className="btn btn-danger m-2" to="/">
      Volver a productos
     </Link>
    </div>
   </div>
  </div>
 );
}

export default Carro;
