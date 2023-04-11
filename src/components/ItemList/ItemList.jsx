import { Link } from "react-router-dom";

function ItemList(props) {
  return (
    <>
      <h2 align="center" className="mt-3">
        Listado de Productos
      </h2>

      <div className="row m-5">
        {props.busqueda.map(( oneBusqueda , key) => {
          return (
            <div className="col-3 mt-2" key={key}>
              <div className="card">
                <img
                  src={oneBusqueda.thumbnail}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {oneBusqueda.title.substring(0, 80)}
                  </h5>
                  <p className="card-text">Precio: $
                    {oneBusqueda.price}
                  </p>
                  <Link
                    className="btn btn-dark"
                    to={`/detalle?busquedaID=${oneBusqueda.id}`}
                  >
                    Ver Mas
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ItemList