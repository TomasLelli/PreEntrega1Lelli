import React from "react";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

//CSS
import "./titulo.css";

function ItemListContainer() {

  let busquedaUrl
  
  const { id } = useParams();
  
  if(!id){
    busquedaUrl = 'mates'
  }else{
    busquedaUrl = id
  }

 const api = `https://api.mercadolibre.com/sites/MLA/search?q=${busquedaUrl}`;

 const [busqueda, setBusqueda] = useState([]);

 useEffect(() => {
  fetch(api)
  .then(resp => resp.json())
  .then(resp => {
    const datosBusqueda = resp.results;
    setBusqueda(datosBusqueda);
   })
   .catch((err) => console.log(err));
 }, [id]);

 console.log(busqueda);

 return (
    <ItemList busqueda={ busqueda }/>
 )
}

export default ItemListContainer;
