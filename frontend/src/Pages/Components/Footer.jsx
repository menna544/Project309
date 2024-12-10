import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <section id="footer">
      <div className="container">
        <div className="icons">
          <a href="https://www.facebook.com" className="fa-brands fa-facebook-f" target="_blank" rel="noopener noreferrer"></a>
          <a href="#" className="fa-brands fa-instagram"></a>
          <a href="#" className="fa-brands fa-linkedin"></a>
        </div>
        <div className="created">
          Created by <span>Menna Maged</span> | All Rights Reserved
        </div>
      </div>
    </section>
  );
}

export default Footer;
