import "./Benefits.css";
import square from "../assets/3square.png"
import money from "../assets/money-tick.png"
import calendar from "../assets/calendar-tick.png"
import BenefitCard from "./BenefitCard";

const Benefits = () => {

    const cards = [
        {
            id: 1,
            icon: square,
            heading: "Many Choices"
        },
        {
            id: 2,
            icon: money,
            heading: "Fast and On Time"
        },
        {
            id: 3,
            icon: calendar,
            heading: "Affordable Price"
        }
    ]
  return (
    <section className="benefits-section">
      <div className="benefits-header">
        <div className="benefits-title">
          <p className="benefits-subtitle">Benefits</p>

          <h2 className="benefits-heading">
            Benefits when using <br />
            our services
          </h2>
        </div>
        <p className="benefits-description">
          Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
          dignissim placerat nisi, adipiscing mauris non purus parturient.
        </p>
      </div>
        <div className="benefits-container">
            {cards.map((card) => (
            <BenefitCard
                key={card.id}
                icon={card.icon}
                heading={card.heading}
            />
            ))}
        </div>
    </section>
  );
};

export default Benefits;