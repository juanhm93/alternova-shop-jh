import React from 'react'


const Product = ({product, addToCart}) => {
 const PICTURE = "https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-deep-purple-220907_inline.jpg.large.jpg"  

 const handleClick = (product) => {
  console.log("handleClick")
  addToCart(product)
 }


  return (
   <div className="Product card" style={{width: '18rem'}}>
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
      <h6 className="card-title">
      <span className={`badge bg-${product.stock > 0 ? "primary" : "danger"}` }>{product.stock} </span>
       {" " + product.name }  
      </h6>
      <button className="btn btn-primary" onClick={() => handleClick(product)} >Add to cart</button>
    </div>
   </div>
  )
}

export default Product