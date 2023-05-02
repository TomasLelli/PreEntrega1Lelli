import { Link } from "react-router-dom";
import "./ItemDetail.css";
import { useState } from "react";
import { useCartContext } from "../../context/CartProvider";
import ItemCount from "../ItemCount/ItemCount";

function ItemDetail(props) {
 const [irACarro, setIrACarro] = useState(false);

 const { addProd } = useCartContext();

 const onAdd = (cant) => {
  setIrACarro(true);
  addProd(props.busqueda, cant);
  swal("Producto agregado al carro");
 };

 return (
  <div className="m-5">
   <h2 align="center" className="mb-5">
    Detalle de Producto
   </h2>
   <div className="row" key={props.busqueda.id}>
    <div className="col-4">
     <img src={props.busqueda.thumbnail} className="imgProd" alt="producto" />
    </div>
    <div className="col-6">
     <h3>{props.busqueda.title}</h3>
     <p>Precio: ${props.busqueda.price}</p>
     {irACarro ? (
      <Link className="btn btn-dark m-5" to="/carro">
       Terminar Compra
      </Link>
     ) : (
      <ItemCount
       initial={1}
       stock={props.busqueda.available_quantity}
       onAdd={onAdd}
      />
     )}
     <Link className="btn btn-dark m-5" to="/">
      Volver
     </Link>
    </div>
   </div>
  </div>
 );
}

export default ItemDetail;
