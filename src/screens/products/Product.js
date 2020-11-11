import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

function Product({ id, image, title, price }) {
  return (
    <Link to={`/produktai/${id}`} className='product-list__product'>
      <img src={image} alt='hidrolatas - maumedis' className='product__image' />
      <h2 className='product__title'>{title}</h2>
      <p className='product__price'>Kaina: £{price}</p>
    </Link>
  )
}

export default Product
