import logo from '../assets/Frame 1.svg'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer-wrapper'>
      <div className='footer'>
        <span>
            <img src={logo} alt="logo" />
            <p>Lalasia is digital agency that help you make better <br /> experience iaculis cras in.</p>
        </span>
        <span className='Content'>
            <div>
                <p><strong>Product</strong></p>
                <p>New Arrivals</p>
                <p>Best Selling</p>
                <p>Home Decor</p>
                <p>Kitchen Set</p>
            </div>
            <div>
                <p><strong>Services</strong></p>
                <p>Catalog</p>
                <p>Blog</p>
                <p>FaQ</p>
                <p>Pricing</p>
            </div>
            <div>
                <p><strong>Follow Us</strong></p>
                <p>Facebook</p>
                <p>Instagram</p>
                <p>Twitter</p>
            </div>
        </span>
      </div>
    </div>
  )
}

export default Footer
