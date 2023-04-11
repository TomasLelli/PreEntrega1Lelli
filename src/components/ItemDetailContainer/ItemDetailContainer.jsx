import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

function ItemDetailContainer () {

    const [ busqueda, setBusqueda ] = useState([]);

    const query = new URLSearchParams(window.location.search);

    let busquedaID = query.get('busquedaID');

    useEffect(() => {
        fetch(`https://api.mercadolibre.com/items?ids=${busquedaID}`)
        .then(resp => resp.json())
        .then( resp => {
            const celu = resp;
            celu.map( ( oneBusqueda, key ) => { setBusqueda(oneBusqueda.body); } )
        })
        .catch(err => console.log(err))
    }, [busquedaID]);

    return (
        <>
            <ItemDetail busqueda={ busqueda } />
        </>

    )
}

export default ItemDetailContainer;