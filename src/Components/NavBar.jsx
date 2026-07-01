import { Link } from "react-router-dom";
import user from "../assets/user.svg";
import bag from "../assets/bag-2.svg";
import logo from "../assets/Frame 1.svg";
import "./Navbar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <div className="desktopMenu">
        <Link to="/product" className="desktopMenuListItem">
          Product
        </Link>
        <Link to="/services" className="desktopMenuListItem">
          Services
        </Link>
        <Link to="/article" className="desktopMenuListItem">
          Articles
        </Link>
        <Link to="/about" className="desktopMenuListItem">
          About Us
        </Link>
      </div>

      <div className="desktopMenuBtn">
        <img src={bag} alt="bag" className="desktopMenuImg" />
        <img src={user} alt="user" className="desktopMenuImg" />
      </div>
    </nav>
  );
};

export default NavBar;