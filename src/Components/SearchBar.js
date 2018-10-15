import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      search: ''
    }
    this.handleChange = this.handleChange.bind(this)

  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()
    let { addSearch } = this.props
  }

  render() {
    let { serach } = this.state
    return( 
      <form onSubmit={this.handleSubmit}>
        <label htmlFor></label>
        <input 
        type='text'
        name='search'
        value={search}
        onChange={this.handleChange}
        />
      </form>
    )
  }
}