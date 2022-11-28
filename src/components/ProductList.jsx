import React from 'react'
import Product from './Product'

const ProductList = ({products, addToCart}) => {
  return (
      <div className='row'>
      {
        products.length > 0 && products.map((product) => (
          <div className='col-12 col-lg-6' key={product.name}>
            <Product product={product} addToCart={addToCart} />
          </div>
        ))
      }
      </div>
   
  )
}

export default ProductList