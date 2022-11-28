import React from 'react'


const Product = ({product, addToCart}) => {
   

 const handleClick = (product) => {
  addToCart(product)
 }

  return (
   <div className="Product card mx-auto" style={{width: '18rem'}}>
    <div className='image'>
      <img src={product.image} className="card-img-top image-products" alt={product.name} />
      {
        product.stock === 0 && (
          <div className="card-img-overlay"> 
          <span className="badge bg-danger">Sold out </span>
          </div>
        )
      }
    </div>
   
    <div className="card-body">
      <h6 className="card-title d-flex justify-content-between align-items-center">
      <span className={`badge bg-${product.stock > 0 ? "dark" : "danger"}` } > {product.stock} </span>
       {" " + product.name }  
      </h6>
      <div className='d-flex justify-content-end'>
      <button className="btn btn-dark" onClick={() => handleClick(product)} >Add to cart</button>
      </div>
    </div>
   </div>
  )
}

export default Product