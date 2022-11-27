import React from 'react'

const Product = ({product}) => {
 const PICTURE = "https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-deep-purple-220907_inline.jpg.large.jpg"  

  return (
   <div className="Product card" style={{width: '18rem'}}>
    <img src={PICTURE} className="card-img-top image-products" alt="image products" />
    <div className="card-body">
      <h6 className="card-title">{product.name + " "}  
        <span class=" badge bg-secondary">{product.stock} </span>
      </h6>
      {/* <div className='d-flex justify-content-end'> */}
       <button className=" btn btn-primary">Add to cart</button>
      {/* </div> */}
    </div>
   </div>
  )
}

export default Product