import React from 'react'
import { connect } from 'react-redux';
import './Cart.css';

import AppButton from '../../components/ui/AppButton'
import CartSummary from '../../components/cart/CartSummary';
import CartItems from '../../components/cart/CartItems';

function Cart({ items, total }) {
  return (
    <main className='cart'>
      <h1 className='cart__title'>Krepselis</h1>
      <CartItems
        data={items}
      />

      <CartSummary
        itemAmount={items.length}
        itemTotalPrice={total}
        deliveryPrice='2.00'
        totalPrice={total + 2.00}
      />

      <div className='cart__actions'>
        <AppButton>Apmoketi</AppButton>
      </div>
    </main>
  )
}

const mapStateToProps = ({ cartReducer }) => ({
  items: cartReducer.items,
  total: cartReducer.total,
});

export default connect(mapStateToProps)(Cart)
