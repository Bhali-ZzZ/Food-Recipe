import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='container navbar'>
      <Link to={"/"}><img src={"/recipe logo.png"} alt=''/></Link>
      <ul>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/about"}>About</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
