import React, { Component } from 'react';
import _ from 'lodash'; 
import { cleanUpGiphyData } from '../Helper/helperMethods';
import axios from 'axios';
import './SearchBars.css'

const API_KEY = '7XE4nPN3h4aCsT61eLUDWVvTbyFB9ZrR';

class SearchBar extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      search: '',
    }
    this.debounce = _.debounce(this.giphyApiSearch, 5000)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    e.persist()
    this.debounce(e)
  }

  giphyApiSearch(e) {
    let searchValue = e.target.value
    
    if(!searchValue) {
      console.log('TURD!')
      return 
    }

    let { searchGiphy, errors } = this.props

    axios.get(`https://api.giphy.com/v1/gifs/search?q=${searchValue}&api_key=${API_KEY}&limit=25`, {
      onDownloadProgress: (progressEvent) => {
        let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        console.log(progressEvent.lengthComputable)
        console.log(percentCompleted);
      }
    })
    .then(res => {
      if(res.data.data.length === 0) {
        errors({ message: 'No Results' , results: res.data.data });
      } else {
        let santizedData = cleanUpGiphyData(res.data.data);
        searchGiphy(santizedData);
      }
    })
  }

  handleSubmit(e) {
    let search = e.target.search.value;
    let { searchGiphy } = this.props;
    e.preventDefault();
    searchGiphy({ searchTerm: search });
    document.querySelector('form').reset();
  }

  render() {
    return( 
      <form onSubmit={this.handleSubmit}>
        <label htmlFor></label>
        <input 
        type='text'
        name='search'
        onChange={this.handleChange.bind(this)}
        />
      </form>
    )
  }
}

export default SearchBar