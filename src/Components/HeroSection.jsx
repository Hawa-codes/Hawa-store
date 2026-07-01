import sketch from "../assets/Sketch-annotation-element-stroke-abstract-stars-plus-wink-filled.svg";
import arrow from "../assets/Sketch-annotation-element-stroke-line-arrow-spiral-down-5.svg";
import rectangle from "../assets/Rectangle 2.svg";
import SearchBtn from "./SearchBtn";
import "./HeroSection.css"

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h2>
          Discover Furniture With <br />
          High Quality Wood <img src={sketch} alt="sketch" />
        </h2>
        <p>
          Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
          dignissim placerat nisi, adipiscing mauris non. Purus parturient
          viverra nunc, tortor sit laoreet. Quam tincidunt aliquam adipiscing
          tempor.
        </p>
        <img
          src={arrow}
          alt="arrow"
          className="hero-arrow"
        />
      </div>
      <div className="hero-inputs">
        <SearchBtn />
        <img
          src={rectangle}
          alt="rectangle"
          className="hero-rectangle"
        />
      </div>
    </div>
  );
};

export default HeroSection;