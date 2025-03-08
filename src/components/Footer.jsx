import { FcLike } from 'react-icons/fc'
import '../styles/footer.css'
import { IoIosArrowUp } from 'react-icons/io'
import { MdEmail, MdLocationOn } from 'react-icons/md'
import { FaPhoneAlt } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const nav = useNavigate()
  return (
    <div className='footer'>
      <div className="footer-upside">
        <div className="footer-upsideholder">
          <main>
            <h5>Subscribe to our Newsletter</h5>
            <p>Get e-mail updates our latest shops and special offers</p>
          </main>
          <nav>
            <input type="text" placeholder='Enter email address' />
            <button>Subscribe</button>
          </nav>
        </div>
        <div className="footer-iconholder"><IoIosArrowUp /></div>
      </div>
      <div className="footer-downside">
        <aside></aside>
        <main>
          <header>
            <ul>
              <li>Vegefoods</li>
              <li>Menu</li>
              <p>Help</p>
              <li>Have a Questions?</li>
            </ul>
          </header>
          <article>
            <h6>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</h6>
            <ul>
              <li onClick={()=>nav('/shop')}>Shop</li>
              <li>About</li>
              <li>Journal</li>
              <li>Contact Us</li>
            </ul>
            <ol>
              <li>Shipping Information <span>FAQs</span></li>
              <li>Returns & Exchange <span>Contact</span></li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ol>
            <section>
              <p><span><MdLocationOn fontSize={17}/></span>203 Fake St. Mountain View, San Francisco, California, USA</p>
              <p style={{marginBottom:15}}><span><FaPhoneAlt fontSize={17}/></span>+2 392 3929 210</p>
              <p><span><MdEmail fontSize={17}/></span>info@yourdomain.com</p>
            </section>
          </article>
        </main>
        <nav>
          <p>Copyright ©2025 All rights reserved | This template is made with <FcLike style={{color:'black'}} fontSize={16} /> by <span>Colorlib</span></p>
        </nav>
      </div>
    </div>
  )
}

export default Footer
