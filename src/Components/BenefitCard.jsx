import "./Benefits.css"

const BenefitCard = ({ icon, heading }) => {
  return (
    <div className="offer">
      <img src={icon} alt="offers-icon" />
      <h4>{heading}</h4>
      <p>
        Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
        dignissim placerat nisi, adipiscing mauris non.
      </p>
    </div>
  );
};

export default BenefitCard;