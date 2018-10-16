import React from 'react';
import './Error.css'

export const Error = ({ error, errorShow, closeError }) => (
  <div className={(errorShow ? 'error-parent show': 'NA' )}>
    <div className='error-close' onClick={() => closeError()}>X</div>
    <div className='error-container'>
      <div className='error-child'>
        <h1>{error}</h1>
      </div>
      <div className='error-child'>
        <img src='https://media.giphy.com/media/5bb1VF7g1ENceLblRC/giphy.gif' alt='Error'></img>
      </div>
    </div>
  </div>
)