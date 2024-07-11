import React from 'react'
import {Link} from 'react-scroll'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footernav">
            <ul id="menu">
                <li><Link to='about'  smooth={true} offset={-250} duration={600}>About</Link></li>
                <li><Link to='experience'  smooth={true} offset={-250} duration={600}>Experience</Link></li>
                <li><Link to='projects'  smooth={true} offset={-250} duration={600}>Projects</Link></li>
                <li><Link to='contact'  smooth={true} offset={-250} duration={600}>Contacts</Link></li>
            </ul>
        </div>
        <div className="copyright">
            <p>Copyright © 2024 Vivek Chahar. All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer