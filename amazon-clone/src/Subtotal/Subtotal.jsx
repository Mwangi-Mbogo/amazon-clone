
import React from "react";
import {useNavigate} from "react-router-dom";
import './Subtotal.css'
import {NumericFormat} from 'react-number-format';
import { useStateValue } from '../StateProvider/StateProvider';
import { getCartTotal } from '../Reducer/Reducer';

function Subtotal() {
  const [{cart}, dispatch] = useStateValue();
  const navigate = useNavigate();

  return (
    <div className='subtotal'>
      <NumericFormat
         renderText={(value) =>(
          <>
           <p>
             Subtotal({cart.length} items):
             <strong>{value}</strong>
           </p>
           <small className="subtotal__gift">
             <input type='checkbox'/>
             This order contains a gift
           </small>
          </>
         )}
         decimalScale={2}
         value={getCartTotal(cart)}
         displayType='text'
         thousandSeparator={true}
         prefix='$'
      />
      <button onClick={() => {
          navigate("/checkout");
        }}>
          Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;