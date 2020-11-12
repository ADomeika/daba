import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { requestProducts } from '../../actions/ProductsActions';
import Product from './Product';

const image = 'https://static.wixstatic.com/media/d7ea37_c28bae3e7b624121ab1bafe495aff1db~mv2_d_3648_2736_s_4_2.png/v1/fill/w_420,h_420,al_c,q_85,usm_0.66_1.00_0.01/d7ea37_c28bae3e7b624121ab1bafe495aff1db~mv2_d_3648_2736_s_4_2.webp';
const price = 6.99

function Products({ onRequestProducts, products, isPending, error }) {
  useEffect(() => {
    onRequestProducts()
  }, [])

  console.log(error)

  return (
    <main className='product-list'>
      {isPending
      ? <p>KRAUNASI...</p> 
      : error
      ? <p>ERROR</p>
      : products.map(({ id, title }) => (
        <Product
          key={id}
          id={id}
          title={title}
          image={image}
          price={price}
        />
      ))}
    </main>
  )
}

const mapStateToProps = ({ productsReducer }) => ({
  products: productsReducer.products,
  isPending: productsReducer.isPending,
  error: productsReducer.error,
});

const mapDispatchToProps = (dispatch) => ({
  onRequestProducts: () => dispatch(requestProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
