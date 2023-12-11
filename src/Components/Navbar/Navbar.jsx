import React from 'react'
import './Navbar.css'

import logo from '../Assets/logo.jpeg'
import cart from '../Assets/cart.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt=""/>
        <p></p>
      </div>

      <ul className="nav-menu">
      <li>Home</li>
      <li>Type</li>
      <li>search</li>
      </ul>

      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart} alt=""/>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}

export default Navbar
