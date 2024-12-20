import React, { useState } from "react";
import "./nav.css";
import imag from '../images/photoremovebg-preview.png'
export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <img src={imag} className="imagee" alt="description" />
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        </li>
        <li>
          <a href="#menu" onClick={() => setMenuOpen(false)}>Menu</a>
        </li>
        <li>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </li>
        <li>
          <a href="#review" onClick={() => setMenuOpen(false)}>Review</a>
        </li>
      </ul>
     
    </nav>
  );
};
export default Navbar;