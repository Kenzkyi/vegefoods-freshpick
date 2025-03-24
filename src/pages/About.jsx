import React from 'react';
import '../styles/aboutus.css';
import { FaLeaf, FaTruck, FaSeedling, FaHeart, FaShieldAlt, FaStar } from 'react-icons/fa';
import aboutImage from '../assets/public/aboutImage.jpeg';
import fresh from '../assets/public/fresh.jpeg'
import organic from '../assets/public/organic.jpeg';
import good from '../assets/public/good.jpeg';


const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">🌿 About VegeFood-Freshpicks 🌿</h1>
        <p className="about-text">
          Welcome to <strong>VegeFood-Freshpicks</strong>, your trusted source for the freshest and healthiest vegetables! 
          Our mission is to bring farm-to-table organic produce directly to your doorstep, ensuring that every meal you prepare 
          is packed with nutrients and flavor.
        </p>

        <h2 className="section-title">Why Choose Us?</h2>
        <p className="about-text">
          At <strong>VegeFood-Freshpicks</strong>, we prioritize quality, freshness, and sustainability. We believe that food 
          should be both healthy and delicious, which is why we ensure that all our products meet the highest standards.
        </p>

       
        <div className="about-highlights-container">
          <div className="highlight-item">
            <div className="highlight">
              <FaLeaf className="highlight-icon" />
              <h3>100% Organic</h3>
              <p>We source fresh, pesticide-free, and organic vegetables straight from local farms.</p>
            </div>
            <img src={organic} alt="Organic" className="highlight-image" />
          </div>

          <div className="highlight-item">
            <div className="highlight">
              <FaTruck className="highlight-icon" />
              <h3>Fast Delivery</h3>
              <p>Get your fresh produce delivered to your doorstep within hours.</p>
            </div>
            <img src={fresh} alt="Fresh" className="highlight-image" />
          </div>

          <div className="highlight-item">
            <div className="highlight">
              <FaSeedling className="highlight-icon" />
              <h3>Eco-Friendly</h3>
              <p>We support sustainable farming practices to ensure a greener future.</p>
            </div>
            <img src={good} alt="Good" className="highlight-image" />
          </div>
        </div>

        <h2 className="section-title">Why Trust Us?</h2>
        <p className="about-text">
          Your health and satisfaction are our top priorities. We work closely with certified organic farmers, 
          follow strict quality control, and ensure that every vegetable you receive is as fresh as the moment it was harvested.
        </p>

      
        <div className="about-highlights-container">
          <div className="highlight-item">
            <div className="highlight">
              <FaShieldAlt className="highlight-icon" />
              <h3>Certified Quality</h3>
              <p>Our products go through rigorous quality checks to guarantee freshness and purity.</p>
            </div>
            <img src={aboutImage} alt="Certified Quality" className="highlight-image" />
          </div>

          <div className="highlight-item">
            <div className="highlight">
              <FaHeart className="highlight-icon" />
              <h3>Customer Satisfaction</h3>
              <p>We value our customers and offer 24/7 support to ensure you always have the best experience.</p>
            </div>
            <img src={fresh} alt="Customer Satisfaction" className="highlight-image" />
          </div>

          <div className="highlight-item">
            <div className="highlight">
              <FaStar className="highlight-icon" />
              <h3>Trusted by Many</h3>
              <p>Thousands of happy customers trust us for their daily supply of fresh vegetables.</p>
            </div>
            <img src={good} alt="Trusted by Many" className="highlight-image" />
          </div>
        </div>

        <h2 className="section-title">Benefits of Using Our Products</h2>
        <ul className="benefits-list">
          <li>✅ Enjoy fresher, healthier meals with our farm-to-table approach.</li>
          <li>✅ Reduce your carbon footprint with sustainable packaging and local sourcing.</li>
          <li>✅ Boost your family's health with 100% organic and nutrient-rich vegetables.</li>
          <li>✅ Support local farmers and ethical agriculture practices.</li>
          <li>✅ Experience hassle-free shopping with fast and reliable delivery.</li>
        </ul>

        <p className="about-text">🌱 Fresh | 🥗 Healthy | 🚜 Sustainable | ❤️ Trusted</p>
        <button className="about-button">Shop Now</button>
      </div>
    </div>
  );
};

export default About;
