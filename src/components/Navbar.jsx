import React from 'react'
import './Navbar.css'
import pokeapi from '../img/pokeapi_256.3fa72200.png'
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className='img_container'>
      <img className='pokeapi_img' src={pokeapi} alt="" />
      <div className='Navbar_list'>
        <span><Link to="/" className='span'>Home</Link></span>
        <span>Pokemon Dex</span>
      </div>
    </div>  
  )
}

export default Navbar