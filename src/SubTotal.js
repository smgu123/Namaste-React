import React from 'react';
import { NumericFormat } from "react-number-format";
import './SubTotal.css';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import reducer from './reducer';

function SubTotal() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <NumericFormat
        className="subtotal__price"
        renderText={(value) => (
          <>
            <p>
              Subtotal of {basket.length} items :
              <strong>${value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
      />
      <button>Proceed to checkout</button>
    </div>
  );
}

export default SubTotal
