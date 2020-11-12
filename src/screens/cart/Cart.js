import React from 'react'
import { connect } from 'react-redux';
import './Cart.css';

import AppButton from '../../components/ui/AppButton'
import CartSummary from '../../components/cart/CartSummary';
import CartItems from '../../components/cart/CartItems';
import { Link } from 'react-router-dom';

function Cart({ items, total }) {
  return (
    <main className='cart'>
      <h1 className='cart__title'>Krepselis</h1>
      {items.length > 0
      ? (
        <>
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
        </>
      )
      : (
        <>
          <p className='cart__empty'>Jusu krepselis tuscias</p>
          <Link to='/produktai' className='cart__link-to-shop'>
            <AppButton>
              Papildyti
            </AppButton>
          </Link>
        </>
      )}
    </main>
  )
}

const mapStateToProps = ({ cartReducer }) => ({
  items: cartReducer.items,
  total: cartReducer.total,
});

export default connect(mapStateToProps)(Cart)
