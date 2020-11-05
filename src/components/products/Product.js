import React from 'react';
import './Product.css';

function Product({ id, image, title, price }) {
  return (
    <a href={`/p/${id}`} className='product'>
      <img src={image} alt='hidrolatas - maumedis' className='product__image' />
      <h2 className='product__title'>{title}</h2>
      <p className='product__price'>Kaina: £{price}</p>
    </a>
  )
}

export default Product
