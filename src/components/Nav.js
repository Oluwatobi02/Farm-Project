import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/upgs-logo.jpg'

const Nav = () => {
  const navigate = useNavigate();
  const handleImageClick = () => {
    navigate('../')
  }
  return (
    <nav className='navbar'>
       
        <img src={logo} alt='navbar' onClick={handleImageClick}/>
        
        <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/products"}>Products</Link></li>
            <li><Link to={"/about"}>about</Link></li>
            <li><Link to={"/contact"}>Contact</Link></li>
            <li><Link to={"/map"}>Map</Link></li>
        </ul>
    </nav> 
      
    

  )
}




export default Nav