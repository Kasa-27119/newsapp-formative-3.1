import {useState} from 'react'
import MobileMenu from './MobileMenu'
import { Link } from 'react-router-dom'
import { List } from 'react-bootstrap-icons'

const Header = () => {
  // menu state variable and state
  const [menuIsOpen, openMenu] = useState(false)
  // toggle mobile menu
  const toggleMobileMenu = () => {
    openMenu(!menuIsOpen)
    document.body.classList.toggle("no-scroll")
  }

  return (
    <header>
      <div id='top-nav'>
        <div id='logo'>
          <Link to="/">NewsAPI</Link>
        </div>

        {/* desktop menu */}
        <ul id='menu'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>

        {/* hamburger icon */}
        <div id='menu-container'>
          <button id='menu-button' className='show0mobile-menu-button' onClick={toggleMobileMenu}>
            <List id='hamburger-icon'></List>
          </button>
        </div>
      </div>

      {menuIsOpen && <MobileMenu closeMethod={toggleMobileMenu}/>}
    </header>
  )
}

export default Header
