import { Link, NavLink, useNavigate } from "react-router-dom"

const NavBar = () => {

    const navigate = useNavigate()

  return (
    <div>
        <NavLink>
            <Link to="/">Home</Link>
            <Link to="/about-us">About Us</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/login">Log In</Link>
        </NavLink>
        <button onClick={() => navigate("/register")}>Register</button>
    </div>
  )
}

export default NavBar
