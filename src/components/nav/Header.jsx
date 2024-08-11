import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MobileMenu from './MobileMenu'
import { List } from 'react-bootstrap-icons'

const Header = () => {
  // opened/closed mobile menu state
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMenuIsOpen(!menuIsOpen)
  }

  return (
    <div>
        <nav id='navbar'>
          <h4 className='news-logo'>
            <Link to='/'>NewsApp</Link>
          </h4>

          {/* desktop menu */}
          <ul>
            <li className='navlink'>
              <Link to='/'>Home</Link>
            </li>
            <li className='navlink'>
              <Link to='/aboutMe'>About Me</Link>
            </li>
            <li className='navlink'>
              <Link to='/'>Videos</Link>
            </li>
            <li className='navlink'>
              <Link to='/'>Contact Us</Link>
            </li>
          </ul>

          {/* hamburger icon, only show on small screens */}
          <div id='menuContainer'>
            <div id='menuButton' className='showMobileMenuButton' onClick={toggleMobileMenu}>
              <List id='hamburger-icon'></List>
            </div>
          </div>
        </nav>
        {/* curly brackets allow me to go into js */}
        {/* giving the mobile menu our close method of toggleMobileMenu as a prop */}
        {menuIsOpen && <MobileMenu closeMethod={toggleMobileMenu}/>}
    </div>
  )
}

export default Header