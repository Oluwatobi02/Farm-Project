import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/upgs-logo.jpg'

const Nav = () => {
  return (
    <nav className='navbar'>
       
        <img src={logo} alt='navbar'/>
        
        <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/products"}>Products</Link></li>
            <li><Link to={"/ourstory"}>Our Story</Link></li>
            <li><Link to={"/about"}>About</Link></li>
            <li><Link to={"/contact"}>Contact</Link></li>
            <li><Link to={"/pricing"}>Pricing</Link></li>
            <li><Link to={"/map"}>Map</Link></li>
        </ul>
    </nav> 
      
    

  )
}




export default Nav