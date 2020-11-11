import React, { Fragment } from 'react'
import './CartItems.css'
import Item from './Item'

function CartItems({ data }) {
  return (
    <div className='cart__items'>
      {data.map((item, index) => {
        if (index > 0) {
          return (
            <Fragment key={item.id}>
              <hr />
              <Item item={item} />
            </Fragment>
          )
        }
        return (
          <Item
            key={item.id}
            item={item}
          />
        )
      })}
    </div>
  )
}

export default CartItems
