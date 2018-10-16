import React, { Component } from 'react';
import { GiphyCard } from './GiphyCard'
import './GiphyGridContainer.css'

class GiphyGridContainer extends Component {
  constructor(props) {
    super(props) 
  }

  render() {
    const { gifs } = this.props

    let giphys = gifs.map((obj, idx) => (<GiphyCard key={idx} {...obj}/>))

    return(
      <div className='giphy-grid-container'>
        {giphys}
      </div>
    )
  }
}

export default GiphyGridContainer