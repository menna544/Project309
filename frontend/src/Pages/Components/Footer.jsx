import React from 'react';
import './footer.css';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

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
      <h1>CoffeShop momo</h1>
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
