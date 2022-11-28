import React from 'react'


const Product = ({product, addToCart}) => {
 const PICTURE = "https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-deep-purple-220907_inline.jpg.large.jpg"  

 const handleClick = (product) => {
  console.log("handleClick")
  addToCart(product)
 }


  return (
   <div className="Product card mx-auto" style={{width: '18rem'}}>
    <div className='image'>
    <img src={PICTURE} className="card-img-top image-products" alt="image products" />

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