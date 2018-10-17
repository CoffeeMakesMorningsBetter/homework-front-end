import React, { Component } from 'react'
import './Navbar.css'

class Navbar extends Component {
  render() {
    return (
      <div className='nav-bar-container'>
        <div className='nav-bar-item'>
          <div className='nav-bar-child' onClick={this.props.order}>Ascending</div>
          <div className='nav-bar-child' onClick={this.props.order}>Descending</div>
        </div>
      </div>
    )
  }
}

export default Navbar
