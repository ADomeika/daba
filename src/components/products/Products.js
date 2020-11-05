import React from 'react'

import Product from './Product'

function Products() {
  return (
    <div className='product-list'>
      <Product id='1' title='Maumedzio hidrolatas' image='/maumedis.png' price='6.99' />
      <Product id='2' title='Maumedzio hidrolatas' image='/maumedis.png' price='6.99' />
      <Product id='3' title='Maumedzio hidrolatas' image='/maumedis.png' price='6.99' />
      <Product id='4' title='Maumedzio hidrolatas' image='/maumedis.png' price='6.99' />
    </div>
  )
}

export default Products
