import React from 'react'
import "./Product.css";
import { useStateValue } from './StateProvider';

function Product(props) {

    const [state, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: props.id,
                title: props.title,
                price: props.price,
                rating: props.rating,
                image: props.image
                }
                });
                };

  return (
    <div>
      <div className="product">
        <div className="product_info">
          <p>{props.title}</p>
          <div className="product__info">{props.price}</div>
          <div className="product__rating">
                {Array(props.rating).fill().map((_, i) => (
                        <p>*</p>
                        ))}
          </div>
        </div>
        <img
          src={props.image}
          alt="product_image"
        />
        <button onClick={addToBasket}>Add to basket</button>
      </div>
    </div>
  );
}

export default Product
