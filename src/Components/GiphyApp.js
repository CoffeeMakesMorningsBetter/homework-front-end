import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import SearchBar from './SearchBar';
import GiphyGridContainer from './GiphyGridContainer';
import { Loading } from './Loading'
import { Error } from './Error';
import { errorHandler, cleanUpGiphyData } from '../Helper/helperMethods';
import './GiphyApp.css';

const API_KEY = '7XE4nPN3h4aCsT61eLUDWVvTbyFB9ZrR'

class GiphyApp extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      giphyResults: [],
      isLoading: false,
      sortBy: 'asc',
      error: null,
      errorShow: false
    }
    this.searchGiphy = this.searchGiphy.bind(this);
    this.handleChildrenErrors = this.handleChildrenErrors.bind(this);
    this.closeError = this.closeError.bind(this);
  }
  
  componentDidMount() {
    this.setState({ isLoading: true });
    axios.get(`https://api.giphy.com/v1/gifs/trending?&api_key=${API_KEY}&limit=50`)
    .then(errorHandler)
    .then(res => {
      let sanitizedData = cleanUpGiphyData(res.data.data)
      this.setState({ giphyResults: sanitizedData, isLoading: false });
    })
    .catch(error => this.setState({ error: 'Something went wrong', isLoading: false }));
  }

  searchGiphy(result) {
    if(Array.isArray(result)){
      this.setState({ giphyResults: result, error: null })
    } else {
      let { searchTerm } = result;
      this.setState({ isLoading: true });
      axios.get(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}?&api_key=${API_KEY}&limit=50`)
      .then(errorHandler)
      .then(res => {
        let sanitizedData = cleanUpGiphyData(res.data.data);
        this.setState({ giphyResults: sanitizedData, isLoading: false });
      })
      .catch(error => this.setState({ error: 'Something went wrong', isLoading: false }));
    }
  }

  handleChildrenErrors(result) {
    this.setState({ error: result.message, giphyResults: result.results, errorShow: true });
  }

  closeError() {
    this.setState({ error: null, errorShow: false });
  }

  render() {
    const { error, errorShow, giphyResults, isLoading } = this.state
    return (
      <div className='giphy-app'>
        <Navbar/>
        <SearchBar searchGiphy={this.searchGiphy} errors={this.handleChildrenErrors}/>
        <GiphyGridContainer gifs={giphyResults}/>
        {error && <Error error={error} errorShow={errorShow} closeError={this.closeError}/>}
        {isLoading && <Loading/>}
      </div>
    )
  }
}

export default GiphyApp