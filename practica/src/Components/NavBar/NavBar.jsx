
import CartWidget from '../../Components/CartWidget/CartWidget'
import Logo from "../../assets/pngwing.com.png"
import { Link } from 'react-router-dom'

import "./navbar.scss"

const NavBar = () => {
  return (
    <nav className='navbar'>
        <h2>
            <Link to="/"><img className='logo' src={Logo} alt="" /></Link>
        </h2>
        <ul>
            <li>
              <Link className='nav-link' to="/categoria/Tinto">Tintos</Link>
            </li>
            <li>
              <Link className='nav-link' to="/categoria/Blanco">Blancos</Link>
            </li>
            <li>
              <Link className='nav-link' to="/categoria/Espumoso">Espumoso</Link>
            </li>
      
        </ul>
        <CartWidget />
    </nav>
  )
}

export default NavBar