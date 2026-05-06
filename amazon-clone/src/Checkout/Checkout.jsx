import React from 'react';
import "./Checkout.css";
import Subtotal from '../Subtotal/Subtotal';

function Checkout() {
  return (
    <div className='checkout'>
      <div className="checkout__left">
        <img src="https://m.media-amazon.com/images/I/619geyiQI5L._SX3000_.jpg" alt="" className="checkout__ad" />

        <div>
          <h2 className="checkout__title">
            Your Shopping Cart
          </h2>
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal/>
      </div>
    </div>
  )
}

export default Checkout;