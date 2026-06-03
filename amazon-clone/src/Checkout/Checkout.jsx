
import React from 'react';
import "./Checkout.css";
import Subtotal from '../Subtotal/Subtotal';
import { useStateValue } from '../StateProvider/StateProvider';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';

function Checkout() {
  const [{cart, user}, dispatch] = useStateValue();
  <p>Number of products: {cart.length}</p>

  return (
    <div className='checkout'>
      <div className="checkout__left">
        <img src="https://m.media-amazon.com/images/I/619geyiQI5L._SX3000_.jpg" alt="" className="checkout__ad" />

        <div>
          <h3>Hello, {user ? user.email : "Guest"}</h3>
          <h2 className="checkout__title">
            Your Shopping Cart
          </h2>

          <p>Number of products: {cart.length}</p>

          {cart.map(item=> (
            <CheckoutProduct
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal/>
      </div>
    </div>
  )
}

export default Checkout;