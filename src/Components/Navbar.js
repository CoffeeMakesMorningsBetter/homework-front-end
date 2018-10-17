import React from 'react'
import './Navbar.css'

const Navbar = (props) => {
  return (
    <div className='nav-bar-container'>
    <div className='nav-bar-item'>
      <div className='nav-bar-child' onClick={props.order}>Ascending</div>
      <div className='nav-bar-child' onClick={props.order}>Descending</div>
    </div>
  </div>
  )
}



export default Navbar
