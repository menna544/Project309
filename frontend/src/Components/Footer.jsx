import React from 'react';
import './footer.css';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import imag from '../images/photoremovebg-preview.png';
function Footer() {
  const handleFacebookClick = () => {
    window.open('https://www.facebook.com', '_blank');
  };
  const handleInstagramClick = () => {
  
    window.open('https://instagram.com', '_blank');
  };

  const handleWhatsAppClick = () => {
   
    window.open('https://wa.me/01097315496', '_blank');
  };

  return (
    <div className='footer'>
      <div className='logoa'>
      <h1>CoffeShop</h1>
      <img src={imag} className="imagee1" alt="description" />
      </div>
      
      <div className='icon'>
        <FacebookOutlinedIcon onClick={handleFacebookClick} />
        <InstagramIcon onClick={handleInstagramClick} />
        <WhatsAppIcon onClick={handleWhatsAppClick} />
      </div>
      <div className='title'>
        <h1>All Right Reserved</h1>
      </div>
    </div>
  );
}

export default Footer;
