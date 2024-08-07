import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import "./Navbar.css";

const Navbar = ({ scrollToSection, refs }) => {
  const { homeRef, experienceRef, projectsRef, skillsRef, contactRef } = refs;

  const [isNightMode, setIsNightMode] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const toggleNightMode = () => {
    setIsNightMode(!isNightMode);
    document.body.classList.toggle("night-mode", !isNightMode);
  };

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className={`navbar-container ${isNightMode ? 'night-mode' : ''}`}>
      <nav className="navbar">
        <div className="navbar-logo" onClick={() => scrollToSection(homeRef)}>
          Niharika Vikram
        </div>
        <div className="navbar-right">
          <ul className="navbar-menu">
            <li className="navbar-item" onClick={() => scrollToSection(homeRef)}>Home</li>
            <li className="navbar-item" onClick={() => scrollToSection(experienceRef)}>Experience</li>
            <li className="navbar-item" onClick={() => scrollToSection(projectsRef)}>Projects</li>
            <li className="navbar-item" onClick={() => scrollToSection(skillsRef)}>Skills</li>
            <li className="navbar-item" onClick={() => scrollToSection(contactRef)}>Contact</li>
          </ul>
          <div className="night-mode-toggle" onClick={toggleNightMode}>
            <FontAwesomeIcon icon={isNightMode ? faSun : faMoon} />
          </div>
        </div>
      </nav>
      {isVisible && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          &#8679;
        </div>
      )}
    </div>
  );
};

export default Navbar;
