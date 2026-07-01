import "./Benefits.css"

const BenefitCard = (icon, heading, description) => {
  return (
    <div className='offer'>
        <img src={icon} alt="offers-icon" />
        <h4>{heading}</h4>
        <p>{description}</p>
    </div>
  )
}

export default BenefitCard
