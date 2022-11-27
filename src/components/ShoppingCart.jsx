import React from 'react'
import Order from './Order'

const ShoppingCart = ({orders}) => {
  const totalPrice = () => {
    return orders.reduce((accumulator, currentValue) => {
     return accumulator + (currentValue.quantity * currentValue.unit_price)
    },0)
  }
  return (
   <div className="ShoppingCart card">
   <div className="card-header">
     Cart
   </div>
   <div className="card-body">
     <table className="table my-2">
      <thead>
        <tr>
          <th scope="col">Product</th>
          <th scope="col">Quantity</th>
          <th scope="col">Price</th>
          <th scope="col">Total Price</th>
        </tr>
      </thead>
      <tbody>
        {
          orders.length > 0 && orders.map((order, index) => (
            <Order key={index} order={order} />
          ))
        }
      </tbody>
     </table>
     <div className='d-flex justify-content-between align-items-center mt-5'>
     <p><b>Total Order Price:</b> {totalPrice()}$</p>
     <button className="btn btn-primary">CREATE ORDER</button>
     </div>
    {/* </div> */}
   </div>
 </div>
  )
}

export default ShoppingCart