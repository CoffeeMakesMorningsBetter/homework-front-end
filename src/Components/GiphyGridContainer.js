import React, { Component } from 'react';
import { GiphyCard } from './GiphyCard'
import { Loading } from './Loading.js'
import { imagesLoaded } from '../Helper/helperMethods';
import './GiphyGridContainer.css'

class GiphyGridContainer extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      loading: true
    }
    this.handleImgeLoading = this.handleImgeLoading.bind(this)
    this.loadingCheck = this.loadingCheck.bind(this)
  }

  handleImgeLoading() {
    this.setState({
      loading: !imagesLoaded(this.element)
    })
  }

  loadingCheck() {
    if (!this.state.loading) {
      return null;
    }
    return <Loading/>
  }

  renderImage(obj) {
    return (
      <div className='giphy-grid-item'>
      <img 
        src={obj.url} 
        alt={obj.id}
        onLoad={this.handleImgeLoading}></img>
  </div>
    )
  }

  render() {
    const { gifs } = this.props

    let giphys = gifs.map((obj) => this.renderImage(obj))

    return(
      <div className='giphy-grid-container' ref={element => {this.element = element}}>
        {this.loadingCheck()}
        {giphys}
      </div>
    )
  }
}

export default GiphyGridContainer