import React from 'react';
import './CartSummary.css';

function CartSummary({ itemAmount, itemTotalPrice, deliveryPrice, totalPrice }) {
  return (
    <div className='cart__summary'>
      <div className='summary__items'>
        <p>Prekes ({ itemAmount })</p>
        <p>£{itemTotalPrice}</p>
      </div>
      
      <div className='summary__delivery'>
        <p>Pristatymas</p>
        <p>£{deliveryPrice}</p>
      </div>

      <hr />

      <div className='summary__total'>
        <p>Viso:</p>
        <p>£{totalPrice}</p>
      </div>
    </div>
  )
}

export default CartSummary
