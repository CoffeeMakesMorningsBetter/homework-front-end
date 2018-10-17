import React, { Component } from 'react';
import Modal from './Modal'
import { Loading } from './Loading.js'
import { imagesLoaded } from '../Helper/helperMethods';
import './GiphyGridContainer.css'

class GiphyGridContainer extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      loading: true,
      showModal: false,
      modalInfo: {}
    }
    this.handleImgeLoading = this.handleImgeLoading.bind(this)
    this.loadingCheck = this.loadingCheck.bind(this)
    this.imgClick = this.imgClick.bind(this)
    this.modalClose = this.modalClose.bind(this)
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

  imgClick(obj) {
    let state = {...this.state}
    state.showModal = obj.showMadal
    state.modalInfo = obj.modalInfo
    this.setState({...state})
  }

  modalClose() {
    let state = {...this.state}
    state.showModal = false
    state.modalInfo = {}
    this.setState({...state})
  }


  renderImage(obj,idx) {
    return (
      <div className='giphy-grid-item' key={idx}>
      <img
        src={obj.url} 
        alt={obj.id}
        onLoad={this.handleImgeLoading}
        onClick={() => this.imgClick({showMadal: true, modalInfo: {url: obj.url}})}
        ></img>
  </div>
    )
  }

  render() {
    const { gifs } = this.props
    const { showModal, modalInfo } = this.state

    let giphys = gifs.map((obj, idx) => this.renderImage(obj, idx))

    return(
      <div className='giphy-grid-container' ref={element => {this.element = element}}>
        {this.loadingCheck()}
        {showModal && <Modal close={this.modalClose} {...modalInfo}/>}
        {giphys}
      </div>
    )
  }
}

export default GiphyGridContainer

// 