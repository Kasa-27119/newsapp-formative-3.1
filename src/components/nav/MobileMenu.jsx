import { Link } from "react-router-dom"
import { X } from "react-bootstrap-icons"

const MobileMenu = ({closeMethod}) => {
  return (
    <>
        <div id="close-nav-menu" onClick={closeMethod}>
            <X></X>
        </div>

        <ul id="mobile-menu">
            <li className='navlink'>
                <Link to='/' onClick={closeMethod}>Home</Link>
            </li>
            <li className='navlink'>
              <Link to='/aboutMe' onClick={closeMethod}>About Me</Link>
            </li>
            <li className='navlink'>
              <Link to='/' onClick={closeMethod}>Videos</Link>
            </li>
            <li className='navlink'>
              <Link to='/' onClick={closeMethod}>Contact Us</Link>
            </li>
        </ul>
    </>
  )
}

export default MobileMenu
