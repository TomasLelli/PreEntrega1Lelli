import React from 'react'
import img from './img/cart.png'

//CSS
import './img.css'

function CartWidget() {
  return (
    <div className='img'>
        <img src={img} />
        <p>1</p>
    </div>
  )
}

export default CartWidget