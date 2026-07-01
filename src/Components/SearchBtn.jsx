import searchIcon from "../assets/search-normal.svg";
import "./HeroSection.css"

const SearchBtn = () => {
  return (
    <div className="search-btn-container">
      <span className="search-btn-input-wrapper">
        <img src={searchIcon} alt="search-icon" />
        <input type="text" placeholder="Search property" />
      </span>

      <button className="search-btn">Search</button>
    </div>
  );
};

export default SearchBtn;