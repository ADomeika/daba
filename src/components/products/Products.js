import React from 'react'

import Product from './Product'

const DATA = [
  {
    id: 1,
    title: 'Maumedzio hidrolatas',
    image: 'https://static.wixstatic.com/media/d7ea37_c28bae3e7b624121ab1bafe495aff1db~mv2_d_3648_2736_s_4_2.png/v1/fill/w_420,h_420,al_c,q_85,usm_0.66_1.00_0.01/d7ea37_c28bae3e7b624121ab1bafe495aff1db~mv2_d_3648_2736_s_4_2.webp',
    price: 6.99
  },
  {
    id: 2,
    title: 'Rugiageliu hidrolatas',
    image: 'https://static.wixstatic.com/media/d7ea37_c28bae3e7b624121ab1bafe495aff1db~mv2_d_3648_2736_s_4_2.png/v1/fill/w_420,h_420,al_c,q_85,usm_0.66_1.00_0.01/d7ea37_c28bae3e7b624121ab1bafe495aff1db~mv2_d_3648_2736_s_4_2.webp',
    price: 6.99
  },
  {
    id: 3,
    title: 'Metu hidrolatas',
    image: 'https://static.wixstatic.com/media/d7ea37_c28bae3e7b624121ab1bafe495aff1db~mv2_d_3648_2736_s_4_2.png/v1/fill/w_420,h_420,al_c,q_85,usm_0.66_1.00_0.01/d7ea37_c28bae3e7b624121ab1bafe495aff1db~mv2_d_3648_2736_s_4_2.webp',
    price: 6.99
  },
  {
    id: 4,
    title: 'Silauoges hidrolatas',
    image: 'https://static.wixstatic.com/media/d7ea37_c28bae3e7b624121ab1bafe495aff1db~mv2_d_3648_2736_s_4_2.png/v1/fill/w_420,h_420,al_c,q_85,usm_0.66_1.00_0.01/d7ea37_c28bae3e7b624121ab1bafe495aff1db~mv2_d_3648_2736_s_4_2.webp',
    price: 6.99
  },
]

function Products() {
  return (
    <div className='product-list'>
      {DATA.map(({ id, title, image, price }) => (
        <Product
          key={id}
          id={id}
          title={title}
          image={image}
          price={price}
        />
      ))}
    </div>
  )
}

export default Products
