import React from 'react'
import Product from './Product'

const ProductList = ({products}) => {
  return (
    <div className="ProductList col-sm-6">
      1 of 2
      <div className='row'>
      {
        products.length > 0 && products.map((product) => (
          <div className='col-sm-6' key={product.name}>
            <Product product={product} />
          </div>
        ))
      }
      </div>
    </div>
  )
}

export default ProductList