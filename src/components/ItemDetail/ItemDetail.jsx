import { Link } from "react-router-dom";
import './ItemDetail.css'

function ItemDetail (props) {

    return (
        <div className="m-5">
            <h2 align='center' className="mb-5">Detalle de Producto</h2>
            <div className="row" key={props.busqueda.id}>
                <div className="col-4">
                    <img src={props.busqueda.thumbnail} className="imgProd" alt="producto" />
                </div>
                <div className="col-6">
                    <h3>{props.busqueda.title}</h3>
                    <p>
                        Precio: ${props.busqueda.price}
                    </p>
                    <Link className="btn btn-dark m-5" to='/carro'>Terminar Compra</Link>
                    <Link className="btn btn-dark m-5" to='/'>Volver</Link>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;