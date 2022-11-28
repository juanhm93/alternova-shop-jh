import React from 'react'
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

const ToastSoldOut = ({closeToast,show, message}) => {
  return (
    <ToastContainer className="p-3" position='bottom-end'>
    <Toast onClose={closeToast} show={show} bg='warning' delay={3000} autohide>
    <Toast.Header>
      <strong className="me-auto">{message.title}</strong>
      <small>11 mins ago</small>
    </Toast.Header>
    <Toast.Body>{message.message}</Toast.Body>
  </Toast>
  </ToastContainer>
  )
}

export default ToastSoldOut