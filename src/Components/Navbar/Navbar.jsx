import React from 'react'
import './Navbar.css'

import logo from '../Assets/logo.jpeg'
import cart1 from '../Assets/cart1.jpg'
import home_page from '../Assets/home_page.jpg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" width="150" height="100" />
        <p></p>
      </div>

      <ul className="nav-menu">
      <li>Home</li>
      <li><div class="dropdown">
  <button class="dropbtn">Type</button>
  <div class="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div></li>
      <li><div class="topnav"> <input type="text" placeholder="Search.."/></div></li>
      </ul>

      <div className="nav-login-cart">
        <Link to='login'></Link>
        <button>Login</button>
        <img src={cart1} alt="" width="45" 
     height="45"/>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}

export default Navbar
