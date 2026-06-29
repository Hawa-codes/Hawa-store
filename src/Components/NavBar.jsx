import { Link } from "react-router-dom"
// import logo from '../assets/Frame.png'
import user from '../assets/user.svg'
import bag from '../assets/bag-2.svg'
import logo from '../assets/Frame 1.svg'
import './Navbar.css'

const NavBar = () => {

    // const navigate = useNavigate()

  return (
    <nav className='navbar'>
      <img src={logo} alt="logo" className='logo' />
      <div className='desktopMenu'>
        <Link className="desktopMenuListItem">Product</Link>
        <Link className="desktopMenuListItem">Services</Link>
        <Link className="desktopMenuListItem">Articles</Link>
        <Link className="desktopMenuListItem">About Us</Link>
      </div>
      <div className='desktopMenuBtn'>
        <img src={bag} alt="bag" className='desktopMenuImg' />
        <img src={user} alt="user" className='desktopMenuImg' />
      </div>
    </nav>
  )
}

export default NavBar
