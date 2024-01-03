import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo-retina.png'

const Nav = () => {
  return (<section>
    <nav className='navbar'>
       
        <img src={logo} alt='navbar'/>
        
        <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/products"}>Products</Link></li>
            <li><Link to={"/ourstory"}>Our Story</Link></li>
            <li><Link to={"/about"}>About</Link></li>
            <li><Link to={"/contact"}>Contact</Link></li>
            <li><Link to={"/pricing"}>Pricing</Link></li>
        </ul>
    </nav>
      
      </section>

  )
}




export default Nav