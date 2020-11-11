import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './Product.css';

import AppButton from '../../components/ui/AppButton';

const DATA = {
  id: 1,
  title: 'Silauoges hidrolatas',
  image: 'https://static.wixstatic.com/media/d7ea37_c28bae3e7b624121ab1bafe495aff1db~mv2_d_3648_2736_s_4_2.png/v1/fill/w_420,h_420,al_c,q_85,usm_0.66_1.00_0.01/d7ea37_c28bae3e7b624121ab1bafe495aff1db~mv2_d_3648_2736_s_4_2.webp',
  price: 6.99,
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula risus at aliquam pharetra. Ut eget ex in urna accumsan placerat sit amet a libero. Pellentesque pretium sed sem a sollicitudin. Sed ornare, ligula et fermentum pharetra, neque ipsum condimentum urna, sed congue lorem neque sed mi. Vivamus fringilla at mauris ut euismod. Fusce tristique venenatis mauris, iaculis tincidunt diam consectetur eu. Cras ac iaculis nunc, eu tempus dolor.

  Proin eu consectetur metus. Ut a lobortis est. Aliquam non tristique nisi. Etiam lobortis facilisis mauris, in rhoncus nibh tincidunt venenatis. Sed et bibendum tortor. Nulla et diam quis velit consectetur egestas. Nullam facilisis faucibus luctus. Etiam sodales at lorem vitae scelerisque.`
}

function Product() {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  console.log(id);

  const changeQuantity = (type) => {
    if (type === 'increase') {
      // TODO: CHECK IF QUANTITY IS AVAILABLE
      setQuantity(quantity + 1)
    } else {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    }
  }

  const addToCart = () => {
    console.log('Add to cart', DATA)
  }

  return (
    <main className='product'>
      <div>
        <img src={DATA.image} alt={DATA.title} className='product__image' />
        <h2 className='product__title'>{DATA.title}</h2>
      </div>

      <div className='additions'>
        <div>
          <input type='radio' name='additions' className='additions-input' id='addition__with-spray' />
          <label htmlFor='addition__with-spray' className='additions-label'>
            <div>
              <img className='additions-image' src={require('../../assets/images/cap-spray.png')} alt='su purkstuku' />
              <p>Su purkstuku</p>
            </div>
          </label>
        </div>

        <div>
          <input type='radio' name='additions' className='additions-input' id='addition__without-spray' defaultChecked />
          <label htmlFor='addition__without-spray' className='additions-label'>
            <div>
              <img className='additions-image' src={require('../../assets/images/cap-no-spray.png')} alt='be purkstuko' />
              <p>Be purkstuko</p>
            </div>
          </label>
        </div>
      </div>

      <div>
        <p className='product__price'>Kaina: £{DATA.price}</p>
      </div>

      <div className='quantity'>
        <button
          className='quantity__reduce'
          onClick={() => changeQuantity('decrease')}
          disabled={quantity === 1}
        >-</button>
        
        <p className='quantity__value'>{quantity}</p>
        
        <button
          className='quantity__increase'
          onClick={() => changeQuantity('increase')}
        >+</button>
      </div>

      <div className='actions'>
        <AppButton onClick={addToCart}>I Krepseli</AppButton>
      </div>

      <p className='description'>
        {DATA.description}
      </p>
    </main>
  )
}

export default Product
