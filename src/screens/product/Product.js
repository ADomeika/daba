import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import './Product.css';

import AppButton from '../../components/ui/AppButton';
import { requestProduct } from '../../actions/ProductActions';
import { addToCart } from '../../actions/CartActions';

const DATA = {
  image: 'https://static.wixstatic.com/media/d7ea37_c28bae3e7b624121ab1bafe495aff1db~mv2_d_3648_2736_s_4_2.png/v1/fill/w_420,h_420,al_c,q_85,usm_0.66_1.00_0.01/d7ea37_c28bae3e7b624121ab1bafe495aff1db~mv2_d_3648_2736_s_4_2.webp',
  price: 6.99
}

function Product({ onRequestProduct, onAddToCart, product, isPending, error }) {
  const [quantity, setQuantity] = useState(1);
  const [spray, setSpray] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    onRequestProduct(id)
  }, [])

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

  console.log(error)

  const addToCart = () => {
    onAddToCart({
      id: product.id,
      title: product.title,
      spray,
      quantity,
      price: DATA.price,
      image: DATA.image
    })
  }

  return (
    <main className='product'>
      {isPending
        ? <p>KRAUNASI...</p>
        : (
          <>
            <div>
              <img src={DATA.image} alt={product.title} className='product__image' />
              <h2 className='product__title'>{product.title}</h2>
            </div>

            <div className='additions'>
              <div>
                <input
                  type='radio'
                  name='additions'
                  className='additions-input'
                  id='addition__with-spray'
                  onChange={() => setSpray(true)}
                />
                <label htmlFor='addition__with-spray' className='additions-label'>
                  <div>
                    <img className='additions-image' src={require('../../assets/images/cap-spray.png')} alt='su purkstuku' />
                    <p>Su purkstuku</p>
                  </div>
                </label>
              </div>

              <div>
                <input
                  type='radio'
                  name='additions'
                  className='additions-input'
                  id='addition__without-spray'
                  value='no-spray'
                  onChange={() => setSpray(false)}
                  defaultChecked
                />
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
              {product.body}
            </p>
        </>
        )
      }
    </main>
  )
}

const mapStateToProps = ({ productReducer }) => ({
  product: productReducer.product,
  isPending: productReducer.isPending,
  error: productReducer.error,
});

const mapDispatchToProps = (dispatch) => ({
  onRequestProduct: (id) => dispatch(requestProduct(id)),
  onAddToCart: (item) => dispatch(addToCart(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
