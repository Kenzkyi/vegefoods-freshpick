import React from 'react'
import "../styles/contactus.css"
import { FaFacebook, FaTwitter, FaWhatsapp, FaEnvelope, FaPhone } from "react-icons/fa";

export default function ContactUs() {
    return (
      <div className="contact-container">
        <div className="contact-card">
          <div className="contact-content">
            
          <h2 className="contact-title">🌱 Welcome to VegeFood-FreshPicks! 🌱</h2>
  <p className="customer-care-message">
    Looking for the freshest and healthiest vegetables? You’ve come to the right place!  
    <strong>VegeFood-FreshPicks</strong> is your go-to store for  
    **organic, farm-fresh vegetables**, hand-picked to bring you  
    **quality, nutrition, and great taste**.  
    <br /><br />
  
    🥦 <strong>What We Offer:</strong> <br />
    ✅ Fresh, organic vegetables straight from the farm <br />
    ✅ Seasonal produce at unbeatable prices <br />
    ✅ Home delivery for your convenience <br />
    ✅ Wholesale & bulk purchases for restaurants and retailers <br />
    ✅ 100% chemical-free and eco-friendly farming <br /><br />
  
    📍 <strong>Visit Us:</strong> 124 Muyibi Street <br />
    🕒 <strong>Opening Hours:</strong> 9:00 AM - 10:00 PM <br />
    📞 <strong>Call Us:</strong> +2349035171809 <br />
    💬 <strong>Chat on WhatsApp:</strong> <a href="https://wa.me/2349041835740">Click here</a> <br />
    📩 <strong>Message Us on Facebook:</strong> <a href="https://www.facebook.com/profile.php?id=100093080067759">Click here</a> <br /><br />
  
    🌿 <strong>We are committed to bringing you farm-fresh, high-quality vegetables</strong>  
    for a healthier life! 🍅🥕🌽  
  </p>
  
  
  
            <h2 className="contact-title">📲 Connect With Us ON:</h2>
            <div className="contact-links-body">
            <div className="contact-links">
              <ContactLink 
                href="https://www.facebook.com/profile.php?id=100093080067759" 
                icon={<FaFacebook />} 
                text="Facebook" 
                subtext="Young Boy" 
                bgColor="facebook" 
              />
              <ContactLink 
                href="https://twitter.com/ELIBEGERRARD" 
                icon={<FaTwitter />} 
                text="Twitter" 
                subtext="Gerrard Elibe" 
                bgColor="twitter" 
              />
              <ContactLink 
                href="https://wa.me/2349041835740" 
                icon={<FaWhatsapp />} 
                text="WhatsApp" 
                subtext="+2349041835740" 
                bgColor="whatsapp" 
              />
              <ContactLink 
                href="mailto:gerardelibe@gmail.com" 
                icon={<FaEnvelope />} 
                text="Gmail" 
                subtext="gerardelibe@gmail.com" 
                bgColor="email" 
              />
              <ContactLink 
                href="tel:+2349035171809" 
                icon={<FaPhone />} 
                text="Phone" 
                subtext="+2349035171809" 
                bgColor="phone" 
              />
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  const ContactLink = ({ href, icon, text, subtext, bgColor }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`contact-link ${bgColor}`}>
      {icon} <span><strong>{text}:</strong> <br /> {subtext}</span>
    </a>
  );
  