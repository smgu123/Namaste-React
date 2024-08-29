import React from 'react'
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';
function CheckoutProduct(props) {
    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: props.id
            });
            }
  return (
    <div className="checkoutProduct">
      <img src={props.image} alt="" className="checkoutProduct__image" />
      <div className="product__info">
        <p className="checkoutProduct__title">{props.title}</p>
        <p className="checkoutProduct__price">{props.price}</p>
        <div className="checkoutProduct__Rating">
          
        </div>
        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct
