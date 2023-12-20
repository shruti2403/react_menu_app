import React ,{useState}from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import logo from '../Assets/logo.jpeg'
import cart1 from '../Assets/cart1.jpg'
import home_page from '../Assets/home_page.jpg'

const Navbar = () => {
    const [menu,setMenu] = useState("menu")
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" width="150" height="100" />
        <p></p>
      </div>

      <ul className="nav-menu">
      <li onClick={()=>{setMenu("")}}><Link style={{textDecoration: 'none'}} to='/'>Home</Link> {menu === "home"?<hr/>:<></>}</li>
      {/* <li><div class="dropdown"> */}
  {/* <button class="dropbtn">Type</button> */}
  {/* <div class="dropdown-content"> */}
    {/* <a href="#"><Link to>1</Link> </a> */}
    {/* <a href="#">Link 2</a> */}
    {/* <a href="#">Link 3</a> */}
  {/* </div> */}
{/* </div></li> */}
<li onClick={()=>{setMenu("indian")}}><Link style={{textDecoration: 'none'}} to='/indian'>Indian</Link> {menu === "indian"?<hr/>:<></>}</li>
<li onClick={()=>{setMenu("chinese")}}><Link style={{textDecoration: 'none'}} to='/chinese'>Chinese</Link> {menu === "chinese"?<hr/>:<></>}</li>
<li onClick={()=>{setMenu("continental")}}><Link style={{textDecoration: 'none'}} to='/continental'>Continental</Link> {menu === "continental"?<hr/>:<></>}</li>
      <li><div class="topnav"> <input type="text" placeholder="Search.."/></div></li>
      </ul>

      <div className="nav-login-cart">
        <Link to='/login'>
        <button>Login</button></Link>
        <Link to='/cart'><img src={cart1} alt="" width="45" 
     height="45"/></Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}

export default Navbar
