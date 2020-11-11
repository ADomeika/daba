import React from 'react'
import './Cart.css';
import AppButton from '../../components/ui/AppButton'
import CartSummary from '../../components/cart/CartSummary';
import CartItems from '../../components/cart/CartItems';

const DATA = [
  {
    id: 3,
    title: 'Metu hidrolatas',
    image: 'https://static.wixstatic.com/media/d7ea37_c28bae3e7b624121ab1bafe495aff1db~mv2_d_3648_2736_s_4_2.png/v1/fill/w_420,h_420,al_c,q_85,usm_0.66_1.00_0.01/d7ea37_c28bae3e7b624121ab1bafe495aff1db~mv2_d_3648_2736_s_4_2.webp',
    price: 6.99,
    spray: true,
    quantity: 1
  },
  {
    id: 4,
    title: 'Silauoges hidrolatas',
    image: 'https://static.wixstatic.com/media/d7ea37_c28bae3e7b624121ab1bafe495aff1db~mv2_d_3648_2736_s_4_2.png/v1/fill/w_420,h_420,al_c,q_85,usm_0.66_1.00_0.01/d7ea37_c28bae3e7b624121ab1bafe495aff1db~mv2_d_3648_2736_s_4_2.webp',
    price: 6.99,
    spray: false,
    quantity: 1
  }
]

function Cart() {
  return (
    <main className='cart'>
      <h1 className='cart__title'>Krepselis</h1>
      <CartItems
        data={DATA}
      />

      <CartSummary
        itemAmount='2'
        itemTotalPrice='13.99'
        deliveryPrice='2.00'
        totalPrice='15.98'
      />

      <div className='cart__actions'>
        <AppButton>Apmoketi</AppButton>
      </div>
    </main>
  )
}

export default Cart
