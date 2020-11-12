import React from 'react';
import './CartSummary.css';

function CartSummary({ itemAmount, itemTotalPrice, deliveryPrice, totalPrice }) {
  return (
    <div className='cart__summary'>
      <div className='summary'>
        <div className='summary__items'>
          <p>Prekes ({ itemAmount })</p>
          <p>£{Number(itemTotalPrice).toFixed(2)}</p>
        </div>
        
        <div className='summary__delivery'>
          <p>Pristatymas</p>
          <p>£{Number(deliveryPrice).toFixed(2)}</p>
        </div>

        <hr />

        <div className='summary__total'>
          <p>Viso:</p>
          <p>£{Number(totalPrice).toFixed(2)}</p>
        </div>
      </div>
    </div>
  )
}

export default CartSummary
