import React, { useState } from "react";
// import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from "react-router-dom";
import "./navigation.styles.scss";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-logo">
          <Link to="/">
            <h1>SHOT_BY_KENNY</h1>
          </Link>
        </div>
      </div>
      <div className={`navbar-links ${isOpen ? "open" : ""}`}>
        <Link to="/aboutus" onClick={toggleMenu}>
          About
        </Link>
        <Link to="/price" onClick={toggleMenu}>
          Price
        </Link>
        <Link to="/portfolio" onClick={toggleMenu}>
          Testimonials
        </Link>
        <Link to="/gallery" onClick={toggleMenu}>
          Gallery
        </Link>
        <Link to="/contact" onClick={toggleMenu}>
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default NavigationBar;
