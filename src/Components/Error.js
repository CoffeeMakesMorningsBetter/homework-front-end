import React from 'react';
import './Error.css'

export const Error = ({ error, errorShow, closeError }) => (
  <div className={'error-parent show'}>
    <div className='error-close' onClick={() => closeError()}>X</div>
    <div className='error-container'>
      <div className='error-child'>
        <h1 className='something-went-wrong'>{error}<span>.</span><span>.</span><span>.</span></h1>
      </div>
      <div className='error-child error-child-img-container'>
        <img src='https://media.giphy.com/media/5bb1VF7g1ENceLblRC/giphy.gif' alt='Error' className='error-child-img'></img>
      </div>
    </div>
  </div>
)