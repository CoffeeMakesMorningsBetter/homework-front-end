import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './Navbar'
import { errorHandler, cleanUp } from '../Helper/helperMethods'
import './GiphyApp.css'

const API_KEY = 'YLhRx6gl2gfUoP1koit3zj9HZ1rQOzOI'

class GiphyApp extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      giphyResults: [],
      isLoading: false,
      sortBy: 'asc'
    }
  }
  
  componentDidMount() {
    this.setState({ isLoading: true })

    axios.get(`https://api.giphy.com/v1/gifs/trending?&api_key=${API_KEY}&limit=50`)
    .then(errorHandler)
    .then(res => {
      let sanitizedData = cleanUp(res.data.data)
      this.setState({ giphyResults: sanitizedData, isLoading: false })
    })
    .catch(error => console.log('this is my ', error))
  }

  render() {
    return (
      <div className='giphy-app'>
        <Navbar/>
      </div>
    )
  }
}

export default GiphyApp