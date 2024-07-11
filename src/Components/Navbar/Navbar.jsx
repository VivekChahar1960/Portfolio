import React, { useState } from 'react'
import darkmode from '../../assets/dark-mode.png'
import Menu_icon from '../../assets/menu.png'
import {Link} from 'react-scroll'
import './Navbar.css'
const Navbar = () => {

  const handleClick = () => {
    const x=document.getElementById('menu');
    if(x.style.right === "-300px"){
      x.style.right="0px";
    }else{
      x.style.right="-300px";
    }
  };

  return (
    <nav className='navbar'>
      
        <span>Vivek Chahar</span>
        <div className="menu">
          <ul id="menu">
            <li ><Link to='about'  smooth={true} offset={-250} duration={600} onClick={handleClick}>About</Link></li>
            <li ><Link to='experience'  smooth={true} offset={-250} duration={600} onClick={handleClick}>Experience</Link></li>
            <li ><Link to='projects'  smooth={true} offset={-250} duration={600} onClick={handleClick}>Projects</Link></li>
            <li ><Link to='contact'  smooth={true} offset={-250} duration={600} onClick={handleClick}>Contacts</Link></li>
          </ul>
          <img src={darkmode} alt="Dark mode chaneg img"  className='darkmode-img'/>
          <img src={Menu_icon} alt=""  className='menuicon' onClick={handleClick}/>
        
        </div>
    </nav>
  )
}

export default Navbar