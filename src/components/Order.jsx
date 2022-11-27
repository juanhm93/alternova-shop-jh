import React from 'react'

const Order = ({order}) => {
  return (
    <tr>
      <td> {order.name}</td>
      <td>{order.quantity}</td>
      <td> {order.unit_price}$</td>
      <td> {order.unit_price * order.quantity}$</td>
     {/* <div className='col-sm-4'>
      
       </div>
       <div className='col-sm-2'>
        
       </div>
       <div className='col-sm-3'>
        
       </div>
       <div className='col-sm-3'>
        
       </div> */}
    </tr>

  )
}

export default Order