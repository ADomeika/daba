import React from 'react'
import Trash from '../svgs/Trash';
import './Item.css';

function Item({ item }) {
  const spray = item.spray ? 'Su purkstuku' : 'Be purkstuko';

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
          <p className='item__text'>Kaina: £{item.price}</p>
          
          <div className='information__actions'>
            <div className='information__quantity'>
              <button>-</button>
              <p>{item.quantity}</p>
              <button>+</button>
            </div>
            <button className='information__delete'>
              <Trash width='25' height='25' />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item
