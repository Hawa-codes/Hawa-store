import { Link, NavLink, useNavigate } from "react-router-dom"

const NavBar = () => {

    const navigate = useNavigate()

  return (
    <div>
        <NavLink>
            <Link to="/">Home</Link>
            <Link to="/about-us">Shop</Link>
            <Link to="/contact">About</Link>
            <Link to="/login">Contact</Link>
        </NavLink>
        <button onClick={() => navigate("/register")}>Register</button>
    </div>
  )
}

export default NavBar
