import React, { useContext } from 'react'
import "./Cartitem.css"
import { ShopContext } from '../../context/ShopContext'

const Cartitem = () => {
    const {all_product,cartItems,removeFromCart} = useContext(ShopContext)
  return (
    <div className='cartitem'>
        <div className='cartitem-format-main'>
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr/>
        <div>
            <div className='cartitem-format'>
                <img src='' alt='' className='carticon-product-icon'/>
                <p></p>
                <p></p>
                <button className='cartitem-quantity'></button>
                <p></p>
                <img src='' alt=''/>
            </div>
        </div>
      
    </div>
  )
}

export default Cartitem
