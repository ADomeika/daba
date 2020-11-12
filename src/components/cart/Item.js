import React from 'react'
import { connect } from 'react-redux';
import './Item.css';

import Trash from '../svgs/Trash';
import { addQuantity, subtractQuantity, removeFromCart } from '../../actions/CartActions';

function Item({ item, onAddQuantity, onSubtractQuantity, onRemoveFromCart }) {
  const spray = item.spray ? 'Su purkstuku' : 'Be purkstuko';

  const addQuantity = () => {
    onAddQuantity({ id: item.id, spray: item.spray })
  }

  const subtractQuantity = () => {
    onSubtractQuantity({ id: item.id, spray: item.spray })
  }

  const removeFromCart = () => {
    onRemoveFromCart({ id: item.id, spray: item.spray })
  }

  return (
    <div className='item'>
      <div className='item__image'>
        <img src={item.image} alt={item.title} />
      </div>

      <div className='item__information'>
        <p className='item__text'>{item.title}</p>
        
        <hr className='item__separator' />

        <div className='information'>
          <p className='item__text item__spray'>{spray}</p>
          <p className='item__text'>Kaina: £{item.price.toFixed(2)}</p>
          
          <div className='information__actions'>
            <div className='information__quantity'>
              <button onClick={subtractQuantity}>-</button>
              <p>{item.quantity}</p>
              <button onClick={addQuantity}>+</button>
            </div>
            <button className='information__delete' onClick={removeFromCart}>
              <Trash width='25' height='25' />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  onAddQuantity: (details) => dispatch(addQuantity(details)),
  onSubtractQuantity: (details) => dispatch(subtractQuantity(details)),
  onRemoveFromCart: (details) => dispatch(removeFromCart(details)),
});

export default connect(null, mapDispatchToProps)(Item);
