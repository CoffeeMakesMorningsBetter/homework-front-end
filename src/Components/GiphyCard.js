import React from 'react';
import './GiphyGridContainer.css'

export const GiphyCard = ({ url }) => (
  <div className='giphy-grid-item'>
      <img src={url}></img>
  </div>
)

