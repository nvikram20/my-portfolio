import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = ({ scrollToSection, refs }) => {
  const { homeRef, experienceRef, projectsRef, contactRef } = refs;

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
    <div className="navbar-container">
      <nav className="navbar">
        <div className="navbar-logo" onClick={() => scrollToSection(homeRef)}>
          Niharika Vikram
        </div>
        <div className="navbar-right">
          <ul className="navbar-menu">
            <li className="navbar-item" onClick={() => scrollToSection(homeRef)}>Home</li>
            <li className="navbar-item" onClick={() => scrollToSection(experienceRef)}>Experience</li>
            <li className="navbar-item" onClick={() => scrollToSection(projectsRef)}>Projects</li>
            <li className="navbar-item" onClick={() => scrollToSection(contactRef)}>Contact</li>
          </ul>
          <div className="toggle-switch">
            <input 
              type="checkbox" 
              id="nightModeToggle" 
              checked={isNightMode}
              onChange={toggleNightMode}
            />
            <label htmlFor="nightModeToggle" className="toggle-label"></label>
          </div>
        </div>
      </nav>
      {isVisible && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          &#8679; {/* This is a unicode arrow icon */}
        </div>
      )}
    </div>
  );
};

export default Navbar;
