import React from 'react'
import "./Offer.css"
import exclusive_image from "../Assets/exclusive_image.png"

const Offer = () => {
  return (
    <div className='offers'>
      <div className='offers-left'>
        <h1>EXCLUSIVE</h1>
        <h1>Offers For You</h1>
        <p>BEST SELLERS FOR PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div className='offers-right'>
        <img src={exclusive_image} alt=''/>
      </div>
    </div>
  )
}

export default Offer