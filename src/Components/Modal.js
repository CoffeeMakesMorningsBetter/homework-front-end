import React from 'react';
import './Modal.css'

const Modal = ({url, close}) => (
  <div className='modal-class' onClick={close}>
    <div className='modal-container'>
      <img src={url} alt='imgage'></img>
      <h1>Gify</h1>
    </div>
  </div>
)

export default Modal 
