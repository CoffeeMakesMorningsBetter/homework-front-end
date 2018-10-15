import React, { Component } from 'react';
import _ from 'lodash'; 
import { cleanUpGiphyData } from '../Helper/helperMethods'
import axios from 'axios';
const API_KEY = 'YLhRx6gl2gfUoP1koit3zj9HZ1rQOzOI'

class SearchBar extends Component {
  constructor(props) {
    super(props) 
    this.throttle = _.throttle(this.giphyApiSearch, 1000)
  }

  handleChange(e) {
    e.persist()
    this.throttle(e)
  }

  giphyApiSearch(e) {
    let searchValue = e.target.value
    let { searchGiphy, errors } = this.props

    axios.get(`https://api.giphy.com/v1/gifs/search?q=${searchValue}&api_key=${API_KEY}&limit=25`)
    .then(res => {
      if(res.data.data.length === 0) {
        errors({ message: 'No Results' , results: res.data.data})
      } else {
        let santizedData = cleanUpGiphyData(res.data.data)
        searchGiphy(santizedData)
      }
    })
  }

  render() {
    return( 
      <form>
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