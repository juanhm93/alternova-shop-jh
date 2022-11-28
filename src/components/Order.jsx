import React from 'react'

const Order = ({order}) => {
  return (
    <tr>
      <td> {order.name}</td>
      <td>{order.quantity}</td>
      <td> {order.unit_price}$</td>
      <td> {order.unit_price * order.quantity}$</td>
    </tr>

  )
}

export default Order