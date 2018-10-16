import React from 'react';
import './GiphyGridContainer.css'

export const GiphyCard = ({ url, id }) => (
  <div className='giphy-grid-item'>
      <img 
        src={url} 
        alt={id}
        onLoad={this.props.imgLoading}></img>
  </div>
)

