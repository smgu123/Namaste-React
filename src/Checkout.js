import React from 'react'
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct.js';
import SubTotal from './SubTotal.js';
import { useStateValue } from './StateProvider.js';

function Checkout() {
    const [{basket}, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWK6uZTBEyTONgwZ_lXAc6EJuQqw1tQouXEg&s"
          alt="product_ads"
          className="checkout__ads"
        />
        <div>
          <h2 className="checkout__title">Your shopping basket</h2>
          {basket.map(item => (
            <CheckoutProduct
            key={item.id}   
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout_right">
        <SubTotal />
      </div>
    </div>
  );
}

export default Checkout
