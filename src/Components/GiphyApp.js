import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './Navbar'
import SearchBar from './SearchBar'
import { errorHandler, cleanUpGiphyData } from '../Helper/helperMethods'
import './GiphyApp.css'

const API_KEY = 'YLhRx6gl2gfUoP1koit3zj9HZ1rQOzOI'

class GiphyApp extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      giphyResults: [],
      isLoading: false,
      sortBy: 'asc',
      error: null
    }
    this.searchGiphy = this.searchGiphy.bind(this)
    this.handleChildrenErrors = this.handleChildrenErrors.bind(this)
  }
  
  componentDidMount() {
    this.setState({ isLoading: true })

    axios.get(`https://api.giphy.com/v1/gifs/trending?&api_key=${API_KEY}&limit=50`)
    .then(errorHandler)
    .then(res => {
      let sanitizedData = cleanUpGiphyData(res.data.data)
      this.setState({ giphyResults: sanitizedData, isLoading: false })
    })
    .catch(error => this.setState({ error: 'Something went wrong', isLoading: false }))
  }

  searchGiphy(result) {
    this.setState({ giphyResults: result, error: null })
  }

  handleChildrenErrors(result) {
    this.setState({ error: result.message, giphyResults: result.results })
  }

  render() {
    return (
      <div className='giphy-app'>
        <Navbar/>
        <SearchBar searchGiphy={this.searchGiphy} errors={this.handleChildrenErrors}/>
      </div>
    )
  }
}

export default GiphyApp