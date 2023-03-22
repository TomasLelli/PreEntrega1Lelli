import React from 'react'

//CSS
import './titulo.css'

function ItemListContainer(props) {

  return (
    <div className='titulo'>
        <h1 className='titulo'>{props.greeting}</h1>
    </div>
  )
}

export default ItemListContainer